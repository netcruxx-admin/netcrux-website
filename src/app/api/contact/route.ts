import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name?: string
  email?: string
  service?: string
  budget?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const service = payload.service?.trim() ?? ""
  const budget = payload.budget?.trim() ?? ""
  const message = payload.message?.trim() ?? ""

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and project details are required." },
      { status: 400 },
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.")
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  })

  const plainText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service || "—"}`,
    `Budget: ${budget || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n")

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #111;">
      <h2 style="margin: 0 0 16px;">New project enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "—")}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || "—")}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"NetCrux Website" <${user}>`,
      to: user,
      replyTo: `"${name}" <${email}>`,
      subject: `New project enquiry — ${name}`,
      text: plainText,
      html,
    })
  } catch (err) {
    console.error("Failed to send contact email:", err)
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
