"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import ScrollReveal from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Loader2, MessageCircle } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const suggestedQuestions = [
  "What tech stack do you use for web development?",
  "Tell me about your app development experience",
  "What security certifications do you have?",
  "What's your approach to software architecture?",
  "Can you explain your most complex project?",
  "What's your experience with cloud platforms?",
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent | string) => {
    if (typeof e !== "string") {
      e.preventDefault()
    }

    const messageText = typeof e === "string" ? e : input
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Assistant error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AI Assistant</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ask me anything about my experience, skills, and projects
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <ScrollReveal className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle size={24} className="text-primary" />
                  Chat
                </CardTitle>
                <CardDescription>Powered by AI</CardDescription>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.length === 0 && (
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <MessageCircle size={48} className="mx-auto text-muted mb-4 opacity-50" />
                      <p className="text-muted">Start a conversation by asking a question</p>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-card border border-border rounded-lg px-4 py-2">
                      <Loader2 className="animate-spin text-primary" size={20} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="border-t border-border p-4">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me something..."
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  />
                  <Button type="submit" disabled={loading || !input.trim()} size="icon">
                    <Send size={20} />
                  </Button>
                </form>
              </div>
            </Card>
          </ScrollReveal>

          {/* Suggested Questions */}
          <ScrollReveal delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggested Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(question)}
                    disabled={loading}
                    className="w-full text-left p-3 rounded-lg bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all text-sm text-muted hover:text-foreground disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
