import React from 'react'
import { cN } from '../../libs/tw-marge'
type SelectProps = React.ComponentProps<'select'>
type OptionProps = React.ComponentProps<'option'>

function Select({ children, className, ...props }: SelectProps) {
    return (
        <select {...props} className={cN('size-full p-2 border border-gray-400 outline-none', className)}>
            {children}
        </select>
    )
}

function Option({ children, className, ...props }: OptionProps) {
    return (
      <option className={cN('text-black', className)} {...props}>
        {children}
      </option>
    );
  }

export {Select, Option}