import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <header className='container'>
      <nav className='Nav'>
      <Link className='Gen' to='/generate'>Генерировать Qr Code</Link>
      <Link className='Scan' to='/scan'>Сканировать Qr Code</Link>
      <Link className='ScanH' to='/scanHistory'>История сканирования</Link>
      <Link className='GenH' to='/generateHistory'>История генерирования</Link>
      </nav>
    </header>
  )
}

export default Navigation