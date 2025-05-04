"use client"

import type React from "react"

import { Send } from "lucide-react"

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: (message: string) => void
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSend(value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <button
        type="submit"
        className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 flex items-center justify-center text-white"
        disabled={!value.trim()}
      >
        <Send size={18} />
      </button>
    </form>
  )
}
