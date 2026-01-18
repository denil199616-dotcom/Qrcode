/* import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import './QrCodeScanner.css'
import { SCAN_DATA } from './constants';

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  
  const scanHandler = (result) => {
    setScanned(result[0].rawValue)
    //console.log(result[0].rawValue)
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]) );
  }
    const settings = {
        finder: false,
    }

    const styleSettings = {
        container: {width: 350}
    }
  return (
    <div className="container">
      
        <Scanner 
        //allowMultiple={true} 
        onScan={scanHandler}
        components={settings}
        styles={styleSettings}
        />
        <p className='result'>{scanned}</p>
        
    </div>
  )
}

export default QrCodeScanner */

import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import './QrCodeScanner.css';
import { SCAN_DATA } from './constants';

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    if (!result) return;

    const rawValue = result[0].rawValue;
    setScanned(rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    // Проверка на наличие такого же значения в localStorage
    if (!prevData.includes(rawValue)) {
      const updatedData = [...prevData, rawValue];
      localStorage.setItem(SCAN_DATA, JSON.stringify(updatedData));
    }
  };

  const settings = {
    finder: false,
  };

  const styleSettings = {
    container: { width: 350 },
  };

  return (
    <div className="container">
      <Scanner
        onScan={scanHandler}
        components={settings}
        styles={styleSettings}
      />
      <p className="result">{scanned}</p>
    </div>
  );
};

export default QrCodeScanner;
