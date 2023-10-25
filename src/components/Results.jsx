import { useGlobalState } from '../context/GlobalContext'
import Slide from './Highlights/Slide'

function Results() {
  const { state } = useGlobalState()

  return (
    <div className="border-solid border-2 border-zinc-200 rounded-lg shadow-xl min-h-24">
      <div className="border-b-solid border-b border-zinc-100 p-5">
        <h1 className="text-lime-800 text-3xl tracking-tight text-left">
          INMUEBLES
        </h1>
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
