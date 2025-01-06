'use client'

import { useState, useRef } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Book, Upload } from 'lucide-react'
import UseCases from './use-cases'

export default function ReadTime() {
  const [stats, setStats] = useState({
    readAloudTime: 0,
    readingTime: 0,
    words: 0,
    characters: 0,
  })
  const [readAloudSpeed, setReadAloudSpeed] = useState(183)
  const [silentReadingSpeed, setSilentReadingSpeed] = useState(238)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const analyzeText = async (text: string) => {
    try {
      // This is where you would call your Hono API endpoint
      // Example URL: https://your-hono-api.com/readtime
      const response = await fetch('YOUR_HONO_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error analyzing text:', error);
      // You might want to set an error state here to display to the user
      setStats({
        readAloudTime: 0,
        readingTime: 0,
        words: 0,
        characters: 0,
      });
      // Optionally, set an error message state to display to the user
      // setErrorMessage('Failed to analyze text. Please try again.');
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const text = await file.text()
      analyzeText(text)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Book className="w-8 h-8" />
        <nav className="flex gap-4">
          <Button variant="ghost">Words To Time</Button>
          <Button variant="ghost">Reading Speed Test</Button>
          <Button variant="ghost">Free Tools</Button>
        </nav>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-8 text-center">
        <div>
          <h3 className="text-sm text-muted-foreground uppercase">Read Aloud Time</h3>
          <p className="text-2xl font-bold">{formatTime(stats.readAloudTime)}</p>
          <p className="text-xs text-muted-foreground">mins:secs</p>
        </div>
        <div>
          <h3 className="text-sm text-muted-foreground uppercase">Reading Time</h3>
          <p className="text-2xl font-bold">{formatTime(stats.readingTime)}</p>
          <p className="text-xs text-muted-foreground">mins:secs</p>
        </div>
        <div>
          <h3 className="text-sm text-muted-foreground uppercase">Words</h3>
          <p className="text-2xl font-bold">{stats.words}</p>
        </div>
        <div>
          <h3 className="text-sm text-muted-foreground uppercase">Characters</h3>
          <p className="text-2xl font-bold">{stats.characters}</p>
        </div>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Read Faster, Learn More, Zero Distractions</h1>
          <p className="text-lg text-muted-foreground">
            The average english speaker reads at around 238 WPM
          </p>
        </div>

        <Textarea
          className="min-h-[200px]"
          placeholder="Type or paste your text, or enter the word count directly"
          onChange={(e) => analyzeText(e.target.value)}
        />

        <div className="flex gap-4 justify-center">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".txt"
            onChange={handleFileUpload}
          />
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              if (fileInputRef.current) fileInputRef.current.value = ''
              setStats({
                readAloudTime: 0,
                readingTime: 0,
                words: 0,
                characters: 0,
              })
            }}
          >
            Clear
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Read Aloud Speed:</span>
              <span>{readAloudSpeed} WPM</span>
            </div>
            <Slider
              value={[readAloudSpeed]}
              onValueChange={([value]) => setReadAloudSpeed(value)}
              min={100}
              max={300}
              step={1}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Slow</span>
              <span>Average</span>
              <span>Fast</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Silent Reading Speed:</span>
              <span>{silentReadingSpeed} WPM</span>
            </div>
            <Slider
              value={[silentReadingSpeed]}
              onValueChange={([value]) => setSilentReadingSpeed(value)}
              min={100}
              max={400}
              step={1}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Slow</span>
              <span>Average</span>
              <span>Fast</span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="font-medium">Words To Time Converter</p>
          <p className="text-sm text-muted-foreground">
            Accurately estimate reading times for any reading material, text, speech or voice-over script.
          </p>
        </div>
        <UseCases />
      </div>
    </main>
  )
}

