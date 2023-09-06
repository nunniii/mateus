export function ElixirIcon() {
    const svgCode = `
    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="elixir" stroke="none" stroke-width="1" fill-rule="evenodd">
    <path d="M17.09765,1.5 C17.1497412,3.81765094 17.1152955,7.25457405 19.6828968,10.3853611 C22.2504981,13.5161481 25.497372,15.0920825 25.497372,19.9471981 C25.497372,26.2747555 20.7684736,29.5 16.6279496,29.5 C12.4874255,29.5 7.35194918,26.8152167 7.35194918,19.3300757 C7.35194918,15.1549422 9.36720832,9.90541524 13.054988,5.26198228 C14.2326866,3.77909413 15.6533698,2.19518803 17.09765,1.5 Z M11.3470908,26.4521125 C12.5331201,27.4321643 13.9984245,28.1077803 15.743004,28.4789605 C18.3598733,29.0357309 17.4057912,27.7081224 15.743004,27.1309646 C14.6344792,26.7461927 13.1691748,26.5199087 11.3470908,26.4521125 Z" id="Combined-Shape" fill="#fff">
    </path></g></svg>
    `;
  
    return (
      <div id="ElixirIcon">
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
    );
  }