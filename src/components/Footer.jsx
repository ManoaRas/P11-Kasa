import logo from "../assets/logoFooter.png"

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer--logo" src={logo} alt="Kasa logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
