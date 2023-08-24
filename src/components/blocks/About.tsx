import { SvgLocation } from "../SvgLocation"

export function About(){
    return(
        <div className="block">

              <p>Eu sou um entusiasta de código aberto, com foco em desenvolvimento web.</p>
              <p>Minhas linguagens de programação favoritas são Rust, TypeScript e atualmente, estou me dedicando ao estudo de WebAssembly, React e React Native. Além disso, tenho interesse em OCaml. Gosto de criar sites rápidos e eficientes.</p>

              <p>Sinta-se à vontade para entrar em contato para assuntos profissionais. Se você encontrar interesses de pesquisa em comum ou oportunidades de trabalho conjunto, não hesite em enviar um <a href="mailto:mateusnss@proton.me">email</a>. Estou sempre aberto a colaborações. uwu</p>
              
              <br/><br/>


                  <div className="card" id="location-card">
                      <img src="./public/assets/905480454.jpeg" alt="Location" />
                      <div id="sp-i-lc">
                          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SvgLocation />&nbsp; Divinópolis, BR</p>
                      </div>
                  </div>
          </div>
    )
}