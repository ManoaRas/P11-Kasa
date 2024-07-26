import React from "react"
import logo from "../assets/logoFooter.png"

export function Footer() {
  return (
    <footer className="footer">
      <img alt="Kasa logo" src={logo} className="footer--logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
