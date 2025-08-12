import { NextRequest, NextResponse } from "next/server";

// POST /api/contact - Handle contact form submission (mock)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Mock: In a real application, you would send an email or save to database
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { message: "Thank you for your message! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
