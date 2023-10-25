import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Whatsapp({name}) {
  const location = window.location.href;
  const whatsappLink = `https://wa.me/573103715943?text=Estoy%20interesado%20en%20esta%20propiedad:%20${name}.%20${location}`

  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-10"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          color=""
          style={{
            fontSize: '30px',
          }}
        />
      </a>
    </div>
  )
}

export default Whatsapp
