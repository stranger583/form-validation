import React from 'react'
import { cN } from '../../libs/tw-marge'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'validation' | 'remove' | 'add' | 'disabled' | 'default';
}

export function Button({ children, variant = 'default', className, ...props }: ButtonProps) {
    const baseStyle = 'text-sm rounded cursor-pointer p-2'
    const variantStyle = {
        default:'text-sm rounded font-bold text-black-500 cursor-pointer',
        validation:'text-white bg-orange-500',
        remove:'text-orange-500 font-bold',
        add:'text-teal-500 py-2 px-0 font-bold',
        disabled:'text-gray-500 py-2 px-0 cursor-not-allowed',
    }
  return (
    <button {...props} className={cN(baseStyle ,variantStyle[variant], className)}>
      {children}
    </button>
  )
}
