
import '../styles/main.scss'

import '../styles/sections.scss'

import {Nav} from './Nav'
import {Card} from './Card'
import { GettingTouch } from './GettingTouch';
import { OldInternetPart } from './OldInternetPart'

export function AppGetW() {
  return (
    <div id="Main">
      <Nav />
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




