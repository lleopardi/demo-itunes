import './Header.scss'

import { Link } from 'react-router-dom'
import Loading from './Loading'
import React from 'react'

interface Props {
    title: string
}

const Header = ({title}: Props) => {
  return (
    <header>
        <nav>
            <Link to={'/'}>{title}</Link>
        </nav>
            <Loading></Loading>
    </header>
  )
}

export default Header