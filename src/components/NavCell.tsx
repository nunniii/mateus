import { useEffect, useState } from 'react';
import { HeaderIcons } from './blocks/HeaderIcons';
import '../styles/navCell.scss';

export function NavCell() {
  const [navWidth, setNavWidth] = useState(85); // Largura inicial de 70vw
  const [navMargin, setNavMargin] = useState(3.5); // Margem inicial de 5rem
  const [navColor, setNavColor] = useState('rgba(0, 0, 0, 0.5)'); // Cor inicial com transparência
  const [navOpacity, setNavOpacity] = useState(1); // Opacidade inicial 100%
  const [navBlur, setNavBlur] = useState(0); // Blur inicial
  const [navBorderColor, setNavBorderColor] = useState('rgba(0, 0, 0, 1)'); // Cor inicial da borda

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxHeight = window.innerHeight; // Altura da janela para referência

      // Cálculo do width e margin
      let newWidth = Math.min(90, 70 + (scrollTop / maxHeight) * 100); // Cresce até 100vw
      let newMargin = Math.max(1, 3.5 - (scrollTop / maxHeight) * 10); // Diminui a margem até 0rem

      // Cálculo da transição de cor (RGB de #000000 para #100e15)
      const maxScroll = Math.min(1, scrollTop / maxHeight); // Valor entre 0 e 1 baseado no scroll
      const r = Math.round(0 + (16 - 0) * maxScroll); // Transição do R (0 -> 16)
      const g = Math.round(0 + (14 - 0) * maxScroll); // Transição do G (0 -> 14)
      const b = Math.round(0 + (21 - 0) * maxScroll); // Transição do B (0 -> 21)

      const newColor = `rgba(${r}, ${g}, ${b}, 0.5)`; // Combina o novo valor de cor com transparência

      // Cálculo da opacidade e blur
      const newOpacity = Math.max(0.8, 1 - (scrollTop / maxHeight) * 0.1); // Diminui a opacidade até 0.5
      const newBlur = Math.min(70, (scrollTop / maxHeight) * 30); // Aumenta o blur até 20px

      // Cálculo da borda (de #000000 para rgba(255, 255, 255, 0.6))
      const borderR = Math.round(0 + (255 - 0) * maxScroll); // Transição do R (0 -> 255)
      const borderG = Math.round(0 + (255 - 0) * maxScroll); // Transição do G (0 -> 255)
      const borderB = Math.round(0 + (255 - 0) * maxScroll); // Transição do B (0 -> 255)
      const borderAlpha = Math.min(0.3, maxScroll * 0.3); // Transição do alpha até 0.6

      const newBorderColor = `rgba(${borderR}, ${borderG}, ${borderB}, ${borderAlpha})`; // Borda gradual

      // Atualiza os estados
      setNavWidth(newWidth);
      setNavMargin(newMargin);
      setNavColor(newColor);
      setNavOpacity(newOpacity);
      setNavBlur(newBlur);
      setNavBorderColor(newBorderColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove o listener quando o componente desmonta
    };
  }, []);

  return (
    <nav
      style={{
        width: `${navWidth}vw`, // Aplica a largura dinâmica
        margin: `${navMargin}rem auto`, // Aplica a margem dinâmica (auto para centralizar)
        backgroundColor: navColor, // Aplica a cor de fundo dinâmica com transparência
        opacity: navOpacity, // Aplica a opacidade dinâmica
        backdropFilter: `blur(${navBlur}px)`, // Aplica o blur dinâmico
        border: `1px solid ${navBorderColor}`, // Aplica a borda dinâmica
        transition: 'all 0.3s ease', // Suaviza as transições
      }}
    >
      <ul>
        <li><a href="https://nunito-blog.vercel.app/">/blog</a></li>
        <li><a href="https://nunito-blog.vercel.app/slug/nuniLab">/notes</a></li>
      </ul>
      <div className="language-toggle-container">
        <HeaderIcons />
      </div>
    </nav>
  );
}
