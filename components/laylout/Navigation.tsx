import Image from 'next/image'

export const Navigation = () => {
  return (
    <nav className="h-[10vh] w-full flex items-center bg-white justify-center sticky  ">
      <Image
        src="/img/logos/metlife-orienta.svg"
        alt="metlife orienta"
        width={200}
        height={50}
        className="w-3/4 bg-white "
      />
    </nav>
  )
}
