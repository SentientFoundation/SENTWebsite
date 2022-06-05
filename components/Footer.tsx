import React from "react"

function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer>
      <p className="text-center">Copyright ⓒ {year}</p>
      <p className="text-center">All Rights Reseved By The Sentient Foundation</p>
    </footer>
  )
}

export default Footer
