import { NextResponse } from "next/server"

interface ContactRequest {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body as ContactRequest

    // Validate input
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 })
    }

    // Log the submission (in production, send email using Resend, SendGrid, etc.)
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // const emailResponse = await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact from ${name}`,
    //   html: `<p>${message}</p><p>From: ${email}</p>`
    // })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. I'll get back to you soon!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
