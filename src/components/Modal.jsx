// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false)
  }

  return isOpen ? (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Fondo del modal */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={closeModal}
          ></div>
        </div>

        {/* Contenido del modal */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="p-4 inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/4"
          style={{ backgroundColor: '#DBE8D8'}}
        >
          {/* Contenido del modal */}
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Título y descripción */}
            <div className="sm:flex">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                <h2 className="font-semibold text-lime-800 text-2xl tracking-widest">
                  OFERTAR TU INMUEBLE
                </h2>
                <div className="my-8">
                  <p className="text-lg">
                    Quieres vender, invertir, alquilar y buscas que administren
                    tu propiedad, en Madre Tierra Inmobiliaria &amp;
                    Constructora podrás vas a encontrar asesoría personalizada
                    para ofrecer un servicio eficaz y responsable con su
                    propiedad, somos una empresa que se creó con el fin de
                    ponerse en la posición del cliente, así que nuestra
                    prioridad es solucionar tus necesidades.
                  </p>
                </div>
              </div>
            </div>

            {/* Contenido adicional, como la fila con dos cajas */}
            <div className="mt-5 gap-8 flex">
                {/* Primera caja */}
                <div className="bg-white p-8 shadow-xl rounded-md w-1/2">
                  <h2 className="text-center font-semibold text-lime-800 text-xl tracking-widest">
                    RENTA
                  </h2>
                  <ul className="list-disc p-12">
                    <li>
                      Elaboración y manejo del contrato de administración con el
                      propietario
                    </li>
                    <li>Oferta de seguro (opcional)</li>
                    <li>
                      Difusión del inmueble (visita al inmueble, publicidad,
                      demostración)
                    </li>
                    <li>
                      Elaboración del estudio de arrendamiento según las pólizas
                      inmobiliarias sobre el canon y administración
                    </li>
                    <li>
                      Facturación, recaudo y pago del canon de arrendamiento,
                      cuota de administración y pólizas (si aplica)
                    </li>
                    <li>
                      La administración inmobiliaria velara por el cumplimiento
                      del contrato de arrendamiento con el arrendatario
                    </li>
                  </ul>
                </div>
              <div className="w-1/2">
                <div className="bg-white  p-8 h-full rounded-md shadow-xl">
                  <div className="rounded-md">
                    <h2 className="text-center font-semibold text-lime-800 text-xl tracking-widest">
                      VENTA
                    </h2>
                    <ul className="list-disc p-12">
                      <li>
                        Difusión del inmueble (visita al inmueble, publicidad, demostración)
                      </li>
                      <li>Elaboración del contrato de corretaje con el propietario</li>
                      <li>
                        Elaboración de la promesa de compraventa
                      </li>
                      <li>
                        Acompañamiento en la negociación
                      </li>
                      <li>
                        Acompañamiento en la firma de la escritura y entrega del inmueble
                      </li>
                      <li>
                        Elaboración de las actas para la entrega del inmueble
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-8">
            <a
              href='https://wa.me/573103715943'
              className="bg-lime-600 p-2 font-light text-white mt-5 px-4 rounded-lg"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Modal
