interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tamanho: string;
  margem?: string;
  texto: string;
  sai?: boolean;
}

export default function ({ tamanho, margem, texto, sai, ...rest }: BotaoProps) {
  return (
    <button
      className={`rounded-xl ${tamanho} ${margem} text-white ${
        sai ? "bg-[#C60000]" : "bg-[#E85900]"
      }  text-xl font-medium`}
      {...rest}
    >
      {texto}
    </button>
  );
}
