"use client"

import Image from "next/image"
import { FileText, ArrowLeft } from "lucide-react"

interface SafeLocationsProps {
  onShowActionPlan: () => void
  onBack: () => void
}

export default function SafeLocations({ onShowActionPlan, onBack }: SafeLocationsProps) {
  return (
    <div className="flex flex-col items-center p-6">
      <button onClick={onBack} className="self-start mb-4">
        <ArrowLeft className="h-6 w-6" />
      </button>

      <h2 className="text-lg font-medium mb-4 text-center">
        Estos son los espacios seguros donde puedes resguardarte ahora.
        <br />
        Cada uno tiene información sobre
        <br />
        cómo llegar al que queda más
        <br />
        cerca y seguro.
      </h2>

      <div className="w-full h-64 relative my-4 rounded-lg overflow-hidden">
        <Image src="/emergency-map.png" alt="Mapa de ubicaciones seguras" fill className="object-cover" />
      </div>

      <div className="w-full mt-4">
        <button
          onClick={onShowActionPlan}
          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-medium flex items-center justify-center"
        >
          <FileText className="mr-2 h-5 w-5" />
          Plan de Acción
        </button>
      </div>
    </div>
  )
}
