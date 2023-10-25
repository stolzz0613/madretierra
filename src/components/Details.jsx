import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Details() {
  return (
    <div className="w-100 grid grid-cols-1 m-5 lg:mt-14">
      <h1 className="text-lime-800 text-xl lg:text-3xl tracking-tight mb-4 ">
        Busquemos juntos el lugar que te mereces
      </h1>
      <div className="p-1 justify-self-center">
        <div className="grid auto-cols-max auto-rows-min gap-1 justify-items-start text-xs">
          <div className="col-span-1 p-1">
            <FontAwesomeIcon
              icon={faPhone}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            310 371 5943
          </div>
          <div className="col-span-2 p-1 text-left">
            <FontAwesomeIcon
              icon={faPhone}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            Dirección: Cl 9 #17-35, Armenia, Quindío
          </div>
          <div className="col-span-1 p-1">
            <FontAwesomeIcon
              icon={faPhone}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            729 5663
          </div>
          <div className="col-span-2 p-1 text-left">
            <FontAwesomeIcon
              icon={faPhone}
              color="#38653A"
              style={{ marginRight: '5px' }}
            />
            Contacto@madretierra.com
          </div>
          <div className="col-span-3 text-center mt-4 justify-self-center">
            <button className="bg-lime-600 p-2 font-light text-white mt-5 px-4">
              Contacta con Nosotros
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
