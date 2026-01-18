import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
    <Link to='/generate'>Генерировать Qr Code</Link>
    <Link to='/scan'>Сканировать Qr Code</Link>
    <Link to='/scanHistory'>История сканирования</Link>
    <Link to='/generateHistory'>История генерирования</Link>
    </nav>
  )
}

export default Navigation