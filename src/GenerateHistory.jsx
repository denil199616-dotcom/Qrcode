import React from 'react'
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
                <QRCodeSVG value={text} size={100} />
            </p>
        ))}
        {/* <p>{data[1]}</p> 
        {/* {console.log(data.at(-1))} 
        <p>{data.at(-1)}</p>
        <QRCodeSVG value={data.at(-1)} size={100} /> */}

        
    </div>
  )
}

export default GenerateHistory