"use client";
import Image from "next/image";

export default function WppButton() {
  return (
    <div className="flex items-center">
      <a href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
        <Image
          src="/assets/icones/2.svg"
          width={50}
          height={50}
          alt="Logotipo"
          className="bg-green-600 rounded-full bottom-8 right-5 md:right-10 fixed"
        />
      </a>
    </div>
  );
}
