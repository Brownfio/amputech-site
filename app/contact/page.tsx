"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || ""),
    };

    // Use public Formspree endpoint if configured; otherwise fall back to /api/contact
    const endpoint = (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string) || "/api/contact";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Request failed");
      }

      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Contact</h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">
        Send a message and we’ll respond with next steps. If you can, include your timeline
        and the outcome you’re trying to achieve.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 p-6">
          <div className="grid gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company (optional)" name="company" />
            <div>
              <label className="text-sm font-medium text-gray-900">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && <span className="text-sm text-green-700">Message sent.</span>}
            {status === "error" && <span className="text-sm text-red-700">{error}</span>}
          </div>
        </form>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Company info</h2>
          <div className="mt-3 text-sm leading-6 text-gray-600">
            <p>
              Email: <a href="mailto:msimonetti@ampu.tech" className="text-blue-600 hover:underline">msimonetti@ampu.tech</a>
            </p>
            <p>
              Phone: <a href="tel:+16198851390" className="text-blue-600 hover:underline">+1 (619) 885-1390</a>
            </p>
            <p className="mt-3">Service area: Chula Vista, CA</p>
          </div>

          <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-0 overflow-hidden">
            <iframe
              title="Amputech service area — Chula Vista, CA"
              width="100%"
              height="280"
              className="block"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Chula+Vista,+CA&output=embed"



