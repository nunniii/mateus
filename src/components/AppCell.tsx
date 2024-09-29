import { NavCell } from './NavCell'
import {Card} from './Card'
import { GettingTouch } from './GettingTouch';
import { OldInternetPart } from './OldInternetPart'



import '../styles/main.scss'

import '../styles/sections.scss'


export function AppCell() {
  return (
    <div id="Main">
      <NavCell />
      <main>
        <Card />
        <GettingTouch />

        <div className='text-white/40 mt-20'>
          Mateus Nunes &#183; Estudante da Luz ✨
        </div>
        <OldInternetPart />

      </main>
    </div>
  );
};

