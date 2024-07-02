import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.mainLoader}>
        <ThreeCircles
          color={'#FC842D'}
          arialLabel="loading-indicator"
          height="120"
          width="120"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
}
