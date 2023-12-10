import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialBar() {
  return (
    <div className="hidden md:flex border-b-solid border-b-2 border-zinc-200 flex justify-end items-center gap-3 text-lime-800 text-sm px-16 py-5 shadow-lg">
      <a href="mailto:Contacto@madretierra.com">Contacto@madretierra.com</a>
      <p>
        <a href="tel:3103715943">310 371 5943</a>
        <FontAwesomeIcon
          icon={faPhone}
          color="#38653A"
          style={{ margin: '0 10px' }}
        />
        <a href="tel:7295663">7295663</a>
      </p>
      <a
        href="https://wa.me/573103715943"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/inmobiliariamadretierra/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://facebook.com/madretierrainmobiliaria"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  )
}

export default SocialBar
