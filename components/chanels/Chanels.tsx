import Image from 'next/image'
import React from 'react'

const channels = [
  {
    img: '/img/channels/Whatsapp.svg',
    title: 'WhatsApp'
  },
  {
    img: '/img/channels/Whatsapp.svg',
    title: 'WhatsApp'
  }
]

export const Chanels = () => {
  return (
    <div className="w-full">
      <div>
        <h2>Canales exclusivos</h2>
        <ul className="">
          {channels.map((channel) => {
            return (
              <li className="border-primary border rounded-xl">
                <Image
                  src={channel.img}
                  width={200}
                  height={200}
                  alt={channel.title}
                />
                <h2>{channel.title}</h2>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
