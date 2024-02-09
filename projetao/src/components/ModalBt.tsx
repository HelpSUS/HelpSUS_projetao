'use client'

import React from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

interface Modalprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tamanho: string;
  margem?: string;
  texto: string;
  confirmatxt: string
  sai?: boolean;
}

export function ModalBt({ tamanho, margem, texto, sai, confirmatxt, ...rest }: Modalprops) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <div>
      <button onClick={handleOpen} className={`rounded-xl ${tamanho} ${margem} text-white ${ sai ? "bg-[#C60000]" : "bg-[#E85900]"
      }  text-xl font-medium`}>
        {texto}
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Confirmação de envio</DialogHeader>
        <DialogBody>
          {confirmatxt}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}