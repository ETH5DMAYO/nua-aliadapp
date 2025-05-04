import Link from "next/link"
import { User, Shield, MessageSquare, Calendar, Menu } from "lucide-react"

interface NavigationBarProps {
  activeTab?: "profile" | "emergency" | "chat" | "calendar" | "menu"
}

export default function NavigationBar({ activeTab }: NavigationBarProps) {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-t bg-black">
      <Link
        href="/profile"
        className={`flex flex-col items-center ${activeTab === "profile" ? "text-teal-500" : "text-white"}`}
      >
        <User size={20} />
        <span className="text-xs mt-1">Perfil</span>
      </Link>

      <Link
        href="/emergency"
        className={`flex flex-col items-center ${activeTab === "emergency" ? "text-teal-500" : "text-white"}`}
      >
        <Shield size={20} />
        <span className="text-xs mt-1">Emergencia</span>
      </Link>

      <Link
        href="/chat"
        className={`flex flex-col items-center ${activeTab === "chat" ? "text-teal-500" : "text-white"}`}
      >
        <MessageSquare size={20} />
        <span className="text-xs mt-1">Chat</span>
      </Link>

      <Link
        href="/calendar"
        className={`flex flex-col items-center ${activeTab === "calendar" ? "text-teal-500" : "text-white"}`}
      >
        <Calendar size={20} />
        <span className="text-xs mt-1">Calendario</span>
      </Link>

      <Link
        href="/menu"
        className={`flex flex-col items-center ${activeTab === "menu" ? "text-teal-500" : "text-white"}`}
      >
        <Menu size={20} />
        <span className="text-xs mt-1">Menú</span>
      </Link>
    </div>
  )
}
