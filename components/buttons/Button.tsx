import React from 'react'
import { ButtonProps } from '../../types'

const Button = ({ className, children }: ButtonProps) => {
  return (
    <div
      className={
        className +
        ' ' +
        'bg-secondary rounded-full py-1 px-4 w-full text-center text-white font-Fira'
      }
    >
      {children}
    </div>
  )
}

export default Button
