import React from 'react'
import QrCodeGenerator from './QrCodeGenerator'
import QrCodeScanner from './QrCodeScanner'
import { Routes, Route, } from "react-router-dom";
import Navigation from './Navigation';
import ScanHistory from './ScanHistory';
import GenerateHistory from './GenerateHistory';

const Layout = () => {
  return (
    <>
    <Navigation/>
   {/* <QrCodeGenerator/>
  <QrCodeScanner/> */}
  <Routes>
        <Route path="/generate" element={<QrCodeGenerator/>}/>
        <Route path="/scan" element={<QrCodeScanner/>}/>
        <Route path="/scanHistory" element={<ScanHistory/>}/>
        <Route path="/generateHistory" element={<GenerateHistory/>}/>
        {/* <Route path="/generate" element={<QrCodeGenerator/>}/>
        <Route path="/generate" element={<QrCodeGenerator/>}/> */}
          
        
      </Routes>
  </>
  )
}

export default Layout