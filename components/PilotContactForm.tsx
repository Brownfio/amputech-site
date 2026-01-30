"use client";

import { useMemo, useState } from "react";

type Role = "amputee" | "veteran" | "clinician_va" | "other";

export default function PilotContactForm({ defaultIntent }: { defaultIntent: "pilot" | "contact" }) {
  const [role, setRole] = useState<Role>("amputee");
  const [intent, setIntent] = useState<"pilot" | "contact">(defaultIntent);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const heading = useMemo(() => {
    if (intent === "pilot") return "Join a Pilot";
    return "Contact Us";
  }, [intent]);

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("submitting");
  setErrorMsg("");

  try {
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Helpful metadata for inbox triage
    formData.set(
      "_subject",
      intent === "pilot"
        ? `Ampu.Tech Pilot Inquiry — ${formData.get("name")}`
        : `Ampu.Tech Contact — ${formData.get("name")}`
    );
    formData.set("regulatory", "Class I, FDA-registered, 510(k)-exempt");

    const res = await fetch("https://formspree.io/f/mwvoqgyb", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data?.error ?? "Submission failed.");
    }

    setStatus("success");
    form.reset();
  } catch (err: any) {
    setStatus("error");
    setErrorMsg(err?.message ?? "Something went wrong.");
  }
}

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 16,
        padding: 18,
        maxWidth: 760,
      }}
    >
      <h2 style={{ fontSize: 24, margin: "0 0 10px" }}>{heading}</h2>
      <p style={{ opacity: 0.8, marginTop: 0, lineHeight: 1.6 }}>
        Tell us who you are and what you're looking for. We'll route you appropriately.
      </p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginTop: 14 }}>
        <input type="hidden" name="intent" value={intent} />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontWeight: 700 }}>I am a…</span>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value as Role)} style={{ padding: 10, borderRadius: 12 }}>
            <option value="amputee">Amputee</option>
            <option value="veteran">Veteran</option>
            <option value="clinician_va">Clinician / VA</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontWeight: 700 }}>I want to…</span>
          <select
            name="intent_select"
            value={intent}
            onChange={(e) => setIntent(e.target.value as "pilot" | "contact")}
            style={{ padding: 10, borderRadius: 12 }}
          >
            <option value="pilot">Join a pilot</option>
            <option value="contact">Contact you</option>
          </select>
        </label>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>Name</span>
            <input name="name" required placeholder="Your name" style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(0,0,0,0.2)" }} />
          </label>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>Email</span>
            <input
              name="email"
              required
              type="email"
              placeholder="you@domain.com"
              style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(0,0,0,0.2)" }}
            />
          </label>
        </div>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontWeight: 700 }}>City / State (optional)</span>
          <input name="location" placeholder="Tulsa, OK" style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(0,0,0,0.2)" }} />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontWeight: 700 }}>Message</span>
          <textarea
            name="message"
            required
            placeholder="Tell us what you need and any constraints (rental, temporary housing, discharge timeline, etc.)."
            rows={5}
            style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(0,0,0,0.2)" }}
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          style={{
            padding: "12px 14px",
            borderRadius: 14,
            background: "black",
            color: "white",
            fontWeight: 800,
            border: "none",
            cursor: "pointer",
            opacity: status === "submitting" ? 0.7 : 1,
          }}
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
        </button>

        {status === "success" ? (
          <div style={{ padding: 12, borderRadius: 12, background: "rgba(0,0,0,0.05)" }}>
            Received. We'll review and follow up.
          </div>
        ) : null}

        {status === "error" ? (
          <div style={{ padding: 12, borderRadius: 12, background: "rgba(255,0,0,0.08)" }}>
            Submission error: {errorMsg}
          </div>
        ) : null}

        <div style={{ opacity: 0.7, fontSize: 13, lineHeight: 1.5 }}>
          Coverage decisions are made by payers and the VA based on individual circumstances. This form does not create a clinical relationship.
        </div>
      </form>
    </div>
  );
}
