import { NextResponse } from "next/server"

interface ContactRequest {
  name: string
  email: string
  phone?: string // Added optional phone field
  message: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body as ContactRequest

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

    // Log the submission
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "Not provided",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    })

    // ------------------------------------------------------------------
    // OPTIONAL: Example integration with Resend (Uncomment to use)
    // ------------------------------------------------------------------
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'vishalbaraiofficial01@gmail.com',
    //   subject: `New Contact from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

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