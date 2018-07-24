import React from 'react';
import { BarLoader } from 'react-spinners';
import './LoadingScreen.css';

const LoadingScreen = () =>
  <div className='d-flex align-items-center loading-screen'>
    <BarLoader loaderStyle={{ width: '100%!important', height: '1px!important' }} />
  </div>

export default LoadingScreen;
