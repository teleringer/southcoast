// app/api/contact/route.ts
export const runtime = "nodejs"; // ensure Node.js runtime for nodemailer

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** required env helper */
function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

/** simple HTML escape */
function esc(v: string) {
  return (v || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const { name = "", email = "", phone = "", subject = "", message = "", company = "" } = body;

    // Honeypot: bots fill this; humans don't
    if (String(company).trim()) {
      return NextResponse.json({ ok: true });
    }

    // SMTP config from env
    const host = reqEnv("SMTP_HOST");
    const port = Number(reqEnv("SMTP_PORT"));
    const user = reqEnv("SMTP_USER");
    const pass = reqEnv("SMTP_PASS");
    const FROM = reqEnv("CONTACT_FROM"); // e.g., "southcoast@teleringer.com"
    const TO = reqEnv("CONTACT_TO");     // where you want to receive (can be same as FROM)

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: { user, pass },
    });

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
        <h2>New Contact — SouthCoast.Legal</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone)}</p>
        <p><strong>Subject:</strong> ${esc(subject)}</p>
        <p><strong>Message:</strong><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: FROM,                 // must be your domain to satisfy DMARC
      to: TO,                     // your inbox(es)
      subject: subject || "New Contact — SouthCoast.Legal",
      html,
      replyTo: email ? `${name || "Website Visitor"} <${email}>` : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
