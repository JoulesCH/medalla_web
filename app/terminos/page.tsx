'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, PenTool, FileText, Star, Award, X } from "lucide-react"

import { useState, useEffect } from 'react'

export default function LandingPageComponent() {
  
  const [showPopup, setShowPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 30 minutes in seconds
  const [subject, setSubject] = useState("")
  const subjects = ["Matemáticas", "Física", "Inglés", "Programación"]


  const [style, setStyle] = useState({
    transform: 'translateY(0%)',
    opacity: 1,
    transition: 'transform 0.5s cubic-bezier(0.48, 0.08, 0.19, 1), opacity 0.5s',
  });

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      // 1. Animar salida hacia arriba
      setStyle((prev) => ({
        ...prev,
        transform: 'translateY(-100%)',
        opacity: 0,
      }));

      // 2. Cambiar el texto después de la animación de salida
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % subjects.length;
        setSubject(subjects[currentIndex]);

        // 3. Posicionar el nuevo texto debajo sin transición
        setStyle({
          transform: 'translateY(100%)',
          opacity: 0,
          transition: 'none',
        });

        // 4. En el siguiente frame, animar entrada desde abajo
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setStyle({
              transform: 'translateY(0%)',
              opacity: 1,
              transition:
                'transform 0.5s cubic-bezier(0.48, 0.08, 0.19, 1), opacity 0.5s',
            });
          });
        });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [setSubject]);


  useEffect(() => {
    setShowPopup(true)

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const whatsappNumber = "525532507053" // Reemplaza con tu número real
  const whatsappMessage = encodeURIComponent("Hola, me interesa obtener más información sobre las asesorías.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="max-w-3xl mx-auto p-6 text-justify">
      <div className="container mx-auto flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image width="40" height="40" alt="logo" src="/gemico.png"/>
            <span className="font-bold">Grupo de Estudio Medalla</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#inicio">
              Inicio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#servicios">
              Servicios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#precios">
              Precios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#testimonios">
              Testimonios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contacto">
              Contacto
            </Link>
          </nav>
        </div>
      <h1 className="text-2xl font-bold mb-6 text-center">Términos y Condiciones</h1>

      <p className="mb-4">
        Este sitio web y los servicios ofrecidos son administrados por una profesional egresada del Instituto Politécnico Nacional, de la carrera de Licenciatura en Física y Matemáticas.
        Las asesorías se ofrecen en las siguientes áreas: física, matemáticas, inglés, programación, así como apoyo en proyectos y tareas, a nivel primaria, secundaria, bachillerato y universidad.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>El pago total debe realizarse por adelantado antes de cada clase.</li>
        <li>Los métodos de pago aceptados son transferencias bancarias o depósitos.</li>
        <li>No se realizan devoluciones por ninguna razón, salvo casos excepcionales autorizados directamente por la asesora.</li>
        <li>Los horarios están sujetos a la disponibilidad tanto del cliente como de la asesora.</li>
        <li>Las asesorías se imparten principalmente en modalidad en línea; en algunos casos pueden ser presenciales, siempre que haya disponibilidad.</li>
        <li>En el caso de alumnos menores de edad, es obligatorio que la contratación del servicio y la comunicación sea gestionada por madres, padres o tutores legales.</li>
        <li>Está estrictamente prohibido copiar, redistribuir, revender o utilizar con fines comerciales el material proporcionado durante las asesorías.</li>
        <li>El incumplimiento de estas condiciones puede resultar en la suspensión definitiva del servicio sin derecho a reembolso.</li>
        <li>Se espera respeto mutuo y una comunicación clara y profesional durante todo el proceso.</li>
      </ul>

      <p>
        Al contratar una asesoría, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte, por favor abstente de utilizar este servicio.
      </p>
    </div>
  );
}

  


