/* import React from 'react'
import { SCAN_DATA } from './constants';
import {QRCodeSVG} from 'qrcode.react';

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    console.log(data)
  return (
    <div>
        {data.map((text) =>
        (
            <p key={text}>
                {text}
                <QRCodeSVG value={text} size={100} />
            </p>
        ))}
        
    </div>
  )
}

export default ScanHistory */
import React from 'react';
import { SCAN_DATA } from './constants';
import { QRCodeSVG } from 'qrcode.react';
import './ScanHistory.css'; // Подключаем CSS файл

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className="scan-history-container">
            {data.length === 0 ? (
                <p className="empty-state">История сканирования QR-кодов пуста.</p>
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

export default ScanHistory;
