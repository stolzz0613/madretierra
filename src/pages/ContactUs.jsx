import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Map } from '../components'

function ContactUs() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    comentario: '',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(
      'https://darkcyan-caterpillar-298159.hostingersite.com/wp-json/miplugin/v1/enviar-correo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      },
    )
      .then((response) => {
        // Manejar la respuesta del servidor
        console.log('Respuesta del servidor:', response)
        // Aquí podrías mostrar un mensaje de éxito o hacer alguna otra acción
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error('Error al enviar el formulario:', error)
        // Aquí podrías mostrar un mensaje de error o hacer alguna otra acción
      })
  }

  return (
    <div className="container mx-auto lg:py-8">
      <div className="p-8 gap-16 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg shadow-xl">
        <div className='border-solid border-2 border-zinc-200 rounded-xl md:border-0 p-8 md:p-0'>
          <h2 className="lg:text-left mb-12 font-semibold text-lime-800 text-xl tracking-widest">
            CONTÁCTENOS
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-4 text-left">
              {/* Campo Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Campo Apellido */}
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Campo Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Campo Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            {/* Campo Comentario */}
            <div>
              <label
                htmlFor="comentario"
                className="text-left block text-sm font-medium text-gray-700"
              >
                Comentario
              </label>
              <textarea
                id="comentario"
                value={formData.comentario}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="lg:text-left">
              <button
                type="submit"
                className="rounded-lg mt-8 bg-lime-600 p-2 px-12 font-light text-white"
              >
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
        <div className='border-solid border-2 border-zinc-200 rounded-xl p-8'>
          <h2 className="mb-12 font-semibold text-lime-800 text-xl tracking-widest">
            DATOS DE CONTACTO
          </h2>
          <div className="text-left">
            <div className="p-1 text-left">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#38653A"
                style={{ marginRight: '5px' }}
              />
              Dirección: Cl 9 #17-35, Armenia, Quindío
            </div>
            <div className="p-1">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#38653A"
                style={{ marginRight: '5px' }}
              />
              Contacto@madretierra.com
            </div>
            <div className="p-1">
              <FontAwesomeIcon
                icon={faPhone}
                color="#38653A"
                style={{ marginRight: '5px' }}
              />
              3103715943
            </div>
            <div className="p-1">
              <FontAwesomeIcon
                icon={faPhone}
                color="#38653A"
                style={{ marginRight: '5px' }}
              />
              729 5663
            </div>
          </div>
          <div className='mt-8 bg-lime-700 bg-opacity-25'>
            <p>También puedes contar con nuestros servicios en México!</p>
          </div>
          <div className='mt-4 text-left'>
            <p>Contáctanos para brindarte más información sobre nuestros servicios en México</p>
          </div>
          <div className='grid grid-cols-3 mt-8'>
            <p className='text-left col-span-1'>Síguenos:</p>
            <div className='col-span-2'>
              <a
                href="https://www.instagram.com/inmobiliariamadretierra/"
                target="_blank"
                rel="noopener noreferrer"
                className='mx-12'
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
          </div>
        </div>
      </div>
      <div className="my-16">
        <h2 className="mb-16 text-center font-semibold text-lime-800 text-xl tracking-widest">
          ENCUENTRANOS EN DISTINTAS PARTES DEL MUNDO
        </h2>
        <div>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
