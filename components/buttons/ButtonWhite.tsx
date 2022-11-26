import React from 'react'
import { ButtonProps } from '../../types'

const ButtonWhite = ({ children }: ButtonProps) => {
  return (
    <button className="bg-white border-primary border rounded-full px-5 py-2 text-primary">
      {children}
    </button>
  )
}

export default ButtonWhite
