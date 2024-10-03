'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Star, GraduationCap, BookOpen, Building } from "lucide-react"

type EducationLevel = 'secundaria' | 'preparatoria' | 'superior'
type PlanKey = 'basico' | 'estandar' | 'avanzado' | 'premium' | 'intensivo'

type LevelPrices = {
  [key in EducationLevel]: {
    [key in PlanKey]: number
  }
}

const levelPrices: LevelPrices = {
  secundaria: {
    basico: 599,
    estandar: 999,
    avanzado: 1799,
    premium: 2199,
    intensivo: 2599
  },
  preparatoria: {
    basico: 699,
    estandar: 1199,
    avanzado: 2099,
    premium: 2499,
    intensivo: 2999
  },
  superior: {
    basico: 799,
    estandar: 1399,
    avanzado: 2399,
    premium: 2899,
    intensivo: 3399
  }
}

const educationLevels = [
  { key: 'secundaria', name: 'Secundaria', icon: BookOpen },
  { key: 'preparatoria', name: 'Preparatoria', icon: GraduationCap },
  { key: 'superior', name: 'Nivel Superior', icon: Building },
] as const

const plans = [
  { name: "Plan Básico", hours: 1, key: "basico" as const },
  { name: "Plan Estándar", hours: 2, key: "estandar" as const },
  { name: "Plan Avanzado", hours: 4, key: "avanzado" as const },
  { name: "Plan Premium", hours: 5, key: "premium" as const },
  { name: "Plan Intensivo", hours: 6, key: "intensivo" as const }
]

export default function PricingSection() {
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('secundaria')
  const whatsappNumber = "5212345678900" // Reemplaza con tu número real
  const whatsappMessage = encodeURIComponent("Hola, me interesa obtener más información sobre las asesorías.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleLevelChange = (level: EducationLevel) => {
    setSelectedLevel(level)
  }

  return (
    <section id="precios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Planes y Precios
        </h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Selecciona tu nivel educativo</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {educationLevels.map((level) => {
              const Icon = level.icon
              return (
                <button
                  key={level.key}
                  onClick={() => handleLevelChange(level.key)}
                  className={`flex flex-col items-center p-6 rounded-lg shadow-md transition-all ${
                    selectedLevel === level.key
                      ? 'bg-blue-600 text-white scale-105'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-12 h-12 mb-4" />
                  <span className="text-lg font-medium">{level.name}</span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {plans.map((plan) => (
            <div key={plan.key} className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                ${levelPrices[selectedLevel][plan.key]}
                <span className="text-sm font-normal">/mes</span>
              </p>
              <ul className="mb-6 space-y-2 flex-grow">
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  {plan.hours} {plan.hours === 1 ? 'hora' : 'horas'} a la semana
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Apoyo en tareas ilimitado
                </li>
                {plan.key !== 'basico' && (
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Acceso a recursos adicionales
                  </li>
                )}
                {['premium', 'intensivo'].includes(plan.key) && (
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Sesiones de preparación para exámenes
                  </li>
                )}
              </ul>
              <Button
                className="mt-auto"
                onClick={() => window.open(`${whatsappLink}&text=${encodeURIComponent(`Hola, me interesa el ${plan.name} para ${selectedLevel}`)}`)}
              >
                Seleccionar Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
