import Image from "next/image"

interface ChatMessageProps {
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatMessage({ content, sender, timestamp }: ChatMessageProps) {
  const isUser = sender === "user"

  return (
    <div className={`flex ${isUser ? "justify-start" : "justify-end"} mb-4`}>
      {isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
          <Image src="/diverse-user-avatars.png" alt="User" width={32} height={32} className="object-cover" />
        </div>
      )}

      <div className={`max-w-[75%] ${isUser ? "bg-black text-white" : "bg-gray-200 text-black"} rounded-2xl px-4 py-2`}>
        <p className="text-sm">{content}</p>
      </div>

      {!isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden ml-2 flex-shrink-0">
          <Image src="/placeholder.svg?key=b44p1" alt="AI" width={32} height={32} className="object-cover" />
        </div>
      )}
    </div>
  )
}
