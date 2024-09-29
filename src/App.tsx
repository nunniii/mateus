import React from 'react';
import useDeviceType from './hooks/useDeviceType';
import {AppCell} from './components/AppCell';
import {AppGetW} from './components/AppGetW';
import { BackGround } from './components/BackGround';

import './styles/bg.scss'


const App: React.FC = () => {
  const deviceType = useDeviceType(); 

  return (
    <>
      <div>
        {deviceType === 'mobile' ? <AppCell /> : <AppGetW />}
      </div>
      <BackGround />
    </>
  );
};





export default App;



