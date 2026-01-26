import Link from "next/link";

export default function SmartSocketAdapterPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Smart Socket Adapter</h1>
      <p className="mt-4 text-gray-600 leading-7">
        A compact adapter that enables sensor integration for socket alignment monitoring and simple connectivity to clinical tools — designed to help clinicians and users improve fit and outcomes.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <p className="mt-3 text-sm text-gray-600">
            The Smart Socket Adapter provides a lightweight interface for attaching low-profile sensors and a small telemetry unit. It supports simple diagnostics and alignment feedback during fittings and follow-ups.
          </p>

          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2">
            <li>Sensor-ready mounting compatible with common sockets</li>
            <li>Low-power telemetry for short-range data transfer</li>
            <li>Minimal impact on socket geometry and comfort</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Clinical benefits</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2">
            <li>Objective alignment data to speed fittings</li>
            <li>Enables remote follow-up with sensor data</li>
            <li>Helps quantify outcomes for iterative improvement</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-600">
          Contact us to discuss integration, sensor options, and pilot programs tailored to your clinic.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Contact Us
          </Link>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 px-5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}