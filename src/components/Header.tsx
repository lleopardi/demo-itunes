import React from 'react'
import './Header.css'
import Loading from './Loading'

interface Props {
    title: string
}

const Header = ({title}: Props) => {
  return (
    <header>
        <nav>
            <a href='/'>{title}</a>
        </nav>
            <Loading></Loading>
    </header>
  )
}

export default Header