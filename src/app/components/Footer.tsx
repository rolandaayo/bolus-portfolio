import React from 'react'
import { MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#c0aa7b] py-4 text-center text-sm text-dark">
          <div className="container mx-auto px-4">© 2025 by Boluwatife.</div>
        </footer>

        <div className="fixed bottom-6 right-6">
          <button className="bg-[#c0aa7b] hover:bg-[#a57b63] transition-colors p-3 rounded-full">
            <MessageCircle className="h-6 w-6 text-white" />
          </button>
        </div>
    </div>
  )
}
