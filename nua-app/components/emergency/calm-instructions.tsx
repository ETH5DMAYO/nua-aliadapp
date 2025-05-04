"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"

interface CalmInstructionsProps {
  step: number
  onNext: () => void
  onBack: () => void
}

export default function CalmInstructions({ step, onNext, onBack }: CalmInstructionsProps) {
  const steps = [
    {
      instructions: [
        {
          title: "1. Lo más importante ahora es saber dónde estás.",
          details: "No busques nada. Solo toma la esencial. Celular, identificación, y lo que te dé tranquilidad.",
        },
        {
          title: "2. Respira. No estás sola.",
          details: "Yo estoy a tu lado más segura para ti.",
        },
        {
          title: "3. Si alberque está en:",
          details:
            "1. Casa Refugio Luz Viva\n2. Calle 26 #35, Col. Centro, a 15 min de tu ubicación\n(Ya verificamos que está disponible y esperamos tu llegada)",
        },
      ],
    },
    {
      instructions: [
        {
          title: "1. Lo más importante ahora es saber dónde estás.",
          details: "No busques nada. Solo toma la esencial. Celular, identificación, y lo que te dé tranquilidad.",
        },
        {
          title: "2. Respira. No estás sola.",
          details: "Yo estoy a tu lado más segura para ti.",
        },
        {
          title: "3. Si alberque está en:",
          details:
            "1. Casa Refugio Luz Viva\n2. Calle 26 #35, Col. Centro, a 15 min de tu ubicación\n(Ya verificamos que está disponible y esperamos tu llegada)",
        },
        {
          title: "4. Cuando estés lista, sal.",
          details: "Mantén tu celular contigo. Puedes escribirme o activar llamada si lo necesitas.",
        },
      ],
    },
    {
      instructions: [
        {
          title: "1. Lo más importante ahora es saber dónde estás.",
          details: "No busques nada. Solo toma la esencial. Celular, identificación, y lo que te dé tranquilidad.",
        },
        {
          title: "2. Respira. No estás sola.",
          details: "Yo estoy a tu lado más segura para ti.",
        },
        {
          title: "3. Si alberque está en:",
          details:
            "1. Casa Refugio Luz Viva\n2. Calle 26 #35, Col. Centro, a 15 min de tu ubicación\n(Ya verificamos que está disponible y esperamos tu llegada)",
        },
        {
          title: "4. Cuando estés lista, sal.",
          details: "Mantén tu celular contigo. Puedes escribirme o activar llamada si lo necesitas.",
        },
        {
          title: "5. Una vez allí, avísame.",
          details: "Quiero saber que ya estás bien y segura.",
        },
      ],
    },
    {
      instructions: [
        {
          title: "1. Lo más importante ahora es saber dónde estás.",
          details: "No busques nada. Solo toma la esencial. Celular, identificación, y lo que te dé tranquilidad.",
        },
        {
          title: "2. Respira. No estás sola.",
          details: "Yo estoy a tu lado más segura para ti.",
        },
        {
          title: "3. Si alberque está en:",
          details:
            "1. Casa Refugio Luz Viva\n2. Calle 26 #35, Col. Centro, a 15 min de tu ubicación\n(Ya verificamos que está disponible y esperamos tu llegada)",
        },
        {
          title: "4. Cuando estés lista, sal.",
          details: "Mantén tu celular contigo. Puedes escribirme o activar llamada si lo necesitas.",
        },
        {
          title: "5. Una vez allí, avísame.",
          details: "Quiero saber que ya estás bien y segura.",
        },
      ],
    },
    {
      instructions: [
        {
          title: "1. Lo más importante ahora es saber dónde estás.",
          details: "No busques nada. Solo toma la esencial. Celular, identificación, y lo que te dé tranquilidad.",
        },
        {
          title: "2. Respira. No estás sola.",
          details: "Yo estoy a tu lado más segura para ti.",
        },
        {
          title: "3. Si alberque está en:",
          details:
            "1. Casa Refugio Luz Viva\n2. Calle 26 #35, Col. Centro, a 15 min de tu ubicación\n(Ya verificamos que está disponible y esperamos tu llegada)",
        },
        {
          title: "4. Cuando estés lista, sal.",
          details: "Mantén tu celular contigo. Puedes escribirme o activar llamada si lo necesitas.",
        },
        {
          title: "5. Una vez allí, avísame.",
          details: "Quiero saber que ya estás bien y segura.",
        },
      ],
    },
  ]

  const currentStep = steps[Math.min(step - 1, steps.length - 1)]

  return (
    <div className="flex flex-col p-6">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <span className="text-sm text-gray-400">Paso {step} de 5</span>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-amber-400 text-center">
        ESCÚCHAME
        <br />
        CON CALMA.
        <br />
        VAMOS PASO A PASO, ESTOY
        <br />
        CONTIGO.
      </h1>

      <div className="space-y-6 mb-8">
        {currentStep.instructions.map((instruction, index) => (
          <div key={index} className="space-y-1">
            <h3 className="font-medium">{instruction.title}</h3>
            <p className="text-gray-300 whitespace-pre-line">{instruction.details}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <button
          onClick={onNext}
          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-medium flex items-center justify-center"
        >
          {step < 5 ? (
            <>
              Siguiente <ArrowRight className="ml-2 h-5 w-5" />
            </>
          ) : (
            "Finalizar"
          )}
        </button>
      </div>
    </div>
  )
}
