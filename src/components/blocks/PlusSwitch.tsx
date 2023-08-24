import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Switch } from './Switch'

export function PlusSwitch() {
  return (
    <div className=" ">
      <div className="flex-col mx-auto w-full max-w-md rounded-2xl bg-black/20 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="items-center flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white hover:bg-black/50 focus:outline-none focus-visible:ring focus-visible:ring-blue-800 focus-visible:ring-opacity-75">
                <span>Mais</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex justify-center px-4 pt-4 pb-2 text-sm text-gray-400">
                <div className='w-full'>
                    <Switch />

                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
       
      </div>
    </div>
  )
}
