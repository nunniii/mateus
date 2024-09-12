import { useState } from 'react'
import { Tab } from '@headlessui/react'
import '../../styles/input.css'
import { Discord } from './Switch/Discord';
import { Genshin } from './Switch/Genshin';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}  



export function Switch() {
  let [categories] = useState({
    Discord: [],
    Genshin: [],
  })

  return (
    <div className=' flex flex-col '>
    <div className="max-w-sm self-center">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-black/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'focus:outline-none',
                  selected
                    ? 'bg-black/90 shadow'
                    : 'text-blue-600 hover:bg-zinc-700/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel><Discord /></Tab.Panel>
          <Tab.Panel><Genshin /></Tab.Panel>
          
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
  )
}
