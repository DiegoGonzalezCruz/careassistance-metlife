import { ReactNode } from 'react'
import { JsxElement } from 'typescript'

export interface Program {
  idx?: number
  program: {
    id?: number | string
    title: string
    schedule: string
    description: string
    img: string
    pretitle: string
    posttitle: string
  }
}
export interface Programs {
  programs: {
    img: string
    title: string
    description: string
    phone: string
    schedule: string
    pretitle: string
    posttitle: string
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
