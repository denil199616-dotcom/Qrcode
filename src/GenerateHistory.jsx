/* import React from 'react'
import { GANARATE_DATA } from './constants';
import {QRCodeSVG} from 'qrcode.react';

const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GANARATE_DATA) || '[]');
    console.log(data)
  return (
    <div>
         {data.map((text) =>
        (
            <p key={text}>
                {text}
                <QRCodeSVG value={text} size={180} />
            </p>
        ))}
        
        
    </div>
  )
}

export default GenerateHistory */

import React from 'react';
import { GANARATE_DATA } from './constants';
import { QRCodeSVG } from 'qrcode.react';
import './GenerateHistory.css'; // Подключаем CSS файл

const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GANARATE_DATA) || '[]');

    return (
        <div className="generate-history-container">
            {data.length === 0 ? (
                <p className="empty-state">История генерации QR-кодов пуста.</p>
            ) : (
                data.map((text, index) => (
                    <div key={index} className="qr-item">
                        <p className="qr-text">{text}</p>
                        <div className="qr-code">
                            <QRCodeSVG value={text} size={180} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default GenerateHistory;
