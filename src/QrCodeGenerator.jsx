/* import  { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import { GANARATE_DATA } from './constants';
//import './QrCodeGenerator.css';

const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  
    const onClickHandler = () =>{
  //<QRCodeSVG value={value} />
  setResult(value);
  setValue('');

  }
  const onChangeHandler = (event) => {
const prevData = JSON.parse(localStorage.getItem(GANARATE_DATA) || '[]');

    localStorage.setItem(GANARATE_DATA, JSON.stringify([...prevData, value]) );

  setValue(event.target.value);
  setResult('');
  }
  console.log(result)
  return (
    <div>
        <input  
        type="text" 
        value={value}
        placeholder='Введите текст...' 
        onChange={onChangeHandler} 
        className='result' />

        <button className='button' type='button' onClick={onClickHandler}>
          Сгенерировать QR</button>

          {result !== '' && (<QRCodeSVG value={result} size={200} />)}
    </div>
  )
}

export default QrCodeGenerator */

import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GANARATE_DATA } from './constants';

const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  // Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    const savedData = localStorage.getItem(GANARATE_DATA);
    if (!savedData) {
      localStorage.setItem(GANARATE_DATA, JSON.stringify([]));
    }
  }, []);

  const onClickHandler = () => {
    if (!value.trim()) return; // Проверка на пустую строку

    // Сохраняем значение в localStorage только при генерации QR
    const prevData = JSON.parse(localStorage.getItem(GANARATE_DATA) || '[]');
    const updatedData = [...prevData, value];
    localStorage.setItem(GANARATE_DATA, JSON.stringify(updatedData));

    setResult(value);
    setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
        className="result"
      />
      <button className="button" type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result && <QRCodeSVG value={result} size={200} />}
    </div>
  );
};

export default QrCodeGenerator;