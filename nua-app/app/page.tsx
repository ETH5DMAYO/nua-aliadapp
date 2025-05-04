"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import OnboardingScreen from "@/components/onboarding-screen"
import RegistrationForm from "@/components/registration-form"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const router = useRouter()

  const screens = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lnkyhYUbi2sI64qe846pkmlhC8uOnY.png",
      title: "AQUÍ EMPIEZA TU CAMINO DE PODER.",
      subtitle: "Reconectar contigo es el primer acto de fuerza. Yo te acompaño desde ahí.",
      textColor: "text-white",
      highlightColor: "text-nua-gold",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HU7oxtPT2d5omhCyfZdWu7injlYNZP.png",
      title: "ACTIVA TU RED. SIENTE TU FUERZA.",
      subtitle:
        "Contamos con protocolos de emergencia y albergues aliados, listas para apoyarte si lo llegas a necesitar.",
      textColor: "text-white",
      highlightColor: "text-white",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZoSCv528g0jGxOl0UXPwolKAJRMUVv.png",
      title: "TU ALIADA APP INTELIGENTE. CONTIGO, EN CADA DECISIÓN.",
      subtitle: "Guía emocional y claridad para saber qué hacer. Sin juicios. Sin presión. Siempre contigo.",
      textColor: "text-white",
      highlightColor: "text-teal-300",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nyGVaTicmGorZRfcgK5VrwdPhTKlgg.png",
      title: "CRECE A TU RITMO. YO TE ACOMPAÑO.",
      subtitle:
        "Organiza tus finanzas, cultiva tu bienestar y avanza en lo que importa para ti. Todo en un solo espacio, sin prisas.",
      textColor: "text-white",
      highlightColor: "text-teal-300",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7fTaGq74BUUxTGoklliD3XY28zB3Uk.png",
      title: "CADA VEZ QUE TE ELIGES, ABRES CAMINO PARA OTRAS.",
      subtitle:
        "Organiza tus finanzas, cultiva tu bienestar y avanza en lo que importa para ti. Todo en un solo espacio, sin prisas.",
      textColor: "text-white",
      highlightColor: "text-nua-gold",
      darkMode: true,
      secondTitle: "AQUÍ, TU HISTORIA IMPORTA. Y TU PODER SE MULTIPLICA.",
    },
  ]

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1)
    }
  }

  const handleSkip = () => {
    setCurrentScreen(screens.length)
  }

  const handleRegistrationComplete = () => {
    router.push("/chat")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {currentScreen < screens.length ? (
        <OnboardingScreen
          image={screens[currentScreen].image}
          title={screens[currentScreen].title}
          subtitle={screens[currentScreen].subtitle}
          textColor={screens[currentScreen].textColor}
          highlightColor={screens[currentScreen].highlightColor}
          darkMode={screens[currentScreen].darkMode}
          secondTitle={screens[currentScreen].secondTitle}
          currentScreen={currentScreen}
          totalScreens={screens.length}
          onNext={handleNext}
          onSkip={handleSkip}
        />
      ) : (
        <RegistrationForm onComplete={handleRegistrationComplete} />
      )}
    </main>
  )
}
