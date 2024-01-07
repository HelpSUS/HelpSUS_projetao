import React from "react";

interface EntradaProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tamanho: string;
  texto: string;
}

export default function ({ tamanho, texto, ...rest }: EntradaProps) {
  return (
    <input
      name={` ${texto} `}
      className={` ${tamanho} placeholder-shown: border-gray-600 rounded-lg focus: ring-1 ring-[#668EF4] outline-[#3D63C4]'`}
      placeholder={` ${texto} `}
      {...rest}
    />
  );
}
