
import { SvgLocation } from './SvgLocation';
import { Nav } from './Nav';


export function Header(){
    return(
        <header>
          
          <Nav />
          
          <div className="header-icons">
              <a target="_blank" href="https://github.com/nunniii" title="GitHub">
                  <img style={{ width: '1.5rem', marginRight: '.3rem' }} src="./src/assets/icons/github.png" alt="Github" />
              </a>

              <a href="https://www.google.com.br/maps/place/Interlaken,+Su%C3%AD%C3%A7a/@46.6845535,7.8228104,13z/data=!3m1!4b1!4m5!3m4!1s0x1453996a31921a05:0x9c111af14c02be00!8m2!3d46.6863481!4d7.8632049" target="_blank">
                  <div id="localization">

                    <SvgLocation />
                      
                      <p>Divinópolis, BR</p>
                      <span style={{marginLeft: '.6rem', backgroundColor: '#d3d3d3', borderRadius: '50%', width: '.5rem', height: '.5rem'}}></span>
                  </div>
              </a>
          </div>
          <h1>Hey, I'm <span className="gradient">Mateus Nunes</span></h1>
      </header>
    )
}