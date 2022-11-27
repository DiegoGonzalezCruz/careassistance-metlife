import { ReactNode } from 'react'
import { JsxElement } from 'typescript'

export interface Program {
  program: {
    title: string
    schedule: ReactNode | string
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
    schedule: ReactNode | string
    pretitle: string
    posttitle: string
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
}
