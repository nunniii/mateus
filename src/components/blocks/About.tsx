
import { useTranslation } from 'react-i18next';


export function About() {
  const { t } = useTranslation();

  return (
    <div className="block">
      <p>{t('about_description_1')}</p>
      <p>{t('about_description_2')}</p>
      <p>
        {t('about_description_3')}
        &nbsp;<a href="mailto:mateusnss@proton.me">{t('contact_email')}</a>.
      </p>
      <br />
      <br />

              <p>Eu sou um entusiasta de código aberto, com foco em desenvolvimento web.</p>
              <p>Minhas linguagens de programação de preferência são Rust, C/C++, TypeScript e um pouco de Kotlin e atualmente, estou me dedicando ao estudo de WebAssembly e desenvolvimento mobile.</p>

              <p>Sinta-se à vontade para entrar em contato para assuntos profissionais. Se você encontrar interesses de pesquisa em comum, não hesite em enviar um <a href="mailto:mateusnss@proton.me">email</a>. Estou sempre aberto a colaborações. uwu</p>
              
              <br/><br/>

      <div className="h-52">
            <a className="w-4" target="_blank" href="https://discord.com/users/760144171075371009">
                <img alt="Discord" src="https://lanyard-profile-readme.vercel.app/api/760144171075371009?bg=000000AA&hideTimestamp=true&idleMessage=Just%20chillin'%20at%20the%20moment..." />
            </a>
      </div>
    </div>
  );
}