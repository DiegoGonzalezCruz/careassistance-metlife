import Image from 'next/image'

export const MainSlider = () => {
  return (
    <div className="w-full h-[50vh] ">
      <div className="w-full h-full flex md:flex-row flex-col">
        <Image
          src="/img/sliders/mainslider.png"
          width={500}
          height={500}
          className="object-cover h-full md:w-1/2 w-full"
          alt="bienvenidos a metlife orienta"
        />
        <div className="md:w-1/2 w-full h-full bg-primary flex items-center justify-center">
          <h1 className="text-3xl">¡Bienvenido!</h1>
        </div>
      </div>
    </div>
  )
}
