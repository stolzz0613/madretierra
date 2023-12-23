import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'
import { useState } from 'react';

function Details() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-100 grid grid-cols-1 m-5 lg:mt-14">
      <h1 className="text-lime-800 text-xl lg:text-4xl tracking-tight mb-4 ">
        Busquemos juntos el lugar que te mereces
      </h1>
      <div className="p-1 justify-self-center mt-4">
        <div className="grid auto-cols-max auto-rows-min gap-3 justify-items-start text-s">
          <div className="col-span-1 p-1 lg:text-base text-xs">
            <FontAwesomeIcon
              icon={faPhone}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            310 371 5943
          </div>
          <div className="col-span-2 p-1 text-left lg:text-base text-xs">
            <FontAwesomeIcon
              icon={faLocationDot}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            Dirección: Cl 9 #17-35, Armenia, Quindío
          </div>
          <div className="col-span-1 p-1 lg:text-base text-xs">
            <FontAwesomeIcon
              icon={faPhone}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            729 5663
          </div>
          <div className="col-span-2 p-1 text-left lg:text-base text-xs mb-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            inmobiliariamadretierra@gmail.com
          </div>
          <div className="col-span-3 text-center mt-4 lg:text-base text-xs justify-self-center">
            <a
              href='https://wa.me/573103715943'
              className="bg-lime-600 p-2 font-light text-white mt-5 px-4 rounded-lg"
            >
              Contacta con Nosotros
            </a>
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  )
}

export default Details
