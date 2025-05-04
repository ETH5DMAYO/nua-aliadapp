"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import StatusBar from "./status-bar"
import Logo from "./logo"

interface OnboardingScreenProps {
  image: string
  title: string
  subtitle: string
  textColor: string
  highlightColor: string
  darkMode?: boolean
  secondTitle?: string
  currentScreen: number
  totalScreens: number
  onNext: () => void
  onSkip: () => void
}

export default function OnboardingScreen({
  image,
  title,
  subtitle,
  textColor,
  highlightColor,
  darkMode = false,
  secondTitle,
  currentScreen,
  totalScreens,
  onNext,
  onSkip,
}: OnboardingScreenProps) {
  const bgClass = darkMode ? "dark-gradient-bg" : "gradient-bg"

  // Dividir el título para resaltar la segunda parte si es necesario
  const titleParts = title.split(".")
  const mainTitle = titleParts[0]
  const highlightedTitle = titleParts.length > 1 ? titleParts[1] : ""

  // Dividir el segundo título si existe
  const secondTitleParts = secondTitle ? secondTitle.split(".") : []

  return (
    <div className={`relative flex flex-col w-full max-w-md h-screen overflow-hidden ${bgClass}`}>
      <StatusBar />

      <div className="px-8 py-6 z-10">
        <Logo darkMode={darkMode} />
      </div>

      {!darkMode ? (
        <div className="relative flex-grow">
          <div className="absolute inset-0 w-full h-full">
            <Image src={image || "/placeholder.svg"} alt="Onboarding" fill priority className="object-cover" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent pt-32">
            <h1 className={`text-4xl font-extrabold mb-2 ${textColor}`}>
              {mainTitle}
              {highlightedTitle && <span className={highlightColor}>{highlightedTitle}</span>}
            </h1>
            <p className={`text-lg mb-8 ${textColor}`}>{subtitle}</p>

            <div className="flex justify-center space-x-2 mb-4">
              {Array.from({ length: totalScreens }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === currentScreen ? "bg-teal-300" : "bg-white bg-opacity-50"}`}
                />
              ))}
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={onNext}
                className="w-16 h-16 rounded-full next-button flex items-center justify-center mb-4"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
              <button onClick={onSkip} className="text-white text-sm">
                saltar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-grow justify-center p-8">
          <div className="flex-grow"></div>

          <div className="mb-16">
            <h1 className={`text-4xl font-extrabold mb-2 ${textColor}`}>{mainTitle}</h1>

            {secondTitleParts.length > 0 && (
              <h2 className={`text-4xl font-extrabold mb-6 ${highlightColor}`}>
                {secondTitleParts[0]}.{secondTitleParts.length > 1 && secondTitleParts[1]}
              </h2>
            )}

            <p className={`text-lg mb-8 ${textColor}`}>{subtitle}</p>
          </div>

          <div className="flex-grow"></div>

          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: totalScreens }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${i === currentScreen ? "bg-teal-300" : "bg-white bg-opacity-50"}`}
              />
            ))}
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={onNext}
              className="w-16 h-16 rounded-full next-button flex items-center justify-center mb-4"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <button onClick={onSkip} className="text-white text-sm">
              saltar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
