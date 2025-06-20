import React from 'react'

export const PageLayout = ({children, className}) => {
  return (
    <div className={`p-2 ${className}`}>{children}</div>
  )
}
