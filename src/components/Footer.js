import React from "react"


export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
        <p>
          © {new Date().getFullYear()} SAV. <br />
          Todos os direitos reservados.
        </p>
      </footer>
  )
}