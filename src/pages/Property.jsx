import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_PROPIEDAD_ID } from '../queries'
import PropertyCarousel from '../components/PropertyCarousel/PropertyCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBathtub,
  faBed,
  faBuilding,
  faFileContract,
  faHome,
  faHouseCrack,
  faLocationDot,
  faRulerCombined,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'
import Whatsapp from '../components/Whatsapp'

function Property() {
  const { id } = useParams()
  const [property, setProperty] = useState({})
  const [images, setImages] = useState([])

  const { data } = useQuery(GET_PROPIEDAD_ID, {
    variables: { id },
  })

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    setProperty(data?.propiedadBy?.GET_PROPIEDADES)
  }, [data])

  useEffect(() => {
    if (property?.galeria) {
      setImages(
        Object.values(property?.galeria)
          .filter((obj) => obj !== null && obj.sourceUrl)
          .map((obj) => obj.sourceUrl),
      )
    }
    window.gtag('event', 'page_view', {
      'event_category': 'page_view',
      'event_label': property?.nombre,
    });
  }, [property])

  return (
    <div className="m-5 p-5 sm:m-10 sm:p-5 border-solid border-2 border-zinc-200 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="text-left text-sm lg:text-xl font-semibold mb-8 tracking-widest">
            {property?.nombre}
          </div>
          <PropertyCarousel images={images} />
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="text-center">
            <p className="font-semibold text-lime-800 lg:text-xl tracking-widest">
              DETALLES DEL INMUEBLE
            </p>
          </div>
          <div className="mt-8 text-zinc-700">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Pais: {property?.pais}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Departamento: {property?.departamento}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Ciudad: {property?.ciudad}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faHome}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Estado: {property?.estado}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faRulerCombined}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Area: {property?.area}m²</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBed}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Habitaciones: {property?.habitaciones}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBathtub}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Baños: {property?.banos}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faWarehouse}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>{`Garaje: ${property?.garaje ? 'Si' : 'No'}`}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBuilding}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Pisos: {property?.pisos}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faHouseCrack}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Tipo de Inmueble: {property?.tipo}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faFileContract}
                color="#38653A"
                style={{
                  marginRight: '10px',
                  minWidth: '20px',
                  fontSize: '14px',
                }}
              />
              <p>Tipo de negocio: {property?.para}</p>
            </div>
            <div className="lg:text-left mt-12 mb-12 lg:mb-0">
              <p className="text-zinc-600">Precio de renta:</p>
              <div>
                <p className="text-lg font-semibold">{USDollar.format(property?.precio)}</p>
              </div>
              <p className="text-zinc-600">pesos colombianos</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-left font-semibold text-lime-800 lg:text-xl tracking-widest mb-8">
          DESCRIPCION ADICIONAL
        </p>
        <p className="text-justify text-zinc-700">
          {property?.descripcion}
        </p>
      </div>
      <div className="mt-12">
        {property?.caracteristicasInternas?.length > 0 && (
          <>
            <p className="text-left font-semibold text-lime-800 lg:text-xl tracking-widest mb-8">
              CARACTERISTICAS INTERNAS
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 lg:text-left">
              {property?.caracteristicasInternas?.map((c) => (
                <div key={`${id}-${c}`}>
                  <p className="flex justify-center items-center h-full lg:text-base text-xs lg:w-fit rounded-md px-2 p-1 text-zinc-700 bg-lime-700 bg-opacity-25">
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="my-12">
        {property?.caracteristicasInternas?.length > 0 && (
          <>
            <p className="text-left font-semibold text-lime-800 lg:text-xl tracking-widest mb-8">
              CARACTERISTICAS EXTERNAS
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 lg:text-left">
              {property?.caracteristicasExternas?.map((c) => (
                <div key={`${id}-${c}`}>
                  <p className="flex justify-center items-center h-full lg:text-base text-xs lg:w-fit rounded-md px-2 p-1 text-zinc-700 bg-lime-700 bg-opacity-25">
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Whatsapp name={property?.nombre} />
    </div>
  )
}

export default Property
