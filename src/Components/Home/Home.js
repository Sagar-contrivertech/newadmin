import React from 'react'
import MainContent from './MainContent'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Footer from './Footer'
function Home() {
  return (
    <>
        <Nav/>
        <Sidebar />
        <MainContent/>
        <Footer/>
    </>
  )
}

export default Home