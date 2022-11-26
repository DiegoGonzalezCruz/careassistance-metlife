import Image from 'next/image'

export const Navigation = () => {
  return (
    <nav className="h-[10vh] w-full flex items-center  justify-center ">
      <Image
        src="/img/logos/metlife-orienta.svg"
        alt="metlife orienta"
        width={200}
        height={50}
      />
    </nav>
  )
}
