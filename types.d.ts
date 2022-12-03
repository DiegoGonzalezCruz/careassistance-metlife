import { ReactNode } from 'react'
import { JsxElement } from 'typescript'

export interface Program {
  idx?: number
  program: {
    acf: {
      titulo: string
      imagen: string
      imagen_modal: string
      icono: string
      horario: string
      pretitle: string
      posttitle: string
      description: string
    }
  }
}
export interface Programs {
  programs: {
    acf: {
      titulo: string
      imagen: string
      imagen_modal: string
      icono: string
      horario: string
      pretitle: string
      posttitle: string
      description: string
    }
    idx?: number
  }[]
}

export interface Channel {
  channel: {
    img: string
    title: string
  }
}
export interface Channels {
  channels: {
    img: string
    title: string
  }[]
}

export interface ButtonProps {
  children: string
  colors?: {
    text: string
    bg: string
  }
  className?: HTMLAttributes
}
