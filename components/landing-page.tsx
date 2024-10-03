'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, PenTool, FileText, Star, Award } from "lucide-react"
import PricingSection from './pricing-section'

export function LandingPageComponent() {
  const whatsappNumber = "525539735799" // Reemplaza con tu número real
  const whatsappMessage = encodeURIComponent("Hola, me interesa obtener más información sobre las asesorías.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-yellow-500" />
            <span className="font-bold">Grupo de estudio medalla</span>
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Asesorías Personalizadas en Matemáticas, Física y Ciencias
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Mejora tus habilidades y alcanza tus metas académicas con nuestros expertos
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
                <BookOpen className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Clases Particulares</h3>
                <p className="text-gray-500">Atención personalizada para tus necesidades específicas</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Clases Grupales</h3>
                <p className="text-gray-500">Aprende en un ambiente colaborativo y dinámico</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PenTool className="h-12 w-12 mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">Apoyo en Tareas</h3>
                <p className="text-gray-500">Resuelve tus dudas y mejora tu comprensión</p>
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
        <section id="precios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Planes y Precios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
                <p className="text-4xl font-bold mb-4">$299<span className="text-sm font-normal">/mes</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    4 clases particulares al mes
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Apoyo en tareas ilimitado
                  </li>
                </ul>
                <Button className="mt-auto" onClick={() => window.open(whatsappLink, '_blank')}>Seleccionar Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-blue-600 text-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Plan Estándar</h3>
                <p className="text-4xl font-bold mb-4">$499<span className="text-sm font-normal">/mes</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    8 clases particulares al mes
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Apoyo en tareas ilimitado
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    2 sesiones de ayuda en proyectos
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open(whatsappLink, '_blank')}>Seleccionar Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
                <p className="text-4xl font-bold mb-4">$799<span className="text-sm font-normal">/mes</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    12 clases particulares al mes
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Apoyo en tareas ilimitado
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    4 sesiones de ayuda en proyectos
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Acceso a clases grupales
                  </li>
                </ul>
                <Button className="mt-auto" onClick={() => window.open(whatsappLink, '_blank')}>Seleccionar Plan</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Lo que dicen nuestros estudiantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <p className="mb-4 text-gray-600 italic">"Gracias a las asesorías de Grupo de estudio medalla, mejoré mis calificaciones en matemáticas y física. Los profesores son excelentes."</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Foto de Ana"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Ana García</p>
                    <p className="text-sm text-gray-500">Estudiante de Preparatoria</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <p className="mb-4 text-gray-600 italic">"El apoyo en proyectos fue fundamental para aprobar mi curso de ciencias. Muy recomendado."</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Foto de Carlos"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Carlos Rodríguez</p>
                    <p className="text-sm text-gray-500">Estudiante Universitario</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <p className="mb-4 text-gray-600 italic">"Las clases grupales son geniales. Aprendí mucho y conocí a otros estudiantes con los mismos intereses."</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Foto de Laura"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Laura Martínez</p>
                    <p className="text-sm text-gray-500">Estudiante de Secundaria</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <form className="space-y-4">
                <Input placeholder="Nombre" />
                <Input type="email" placeholder="Correo electrónico" />
                <Textarea placeholder="Mensaje" />
                <Button type="submit" className="w-full">Enviar mensaje</Button>
              </form>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                 contacto@estudiomedalla.com
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +52 55 3973 5799
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="#inicio" className="hover:underline">Inicio</Link></li>
                <li><Link href="#servicios" className="hover:underline">Servicios</Link></li>
                <li><Link href="#precios" className="hover:underline">Precios</Link></li>
                <li><Link href="#testimonios" className="hover:underline">Testimonios</Link></li>
                <li><Link href="#contacto" className="hover:underline">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>Clases Particulares</li>
                <li>Clases Grupales</li>
                <li>Apoyo en Tareas</li>
                <li>Ayuda en Proyectos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Términos y Condiciones</Link></li>
                <li><Link href="#" className="hover:underline">Política de Privacidad</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Grupo de estudio medalla. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
