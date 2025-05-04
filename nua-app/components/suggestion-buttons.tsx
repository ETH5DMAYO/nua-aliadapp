"use client"

interface SuggestionButtonsProps {
  suggestions: string[]
  onSelect: (suggestion: string) => void
}

export default function SuggestionButtons({ suggestions, onSelect }: SuggestionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          className="bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm text-gray-800"
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}
