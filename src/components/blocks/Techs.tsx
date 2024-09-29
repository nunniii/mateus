import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import '../../styles/Techs.scss';

import '../../styles/sections.scss'

// Ícones
import { TechsIcons } from './Techs/TechsIcons';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Techs() {
  let [isOpen, setIsOpen] = useState(false); // Inicia fechado (false)

  function open() {
    setIsOpen(true); // Abre o modal
  }

  function close() {
    setIsOpen(false); // Fecha o modal
  }

  return (
    <>
      {/* Renderiza o botão apenas se o modal estiver fechado */}
      {!isOpen && (
        <button
          onClick={open}
          className="rounded-md text-sm font-medium text-white focus:outline-none"
        >
          {/* Renderiza os ícones quando o estado for 'close' */}
          <TechsIcons state="close" />
        </button>
      )}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300 ease-out">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Painel do Modal com animação de transição */}
            <Dialog.Panel
              className={`w-full max-w-3xl rounded-xl border-white/20 border-spacing-1 
                          backdrop-blur-2xl transition-all duration-700 ease-out 
                          transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} `}
            >
              {/* Renderiza os ícones quando o estado for 'open' */}
              <TechsIcons state="open" />

              <div className="mt-4 flex items-center justify-center pb-5">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-zinc-950 py-2 px-7 border-x-2 border-y-2 border-zinc-100/25 text-white shadow-inner shadow-zinc-950/50 focus:outline-none hover:bg-zinc-900 hover:border-white/5 hover:border-x-2 hover:border-y-2"
                  onClick={close}
                >
                  <IoMdArrowRoundBack size={17} />
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
