import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Nav } from '../components/Navbar/NavbarElements'
import SEO from '../components/SEO'
import GlobalStyle from '../utils/globalStyles'
import ContextProvider from '../utils/provider/ContextProvider'

const Layout = ({children}) => {
  return (
    <ContextProvider>
      <SEO />
      <GlobalStyle />
      <Hero />
      {children}
      <Footer />
    </ContextProvider>  
  )
}

export default Layout
