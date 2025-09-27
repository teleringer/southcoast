"use client";

import { useState } from "react";
import Button from "../base/Button";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

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
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-serif text-2xl font-semibold">Request a Consultation</h2>
      <p className="mt-2 max-w-3xl text-neutral-700">
        Send a brief summary of your matter. This does not create an attorney–client relationship.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
        {/* honeypot */}
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
          <label className="block text-sm font-medium">Service</label>
          <select name="service" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2">
            <option value="">Select one…</option>
            <option>Family & Divorce</option>
            <option>Probate & Estates</option>
            <option>Civil / Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={6} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
        </div>

        <div className="md:col-span-2">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>
          {status === "ok" && <span className="ml-3 text-green-700">Thanks—your message was sent.</span>}
          {status === "err" && <span className="ml-3 text-red-700">Something went wrong. Please try again.</span>}
        </div>
      </form>
    </section>
  );
}
