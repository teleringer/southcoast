"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-neutral-700">
        Send a brief summary of your matter. This does not create an attorney-client relationship.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        {/* simple honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Subject</label>
          <input name="subject" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={6} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        {status === "ok" && <p className="text-green-700">Thanks—your message was sent.</p>}
        {status === "err" && <p className="text-red-700">Something went wrong. Please try again.</p>}
      </form>
    </main>
  );
}
