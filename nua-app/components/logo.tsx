interface LogoProps {
  darkMode?: boolean
}

export default function Logo({ darkMode = false }: LogoProps) {
  const textColor = darkMode ? "text-white" : "text-gray-700"

  return <div className={`text-5xl font-black ${textColor}`}>NUA</div>
}
