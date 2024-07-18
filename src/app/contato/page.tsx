"use client";
import Image from "next/image";
import Link from "next/link";

export default function ContatoPage() {
  return (
    <section>
      <div className="bg-[url('/assets/bg/2.png')] h-64 sm:h-[480px] -mt-36 flex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-light uppercase text-center mt-36">
          CONTATO
        </h1>
        <p className="text-base sm:text-lg">Fale Conosco</p>
      </div>
      <div className="md:-mt-20 mb-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center bg-white mx-auto p-6 sm:p-12 rounded-t-md">
          <div className="flex flex-col text-center items-center justify-center gap-2 sm:gap-4 m-2 p-2 max-w-xs">
            <Image
              src="/assets/icones/10.svg"
              width={50}
              height={50}
              alt="Logotipo"
            />
            <h1 className="text-lg sm:text-xl">Onde Nós Estamos</h1>
            <p className="text-sm sm:text-base">
              Rua Píres do Rio, LT22 QD05 - Éden, <br /> São João de Meriti - RJ
            </p>
          </div>
          <div className="flex flex-col text-center items-center justify-center gap-2 sm:gap-4 m-2 p-2 max-w-xs">
            <Image
              src="/assets/icones/11.svg"
              width={50}
              height={50}
              alt="Logotipo"
            />
            <h1 className="text-lg sm:text-xl">Entre em contato</h1>
            <p className="text-sm sm:text-base">
              Telefone - (21) 9 96645-3123 <br /> (21) 2087-3867
            </p>
          </div>
          <div className="flex flex-col text-center items-center justify-center gap-2 sm:gap-4 m-2 p-2 max-w-xs">
            <Image
              src="/assets/icones/12.svg"
              width={50}
              height={50}
              alt="Logotipo"
            />
            <h1 className="text-lg sm:text-xl">Horário de funcionamento</h1>
            <p className="text-sm sm:text-base">
              Seg - Sex: 8 am - 17 pm <br /> Sáb 8 am - 12 pm
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 gap-6 sm:gap-10 bg-gray-700 mx-auto text-white rounded-b-md">
          <h1 className="uppercase text-lg sm:text-2xl font-semibold border-b border-yellow-500">
            Envie-nos Uma mensagem
          </h1>
          <p className="max-w-xl text-sm sm:text-base">
            Agradecemos o seu contato, atendemos normalmente de segunda a sexta
            de 08:00 às 17:00 e no sábado de 08:00 às 12:00. Em caso de dúvidas
            ou reclamações, basta enviar-nos uma mensagem.
          </p>
          <Link
            target="blank"
            href="//api.whatsapp.com/send?phone=5521966453123&text=Olá tudo bem? Gostaria de saber mais sobre os produtos disponíveis! Eu vim através do site de vocês!!"
            className="border border-white px-4 sm:px-6 py-2 sm:py-4 rounded-sm hover:bg-white hover:text-black"
          >
            Mensagem
          </Link>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14713.643649409474!2d-43.3967858!3d-22.7872331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99643b2a103ebb%3A0xd822b89acf0de156!2sJM%20Rodrigues!5e0!3m2!1spt-BR!2sbr!4v1721138998560!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64 sm:h-80 xl:h-96"
        ></iframe>
      </div>
    </section>
  );
}
