import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      
      if (width <= 768) {
        setDeviceType('mobile');  // celular
      } else if (width <= 1024) {
        setDeviceType('tablet');  // tablet
      } else {
        setDeviceType('desktop'); // Computadores +
      }
    };

    checkDeviceType(); // Checar no início
    window.addEventListener('resize', checkDeviceType); // Rechecar ao redimensionar a janela

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
