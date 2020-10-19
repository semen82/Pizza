import React from 'react';
import preloader from '../assets/images/preloader.svg';

function Preloader() {
  return (
    <div className="preloader">
      <img src={preloader} alt="Изображение загрузки данных с сервера" />
    </div>
  );
}

export default Preloader;
