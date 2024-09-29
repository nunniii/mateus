
import '../styles/card.scss';

import Techs from './blocks/Techs';

export function Card(){
    return (
        <div id="Card" className='section-card'>
            <div id='about'>
                <h1>Hey, I'm <span className='text-gradient'>Mateus Nunes</span></h1>
                {/* <HeaderIcons /> */}

                <p>Sou desenvolvedor web, entusiasta de código aberto. As linguagens que mais uso são Rust e Typescript.</p>
                <p>Sinta-se à vontade para entrar em contato para assuntos profissionais. Se você encontrar interesses de pesquisa em comum, não hesite em enviar um email ^^</p>

                <Techs />
            </div>

            

            


            
        </div>
    )
}