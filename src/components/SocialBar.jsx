import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialBar() {
  return (
    <div className="hidden md:flex border-b-solid border-b-2 border-zinc-200 flex justify-end items-center gap-3 text-lime-800 text-sm px-10 py-5 shadow-lg">
      <p>Contacto@madretierra.com</p>
      <p>
        310 371 5943
        <FontAwesomeIcon
          icon={faPhone}
          color="#38653A"
          style={{ margin: '0 10px' }}
        />
        7295663
      </p>
      <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
      <FontAwesomeIcon icon={faInstagram} size='2x'/>
      <FontAwesomeIcon icon={faFacebook} size='2x'/>
    </div>
  )
}

export default SocialBar
