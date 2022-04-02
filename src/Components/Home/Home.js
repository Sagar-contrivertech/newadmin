import React, { useEffect } from 'react'
import MainContent from './MainContent'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Footer from './Footer'
function Home() {
  const effect = () => {
    const script = document.createElement('script');

    script.src = "./app-assets/js/core/app.min.js";
    script.async = true;
    console.log("workinng")
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  }
  useEffect(() => {
    effect()
  })
  return (
    <>
      <Nav />
      <Sidebar />
      <MainContent />
      <Footer />
    </>
  )
}

export default Home