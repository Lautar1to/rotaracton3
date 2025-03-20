import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

// Actualizar el título y el ícono de la página
export const metadata: Metadata = {
  title: "ROTARACT CORRE",
  description: "Carrera de running de montaña en Córdoba Argentina",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20icon%201-Q7giQebsUo8P2RWEfITSs43PGCNOKX.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="bg-white">{children}</body>
    </html>
  )
}



import './globals.css'