import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Forums from './pages/Forums'
import Members from './pages/Members'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

import './App.css'

function App() {
  const [page, setPage] = useState("Home")

  function displayPage(page: string) {
    switch(page){
      case "Home":
        return <Home />
      case "Forums":
        return <Forums />
      case "Members":
        return <Members />
      case "Log In":
        return <LogIn />
      case "Sign Up":
        return <SignUp />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Header setPage={setPage}/>
      <main>
        {displayPage(page)}
      </main>
      <Footer />
    </>
  )
}

export default App
