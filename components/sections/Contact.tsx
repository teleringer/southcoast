"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "sending">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      let p = "";
      if (digits.length <= 3) p = `(${digits}`;
      else if (digits.length <= 6) p = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      else p = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      setForm((f) => ({ ...f, phone: p }));
      return;
    }
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">Request a Consultation</h2>
        <p className="mt-2 max-w-3xl text-gray-700">
          Send a brief summary of your matter. This does not create an attorney–client relationship.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info card */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <i className="ri-phone-line text-xl text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a href="tel:+19549953306" className="text-gray-600 hover:text-blue-600">
                    (954) 995-3306
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <i className="ri-mail-line text-xl text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:southcoast@teleringer.com" className="text-gray-600 hover:text-blue-600">
                    southcoast@teleringer.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              >
                <option value="">Select one…</option>
                <option>Business Law</option>
                <option>Real Estate</option>
                <option>Wills & Estates</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-md bg-blue-700 px-5 py-3 text-white font-semibold hover:bg-blue-800 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status === "success" && <span className="ml-3 text-green-700">Thanks—your message was sent.</span>}
              {status === "error" && <span className="ml-3 text-red-700">Something went wrong. Please try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
