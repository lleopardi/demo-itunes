import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import './App.scss'

const App = () => {
  return (
    <>
    <Header title='Podcaster'></Header>
    <main className='main'>
      <Outlet/>
    </main>
    </>
  )
}

export default App