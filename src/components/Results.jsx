import { useGlobalState } from '../context/GlobalContext'
import Slide from './Highlights/Slide'

function Results() {
  const { state } = useGlobalState()
  const { dispatch } = useGlobalState()

  return (
    <div className="border-solid border-2 border-zinc-200 rounded-lg shadow-xl min-h-24">
      <div className="border-b-solid border-b border-zinc-100 p-5">
        <h1 className="text-lime-800 text-3xl tracking-tight text-left">
          INMUEBLES
        </h1>
        <p className='text-left my-8'>Ordenar por:</p>
        <div className='flex flex-row gap-4'>
          <p onClick={() => dispatch({ type: 'DESC_ORDER' })} className='cursor-pointer border-solid border-2 border-zinc-200 rounded-lg px-2'>↓ Menor Precio</p>
          <p onClick={() => dispatch({ type: 'ASC_ORDER' })} className='cursor-pointer border-solid border-2 border-zinc-200 rounded-lg px-2'>↑ Mayor Precio</p>
        </div>
      </div>
      <div className="m-6 mt-12 grid grid-cols-4 gap-4">
        {
          state?.properties?.map((p, idx) => {
            return (
              <Slide key={idx} property={p} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Results
