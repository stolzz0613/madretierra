function Promo() {
  return (
    <div
      className="rounded-lg bg-blend-multiply bg-no-repeat bg-cover m-5 lg:mt-7 h-34 lg:h-96"
      style={{
        background:
          'url(https://darkcyan-caterpillar-298159.hostingersite.com/wp-content/uploads/2023/09/image-1.png) rgba(57, 57, 57, 0.53)',
        backgroundSize: 'cover'
      }}
    >
      <div className="w-4/5 lg:3/5 p-4 lg:p-12  min-h-full flex flex-col text-left align-center justify-center">
        <h1 className="text-2xl lg:text-6xl font-light tracking-tight text-white text-left sm:text-6xl">
            ¿Buscas vender o arrendar tu inmueble?
        </h1>
        <button className="bg-lime-600 p-2 font-light text-white mt-2 lg:mt-10 w-44">
            Ofertar
        </button>
      </div>
    </div>
  )
}

export default Promo
