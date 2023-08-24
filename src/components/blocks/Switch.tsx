import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Location } from './Switch/Location'
import '../../styles/input.css'
import { Discord } from './Switch/Discord';
import { Techs } from './Switch/Techs';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}  



export function Switch() {
  let [categories] = useState({
    Tecnologias: [],
    Discord: [],
    Location: [],
  })

  return (
    <div className="">
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
          <Tab.Panel><Techs /></Tab.Panel>
          <Tab.Panel><Discord /></Tab.Panel>
          <Tab.Panel><Location /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
