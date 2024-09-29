import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { talk } from '../scripts/comming_soon';


interface DropdownProps{
  links: { title: string; ref: string; target: string }[];
  title: string;
}


export function Dropdown({links, title}: DropdownProps) {
  return (
    <div>
      <Popover className="relative">
            <Popover.Button
              className="outline-none">
              <span className="text-xl text-white no-underline">{title}</span>
              
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="bg-black rounded-lg absolute left-full z-10 mt-3 max-w-sm -translate-x-10 transform  sm:px-0 w-max">
                <div className="overflow-hidden rounded-lg  flex flex-col ring-black ">
                  {
                    links.map((link, index) => (
                      <div key={index} className="bg-black pl-2 pr-1 p-0 flex items-center hover:bg-zinc-800">
                        <a
                          href={link.ref}
                          target={link.target}
                          onClick={ link.title === 'DM me on twitter' ? talk : undefined }
                          className="m-2 rounded-md  transition duration-150 ease-in-out focus:outline-none text-sm font-medium text-white">
                              {link.title}
                        </a>
                      </div>

                    ))
                  }
                </div>
              </Popover.Panel>
            </Transition>
      </Popover>
    </div>
  )
}
