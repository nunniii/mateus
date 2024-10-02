import { DeviconPlainElixir } from './DeviconPlainElixir';
import { FileIconsOcaml } from './FileIconsOcaml';
import { SimpleIconsSqlite } from './SimpleIconsSqlite';
import { Tex } from './Tex';
import { Illustrator } from './Illustrator';
import { Postgresql } from './Postgresql';

import { FaRust } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiWebassembly } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiLinux } from "react-icons/di";

import { Icon } from '@iconify-icon/react';

export function TechsIcons({ state }: { state: 'open' | 'close' }) {
  return (
    <>
      {state === 'open' ? (
        // Renderiza apenas os ícones
        <div className="Techs mt-6 mb-6 flex flex-wrap items-center justify-center gap-1 ">
          <FaRust size={40} />
          <BiLogoTypescript size={40} />
          <Icon icon="simple-icons:go" width="40" height="40"  />
          <Icon icon="cib:deno" width="40" height="40" />
          <Tex />
          <FaReact size={40} />
          <DiSass size={40} />
          <DiRuby size={40} />
          <FaPython size={40} />
          <FileIconsOcaml />
          <Icon icon="ant-design:docker-outlined" width="40" height="40"  />
          <SiWebassembly size={40} />
          <DeviconPlainElixir />
          <RiJavascriptFill size={40} />
          <SiPrisma size={40} />
          <DiNodejsSmall size={40} />
          <DiGit size={40} />
          <DiLinux size={40} />
          <SimpleIconsSqlite />
          <Icon icon="simple-icons:fresh" width="40" height="40"  />
          <Illustrator />
          <Postgresql />
          <Icon icon="ri:java-fill" width="40" height="40"  />
        </div>
      ) : (
        <div className="Techs mt-6 mb-6 flex flex-wrap items-center justify-center gap-1 ">
          <FaRust size={40} />
          <BiLogoTypescript size={40} />
          <Icon icon="simple-icons:go" width="40" height="40"  />
          <Icon icon="cib:deno" width="40" height="40" />
          <Tex />
          <FaReact size={40} />
          <DiSass size={40} />
          <DiRuby size={40} />
          <FaPython size={40} />
          <FileIconsOcaml />
          <Icon icon="ant-design:docker-outlined" width="40" height="40"  />
          <SiWebassembly size={40} />
          <DeviconPlainElixir />
          
        </div>
      )}
    </>
  );
}
