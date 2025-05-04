"use client"

import { useState, useRef, useEffect } from "react"
import StatusBar from "@/components/status-bar"
import Logo from "@/components/logo"
import ChatMessage from "@/components/chat-message"
import ChatInput from "@/components/chat-input"
import NavigationBar from "@/components/navigation-bar"
import SuggestionButtons from "@/components/suggestion-buttons"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hola, ¿cómo estás? Soy tu asistente personal. Estoy aquí para ayudarte con lo que necesites. ¿En qué puedo ayudarte hoy?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Claro, estoy aquí para ayudarte. ¿Qué necesitas saber?",
        "Entiendo lo que me estás diciendo. Puedo ofrecerte algunas opciones.",
        "Gracias por compartir eso conmigo. Estoy aquí para apoyarte.",
        "¿Quieres que te explique más sobre este tema?",
        "Puedo ayudarte a encontrar recursos sobre esto.",
      ]

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const suggestions = ["¿Cómo puedo sentirme mejor?", "Necesito hablar con alguien", "Tengo miedo"]

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <StatusBar />

      <div className="px-4 py-2 border-b">
        <Logo />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}

        {isTyping && (
          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-1 bg-gray-200 rounded-lg px-3 py-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="px-4 py-2">
        <SuggestionButtons suggestions={suggestions} onSelect={handleSendMessage} />
      </div>

      <div className="px-4 py-2 border-t">
        <ChatInput value={inputValue} onChange={setInputValue} onSend={handleSendMessage} />
      </div>

      <NavigationBar />
    </div>
  )
}
