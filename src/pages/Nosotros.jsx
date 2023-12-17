function Nosotros() {

  function isMobileDevice() {
    return window.innerWidth <= 768; // Puedes ajustar este valor según tu definición de "móvil"
  }

  return (
    <div className="relative isolate mb-20">
      <div
        className="flex items-center text-center font-extralight text-white px-8 lg:px-60 lg:text-3xl bg-blend-multiply bg-no-repeat lg:grid-cols-2"
        style={{
          background:
            'url(https://darkcyan-caterpillar-298159.hostingersite.com/wp-content/uploads/2023/12/image-2.png) rgb(200, 250, 164)',
          minHeight: isMobileDevice() ? '430px' : '630px',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          boxShadow: '0px 10px 0px white inset'
        }}
      >
        <p>
          Quieres vender, invertir, alquilar y buscas que administren tu
          propiedad, en <b>Madre Tierra Inmobiliaria & Constructora </b>
          vas a encontrar asesoría personalizada para ofrecer un servicio eficaz
          y responsable con su propiedad, somos una empresa que se creó con el
          fin de ponerse en la posición del cliente, así que nuestra prioridad
          es solucionar tus necesidades.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 p-16 lg:p-32 items-center">
        <div>
          <h2 className="text-lime-800 text-xl lg:text-2xl font-semibold mb-8 lg:mb-12">RENTA</h2>
          <ul className="mt-2 list-disc text-left">
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
              Facturación, recaudo y pago del canon de arrendamiento, cuota de
              administración y pólizas (si aplica)
            </li>
            <li>
              La administración inmobiliaria velara por el cumplimiento del
              contrato de arrendamiento con el arrendatario
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lime-800 text-xl lg:text-2xl mb-8 lg:mb-12 font-semibold">VENTA</h2>
          <ul className="mt-2 list-disc text-left">
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
              Facturación, recaudo y pago del canon de arrendamiento, cuota de
              administración y pólizas (si aplica)
            </li>
            <li>
              La administración inmobiliaria velara por el cumplimiento del
              contrato de arrendamiento con el arrendatario
            </li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 lg:p-12 rounded-2xl"  style={{ maxHeight: '300px'}}>
          <h2 className="text-lime-800 text-lg lg:text-xl lg:text-2xl font-semibold mb-4 lg:mb-12">
            COMPRA-RENTA:
          </h2>
          <p className="lg:text-justify text-sm lg:text-base">
            Ofrecemos asesoría personalizada para ayudarle a determinar cuál es
            el inmueble que necesita de acuerdo con su presupuesto, necesidades
            y expectativas Contamos con amplia oferta de inmuebles
          </p>
        </div>
        <div>
            <img src="https://darkcyan-caterpillar-298159.hostingersite.com/wp-content/uploads/2023/12/Captura-de-Pantalla-2023-09-12-a-las-3.50.01-p.m-1.png" />
        </div>
      </div>
    </div>
  )
}

export default Nosotros
