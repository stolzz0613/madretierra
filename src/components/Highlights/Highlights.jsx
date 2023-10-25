import Carousel from "./Carousel"

function Highlights() {
  return (
    <div className="border-solid border-2 border-zinc-200 rounded-lg shadow-xl min-h-24">
        <div className="border-b-solid border-b border-zinc-100 p-5">
            <h1 className="text-lime-800 text-3xl tracking-tight text-left">INMUEBLES DESTACADOS</h1>
        </div>
        <div className="m-6 mt-12">
            <Carousel />
        </div>
    </div>
  )
}

export default Highlights