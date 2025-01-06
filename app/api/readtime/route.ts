import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const text = body.text as string

    if (!text) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 })
    }

    // Calculate statistics
    const words = text.trim().split(/\s+/).length
    const characters = text.length
    const readAloudTime = Math.ceil((words / 183) * 60) // 183 WPM average speaking rate
    const readingTime = Math.ceil((words / 238) * 60) // 238 WPM average reading rate

    return NextResponse.json({
      words,
      characters,
      readAloudTime,
      readingTime,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

