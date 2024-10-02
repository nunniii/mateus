import { useEffect, useState } from 'react';
import { HeaderIcons } from './blocks/HeaderIcons';
import { ThemeToggle } from './ThemeToggle'; // Importa o toggle
import '../styles/nav.scss';

export function Nav() {
  const [navWidth, setNavWidth] = useState(70);
  const [navMargin, setNavMargin] = useState(5);
  const [navColor, setNavColor] = useState('rgba(255, 255, 255, 0.1)');
  const [navOpacity, setNavOpacity] = useState(1);
  const [navBlur, setNavBlur] = useState(0);
  const [navBorderColor, setNavBorderColor] = useState('rgba(0, 0, 0, 0.2)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxHeight = window.innerHeight;
      let newWidth = Math.min(80, 70 + (scrollTop / maxHeight) * 100);
      let newMargin = Math.max(1, 5 - (scrollTop / maxHeight) * 10);
      const newColor = `rgba(255, 255, 255, 0.1)`;
      const newOpacity = Math.max(0.2, 1 - (scrollTop / maxHeight) * 0.1);
      const newBlur = Math.min(30, (scrollTop / maxHeight) * 30);
      const borderAlpha = Math.min(0.3, (scrollTop / maxHeight) * 0.3);
      const newBorderColor = `rgba(0, 0, 0, ${borderAlpha})`;

      setNavWidth(newWidth);
      setNavMargin(newMargin);
      setNavColor(newColor);
      setNavOpacity(newOpacity);
      setNavBlur(newBlur);
      setNavBorderColor(newBorderColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        width: `${navWidth}vw`,
        margin: `${navMargin}rem auto`,
        backgroundColor: navColor,
        opacity: navOpacity,
        backdropFilter: `blur(${navBlur}px)`,
        border: `1px solid ${navBorderColor}`,
        transition: 'all 0.3s ease',
      }}
    >
      <ul>
        <li><a href="#">/</a></li>
        <li><a href="https://nunito-blog.vercel.app/">/blog</a></li>
        <li><a href="https://nunito-blog.vercel.app/slug/nuniLab">/notes</a></li>
      </ul>
      <div className="language-toggle-container flex items-center gap-2">
        <HeaderIcons />
        <ThemeToggle /> {/* Adiciona o Theme Toggle aqui */}
      </div>
    </nav>
  );
}
