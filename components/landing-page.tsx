'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, PenTool, FileText, Star, Award, X } from "lucide-react"

import { useState, useEffect, use } from 'react'
import PricingSection from './pricing-section'
import { useCookies } from 'next-client-cookies';

export function LandingPageComponent() {
  const [timeLeft, setTimeLeft] = useState(0) 
  const [showPopup, setShowPopup] = useState(false)

  const cookies = useCookies()
  const showpopup = cookies.get("showpopup")

  useEffect(() => {
    if(!showpopup){
        setShowPopup(true)
        cookies.set("showpopup", "true") 
        const now = new Date()
        cookies.set("time", now.toISOString()) 
        setTimeLeft(5 * 60) // 5 minutes in seconds
    } else {
        const time = cookies.get("time")
        const now = new Date()
        const timeDiff = Math.abs(now.getTime() - new Date(time).getTime())
        const diffMinutes = (timeDiff / 1000) / 60
        if(diffMinutes >= 5){
            setShowPopup(true)
            cookies.set("showpopup", "true") 
            cookies.set("time", now.toISOString()) 
            setTimeLeft(5 * 60) // 5 minutes in seconds
        } else {
            cookies.set("showpopup", "false") 
            // update timeLeft
            const newTimeLeft = 5 * 60 - diffMinutes * 60
            setTimeLeft(newTimeLeft)
        }
    }
  }, [])

  
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
    const toshow = cookies.get("showpopup")

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
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const whatsappNumber = "525532507053" 
  const whatsappMessage = encodeURIComponent("Hola, me interesa obtener más información sobre las asesorías.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="flex flex-col min-h-screen w-full">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">¡Felicidades!</h2>
            <p className="text-lg mb-4 text-center">Has ganado un cupón de descuento del 20%</p>
            <p className="text-3xl font-bold text-center text-[#ff9e1a] mb-4">MEDALLA20</p>
            <p className="text-sm text-gray-600 text-center">Válido por los próximos 5 minutos</p>
            <Button 
              className="w-full mt-4"
              onClick={() => {
                setShowPopup(false)
              }}
            >
              ¡Entendido!
            </Button>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

        {/* Contador regresivo */}
        <div className="bg-[#ff9e1a] text-white py-2 text-center sticky top-0 z-50">
          <p>¡Oferta especial! Código de descuento MEDALLA20 para obtener 20% de descuento. Tiempo restante: {formatTime(timeLeft)}</p>
        </div>
        <div className="container mx-auto flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image width="40" height="40" alt="logo" src="/gemico.png"/>
            <span className="font-bold">Grupo de Estudio Medalla</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#inicio">
              Inicio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
              Servicios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#precios">
              Precios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonios">
              Testimonios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none" >
                  Asesorías Personalizadas en <span className = "pb-8 pt-6" style={{
                    position: 'relative',
                    height: '60px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>  <span style={{ ...style, position: 'absolute', margin: 0 }}>  {subject} </span> </span> 
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Alcanza tus metas académicas de la mano de asesores jóvenes altamente capacitados.
                
                </p>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mr-2"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Reserva tu Clase Gratis
              </Button>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 mb-4 text-[#ff9e1a]" />
                <h3 className="text-xl font-bold mb-2">Clases Particulares</h3>
                <p className="text-gray-500">Atención personalizada para tus necesidades específicas</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Clases Grupales</h3>
                <p className="text-gray-500">Aprende en un ambiente colaborativo y dinámico con tus mejores amigos</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PenTool className="h-12 w-12 mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">Apoyo en Tareas</h3>
                <p className="text-gray-500">Resuelve tus dudas y mejora tu comprensión disponible 24/7</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2">Ayuda en Proyectos</h3>
                <p className="text-gray-500">Guía experta para tus proyectos escolares</p>
              </div>
            </div>
          </div>
        </section>
	      <PricingSection />
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Lo que dicen nuestros estudiantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <p className="mb-4 text-gray-600 italic">"La asesoría me ayudó mucho porque ahora entiendo mejor los temas y me siento más seguro al resolver ejercicios. 
                  Antes me costaba trabajo, pero con las explicaciones claras y los ejemplos, todo se me hizo más fácil."</p>
                <div className="flex items-center mt-auto">
                  
                  <div>
                    <p className="font-bold">Guillen Reyes Francisco Xavier</p>
                    <p className="text-sm text-gray-500">4to año, E.N.P 3 Justo Sierra </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <p className="mb-4 text-gray-600 italic">"Estamos muy contentos con la asesoría porque nuestro hijo ha mejorado mucho en la materia, ahora se siente más seguro. 
                  La enseñanza fue clara y personalizada, lo que hizo una gran diferencia en su aprendizaje."</p>
                <div className="flex items-center mt-auto">
                    {/* <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Foto de Carlos"
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    /> */}
                  <div>
                    <p className="font-bold"> Guillen Castro Francisco Javier  </p>
                    <p className="text-sm text-gray-500">Padre de Guillen Reyes Francisco Xavier </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <p className="mb-4 text-gray-600 italic">"Las clases me facilitaron el comprendimiento  de las materias y me facilitaron al momento de hacer alguna práctica o ejercicio.
                La profesora que explica te enseña detenidamente y en el modo que se te facilite más respondiendo de manera paciente cada una de tus dudas y poniendo ejemplos y 
                ejercicios para que practiques además al finalizar la clase te manda algún apunte realizado en clase referente a el tema que se vio."</p>
                <div className="flex items-center mt-auto">
                 
                  <div>
                    <p className="font-bold">Renata Olvera Flores</p>
                    <p className="text-sm text-gray-500">Estudiante Cuarto Grado ENP 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
      Contáctanos
    </h2>

    <div className="text-center flex flex-col items-center space-y-2">
  <div className="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff9e1a]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
    <p className="m-0">gemlindavista@gmail.com</p>
  </div>

  <div className="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff9e1a]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
    <p className="m-0">+52 55 32507053</p>
  </div>

  <div className="flex justify-center space-x-4">
    <Link href="https://www.facebook.com/profile.php?id=61565021160972" className="text-[#ff9e1a] hover:text-[#ff9e1a]" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    </Link>
    <Link href="https://www.instagram.com/gemlindavista/" className="text-[#ff9e1a] hover:text-[#ff9e1a]" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </Link>
  </div>
</div>


  </div>
</section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terminos" className="hover:underline">Términos y Condiciones</Link></li>
                <li><Link href="/privacidad" className="hover:underline">Política de Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
