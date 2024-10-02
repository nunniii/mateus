import { useEffect, useState } from 'react';
import useDeviceType from '../hooks/useDeviceType'; // Importe o hook useDeviceType
import '../styles/theme-toggle.scss';

export function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const deviceType = useDeviceType(); // Obtém o tipo de dispositivo

  useEffect(() => {
    // Carrega o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Aplica o tema salvo, mas verifica o tipo de dispositivo
    if (deviceType === 'mobile' && savedTheme === 'light') {
      setTheme('dark'); // Força o tema escuro no celular
      document.body.className = 'dark';
      localStorage.setItem('theme', 'dark'); // Salva o tema escuro
    } else {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, [deviceType]);

  const toggleTheme = () => {
    if (deviceType === 'mobile' && theme === 'dark') {
      return; // Bloqueia a troca para "light" no celular
    }

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Alterna a classe
    localStorage.setItem('theme', newTheme); // Salva no localStorage
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? '🌞' : '🌗'}
    </div>
  );
}
