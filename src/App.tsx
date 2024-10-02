import React from 'react';
import useDeviceType from './hooks/useDeviceType';
import { AppCell } from './components/AppCell';
import { AppGetW } from './components/AppGetW';

import './styles/themes.scss';

const App: React.FC = () => {
  const deviceType = useDeviceType(); 

  return (
    <>
      <div>
        {deviceType === 'mobile' ? <AppCell /> : <AppGetW />}
      </div>
    </>
  );
};

export default App;
