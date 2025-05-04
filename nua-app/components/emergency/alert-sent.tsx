"use client"

import { MapPin, FileText } from "lucide-react"

interface AlertSentProps {
  onShowShelters: () => void
  onShowActionPlan: () => void
}

export default function AlertSent({ onShowShelters, onShowActionPlan }: AlertSentProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-2 text-teal-400">
        TU ALERTA YA FUE
        <br />
        ENVIADA.
      </h1>

      <p className="mb-8 text-gray-300">
        Tus personas de confianza están
        <br />
        siendo notificadas.
        <br />
        Estoy aquí para escucharte, hablar,
        <br />
        planear o simplemente respirar juntas,
        <br />
        como creas puedo ayudarte ahora.
      </p>

      <div className="w-full space-y-4 max-w-xs">
        <button
          onClick={onShowShelters}
          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-medium flex items-center justify-center"
        >
          <MapPin className="mr-2 h-5 w-5" />
          Albergues Cercanos
        </button>

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
