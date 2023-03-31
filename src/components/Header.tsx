import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Loading from './Loading'

interface Props {
    title: string
}

const Header = ({title}: Props) => {
  return (
    <header>
        <nav>
            <Link to={'/'}> {title} </Link>
        </nav>
            <Loading></Loading>
    </header>
  )
}

export default Header