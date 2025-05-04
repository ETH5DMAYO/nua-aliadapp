"use client"

import type React from "react"

import { useState } from "react"
import StatusBar from "./status-bar"
import Logo from "./logo"

interface RegistrationFormProps {
  onComplete: () => void
}

export default function RegistrationForm({ onComplete }: RegistrationFormProps) {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [phone1, setPhone1] = useState("")
  const [phone2, setPhone2] = useState("")
  const [phone3, setPhone3] = useState("")
  const [emergencyContact, setEmergencyContact] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete()
  }

  return (
    <div className="relative flex flex-col w-full max-w-md h-screen overflow-hidden bg-white">
      <StatusBar />

      <div className="px-8 py-6">
        <Logo />
      </div>

      <div className="flex-grow px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mary Elliot"
                className="w-full p-4 rounded-full bg-white shadow-md border border-gray-100"
                required
              />
            </div>

            <div>
              <input
                type="text"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="14/04/1994"
                className="w-full p-4 rounded-full bg-white shadow-md border border-gray-100"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-8 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 relative">
                <div
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transform transition-all ${emergencyContact ? "translate-x-6" : ""}`}
                  onClick={() => setEmergencyContact(!emergencyContact)}
                ></div>
              </div>
              <span className="text-gray-500">Contacto de emergencia</span>
            </div>

            <div>
              <input
                type="tel"
                value={phone1}
                onChange={(e) => setPhone1(e.target.value)}
                placeholder="+555555555555"
                className="w-full p-4 rounded-full bg-white shadow-md border border-gray-100"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
                placeholder="+555555555555"
                className="w-full p-4 rounded-full bg-white shadow-md border border-gray-100"
              />
            </div>

            <div>
              <input
                type="tel"
                value={phone3}
                onChange={(e) => setPhone3(e.target.value)}
                placeholder="+555555555555"
                className="w-full p-4 rounded-full bg-white shadow-md border border-gray-100"
              />
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full p-4 rounded-full next-button text-white font-bold">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
