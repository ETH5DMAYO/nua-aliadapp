"use client"

import { Shield, Phone, MapPin, FileText } from "lucide-react"

interface EmergencyMainProps {
  onSendAlert: () => void
  onCall911: () => void
  onShowShelters: () => void
  onShowActionPlan: () => void
}

export default function EmergencyMain({
  onSendAlert,
  onCall911,
  onShowShelters,
  onShowActionPlan,
}: EmergencyMainProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-2 text-amber-400">
        RESPIRA.
        <br />
        YA ESTÁS EN UN LUGAR
        <br />
        IMPORTANTE.
      </h1>

      <p className="mb-8 text-gray-300">
        No estás sola. Estoy contigo.
        <br />
        Aquí tienes las primeras acciones
        <br />
        para mantener la comunicación
        <br />
        segura y clara.
      </p>

      <div className="w-full space-y-4 max-w-xs">
        <button
          onClick={onSendAlert}
          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-white font-medium flex items-center justify-center"
        >
          <Shield className="mr-2 h-5 w-5" />
          Enviar Alerta
        </button>

        <button
          onClick={onCall911}
          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-white font-medium flex items-center justify-center"
        >
          <Phone className="mr-2 h-5 w-5" />
          Llama al 911
        </button>

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
