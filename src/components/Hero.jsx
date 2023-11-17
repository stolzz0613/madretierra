import { useEffect, useState } from 'react'
import Filter from './Filter'
import { useQuery } from '@apollo/client'
import { GET_PROPERTIES } from '../queries'
import { useGlobalState } from '../context/GlobalContext'

const filtersData = [
  { name: 'Pais', options: ['', 'Colombia', 'Mexico', 'Estados Unidos'] },
  {
    name: 'Zona',
    options: ['', 'Norte', 'Sur', 'Centro', 'Occidente', 'Oriente'],
  },
  {
    alternative: 'Estado',
    name: 'Estado de la propiedad',
    options: ['', 'Nuevo', 'Usado', 'Proyecto', 'En Construccion'],
  },
  {
    alternative: 'ciudad',
    name: 'Ciudad',
    options: [
      '',
      'Armenia',
      'Circasia',
      'Calarca',
      'La Tebaida',
      'Montenegro',
      'Quimbaya',
      'Salento',
      'Barcelona',
    ],
  },
  {
    alternative: 'tipo',
    name: 'Tipo de Inmueble',
    options: [
      '',
      'Apartamento',
      'Apartaestudio',
      'Bodega',
      'Casa',
      'Casa Campestre',
      'Finca',
      'Local',
      'Lote',
      'Oficina',
    ],
  },
  {
    alternative: 'para',
    name: 'Tipo de Negocio',
    options: ['', 'Venta', 'Alquiler'],
  },
  { name: 'Habitaciones', options: ['', '1', '2', '3 o mas'] },
  { name: 'Baños', options: ['', '1', '2', '3 o mas'] },
]

function Hero() {
  const [filters, setFilters] = useState({})
  const { dispatch } = useGlobalState()

  const { data, refetch } = useQuery(GET_PROPERTIES, {
    variables: {
      ...filters,
    },
  })

  const handleFilter = () => {
    dispatch({ type: 'SET_PROPERTIES', payload: data?.allPropiedades?.nodes })
    dispatch({ type: 'SET_FILTERING', payload: true })
    refetch()
  }

  const onReset = () => {
    refetch()
    setFilters({})
  }

  useEffect(() => {
    if (Object.keys(filters).length === 0) {
      dispatch({ type: 'SET_PROPERTIES', payload: data?.allPropiedades?.nodes })
      dispatch({ type: 'SET_FILTERING', payload: false })
    }
  }, [data])

  useEffect(() => {
      dispatch({ type: 'SET_PROPERTIES', payload: data?.allPropiedades?.nodes })
      dispatch({ type: 'SET_FILTERING', payload: false })
  }, [])

  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div
          className="grid py-12 my-0 md:my-12 sm:py-0 justify-center items-center bg-blend-multiply bg-no-repeat lg:grid-cols-2"
          style={{
            background:
              'url(https://darkcyan-caterpillar-298159.hostingersite.com/wp-content/uploads/2023/09/Foto-inicio.png) #246A388C',
            minHeight: '700px',
            backgroundSize: 'cover',
          }}
        >
          <div className="justify-self-center hidden lg:block">
            <h1 className="text-4xl font-bold tracking-tight mb-12 text-white max-w-lg">
              Encuentra la casa de tus sueños hoy
            </h1>
            <a
              href='https://wa.me/573103715943'
              className="bg-lime-600 p-2 font-light text-white">
              Envianos un mensaje
            </a>
          </div>
          <div className="bg-white m-0 md:m-12 lg:w-4/5 justify-self-center py-2 grid lg:py-16">
            <h1 className="text-2xl mx-3 md:mx-0 font-light tracking-tight text-lime-800 md:text-3xl">
              Encuentra tu inmueble ideal
            </h1>
            <div className="grid md:grid-cols-2 min-h-full p-2 lg:p-8 gap-5 mx-8 lg:mx-0">
              {filtersData.map((filterData) => (
                <Filter
                  key={filterData.name}
                  name={filterData.name}
                  options={filterData.options}
                  onChange={setFilters}
                  param={filterData?.alternative || filterData?.name}
                  filters={filters}
                />
              ))}
              <div className="flex items-center flex-col gap-4 md:flex-row flex-wrap xl:flex-nowrap">
                <div className="relative text-left">
                  <label>Precio desde:</label>
                  <input
                    type="number"
                    placeholder="Precio mínimo"
                    className="block w-30 md:w-50 px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300 focus:outline-none"
                    onChange={e => setFilters(prev => ({...prev, 'precioMin': parseFloat(e.target.value)}))}
                    value={filters?.['precioMin'] || ''}
                  />
                </div>
                <div className="relative text-left">
                  <label>Precio hasta:</label>
                  <input
                    type="number"
                    placeholder="Precio máximo"
                    className="block w-30 md:w-50 px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300 focus:outline-none"
                    onChange={e => setFilters(prev => ({...prev, 'precioMax': parseFloat(e.target.value)}))}
                    value={filters?.['precioMax'] || ''}
                  />
                </div>
              </div>
            </div>
            <div
              className='flex text-right justify-center mt-12 p-4 gap-4 md:justify-end'
            >
              <button
                className="bg-lime-600 p-2 font-light text-white align-self-right w-40"
                onClick={() => handleFilter()}
              >
                Buscar
              </button>
              <button
                className="bg-lime-600 p-2 font-light text-white align-self-right w-40"
                onClick={() => onReset()}
              >
                Reiniciar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
