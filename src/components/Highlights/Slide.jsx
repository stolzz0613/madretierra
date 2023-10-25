import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Slide({ property }) {
  const navigate = useNavigate();
  const [prop, setprop] = useState({})

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    setprop(property?.obtenerPrecio?.[0]?.GET_PROPIEDADES)
  }, [property])

  return (
    <div
      className="grid grid-cols-1 w-300 bg-white border border-gray-300 shadow-lg rounded-xl overflow-hidden shadow-sm cursor-pointer"
      style={{ height: '500px' }}
      onClick={() => navigate(`/property/${property?.id}`)}
    >
      <h2
        className="text-sm font-semibold px-4 py-2 mt-5"
        style={{ height: '40px' }}
      >{prop?.nombre}</h2>
      <div className="rounded-lg px-4 py-2">
        <img
          src={prop?.image?.sourceUrl}
          alt="Producto"
          className="w-259 py-4 rounded-lg"
          style={{ height: '250px', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="text-left text-xs px-4 mb-2 grid grid-flow-col auto-cols-max gap-x-6">
        <div className="font-bold">
          <p>Tipo:</p>
          <p>Ciudad:</p>
          <p>Para:</p>
        </div>
        <div>
          <p>{prop?.tipo}</p>
          <p>{prop?.ciudad}</p>
          <p>{prop?.para}</p>
        </div>
      </div>
      <div className="bg-lime-700 bg-opacity-25 text-center items-center flex justify-between px-6 py-4">
        <p className="text-xl text-green-800 font-semibold">Precio:</p>
        <p className="text-xl text-green-800 font-semibold">
          {USDollar.format(prop?.precio)}
        </p>
      </div>
    </div>
  )
}

export default Slide
