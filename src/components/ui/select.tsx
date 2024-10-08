import React from 'react'
import { cN } from '../../libs/tw-marge'
type SelectProps = React.ComponentProps<'select'>
type OptionProps = React.ComponentProps<'option'>

export function Select({ children, className, ...props }: SelectProps) {
    return (
        <select {...props} className={cN('', className)}>
            {children}
        </select>
    )
}

export function Option({ children, className, ...props }: OptionProps) {
    return (
      <option className={cN('', className)} {...props}>
        {children}
      </option>
    );
  }