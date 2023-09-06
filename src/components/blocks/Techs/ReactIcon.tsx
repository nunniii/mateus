export function ReactIcon() {
    const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>
    `;
  
    return (
      <div id="ReactIcon">
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
    );
  }