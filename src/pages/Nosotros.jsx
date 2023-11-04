function Nosotros() {
  return (
    <div className="relative isolate mb-20">
      <div
        className="flex items-center text-center font-extralight text-white px-40 text-3xl bg-blend-multiply bg-no-repeat lg:grid-cols-2"
        style={{
          background:
            'url(http://madre-tierra-back.local/wp-content/uploads/2023/10/image-2.png) #246A38',
          minHeight: '630px',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
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
      <div className="grid grid-cols-2 gap-24 p-32 items-center">
        <div>
          <h2 className="text-lime-800 text-2xl font-semibold mb-12">RENTA</h2>
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
          <h2 className="text-lime-800 text-2xl mb-12 font-semibold">VENTA</h2>
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
        <div className="bg-green-100 p-12 rounded-2xl"  style={{ maxHeight: '300px'}}>
          <h2 className="text-lime-800 text-2xl font-semibold mb-12">
            COMPRA-RENTA:
          </h2>
          <p className="text-justify">
            Ofrecemos asesoría personalizada para ayudarle a determinar cuál es
            el inmueble que necesita de acuerdo con su presupuesto, necesidades
            y expectativas Contamos con amplia oferta de inmuebles
          </p>
        </div>
        <div>
            <img src="http://madre-tierra-back.local/wp-content/uploads/2023/10/Captura-de-Pantalla-2023-09-12-a-las-3.50.01-p.m-1.png" />
        </div>
      </div>
    </div>
  )
}

export default Nosotros
