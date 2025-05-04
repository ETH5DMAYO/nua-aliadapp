"use client"

import { useState } from "react"
import StatusBar from "@/components/status-bar"
import Logo from "@/components/logo"
import NavigationBar from "@/components/navigation-bar"
import EmergencyMain from "@/components/emergency/emergency-main"
import AlertSent from "@/components/emergency/alert-sent"
import SafeLocations from "@/components/emergency/safe-locations"
import CalmInstructions from "@/components/emergency/calm-instructions"

type EmergencyState = "main" | "alert-sent" | "safe-locations" | "calm-instructions"

export default function EmergencyPage() {
  const [state, setState] = useState<EmergencyState>("main")
  const [step, setStep] = useState(1)

  const handleSendAlert = () => {
    setState("alert-sent")
  }

  const handleShowSafeLocations = () => {
    setState("safe-locations")
  }

  const handleShowInstructions = () => {
    setState("calm-instructions")
    setStep(1)
  }

  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1)
    } else {
      // Reset to main screen after all steps
      setState("main")
      setStep(1)
    }
  }

  const handleBackToMain = () => {
    setState("main")
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <StatusBar />

      <div className="px-4 py-2 border-b border-gray-800">
        <Logo darkMode={true} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {state === "main" && (
          <EmergencyMain
            onSendAlert={handleSendAlert}
            onCall911={() => console.log("Llamando al 911...")}
            onShowShelters={handleShowSafeLocations}
            onShowActionPlan={handleShowInstructions}
          />
        )}

        {state === "alert-sent" && (
          <AlertSent onShowShelters={handleShowSafeLocations} onShowActionPlan={handleShowInstructions} />
        )}

        {state === "safe-locations" && (
          <SafeLocations onShowActionPlan={handleShowInstructions} onBack={handleBackToMain} />
        )}

        {state === "calm-instructions" && (
          <CalmInstructions
            step={step}
            onNext={handleNextStep}
            onBack={step > 1 ? () => setStep(step - 1) : handleBackToMain}
          />
        )}
      </div>

      <NavigationBar activeTab="emergency" />
    </div>
  )
}
