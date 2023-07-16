import React from 'react'
import Header from '../header/Header'

const DefaultComponents = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default DefaultComponents