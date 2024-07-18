"use client";
import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <section>
      <div className="bg-[url('/assets/bg/2.png')] h-64 sm:h-[380px] -mt-36 flex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-light uppercase text-center mt-36">
          QUEM SOMOS
        </h1>
        <p className="text-base sm:text-lg">Nossa história</p>
      </div>
      <div className="text-center my-10">
        <h1 className="text-3xl font-semibold">O Início da JM Rodrigues</h1>
        <p className="max-w-3xl m-auto p-4">
          Nossa história sempre foi acompanhada de muita dedicação e esforço,
          trabalhamos duro e nos esforçamos desde o início para entregar
          produtos de excelente qualidade, sempre prezando pelo respeito mútuo
          entre nossos colaboradores.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 my-10">
        <div className="flex flex-col sm:flex-row items-center text-center bg-white  rounded-lg shadow-md">
          <Image
            src="/assets/img/1.png"
            width={500}
            height={500}
            alt="foto da madeireira"
            className="w-full sm:w-auto"
          />
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-2xl mb-4 sm:mb-10 border-b border-yellow-500 pb-2">
              Nossa história começa em 20/08/1995
            </h1>
            <p className="max-w-3xl">
              A trajetória da JM Rodrigues iniciou-se em 20 de agosto de 1995,
              enfrentando inúmeros desafios. Desde o princípio, dedicamo-nos à
              venda de madeiras para obras, com foco na qualidade e no
              compromisso. Superando as dificuldades iniciais, conquistamos a
              confiança de nossos clientes, estabelecendo uma reputação sólida
              no mercado. Este período inicial, marcado por muito esforço e
              determinação, foi fundamental para consolidar os valores que
              praticamos até hoje.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center bg-white  rounded-lg shadow-md">
          <Image
            src="/assets/img/2.png"
            width={500}
            height={500}
            alt="foto da madeireira"
            className="w-full sm:w-auto"
          />
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-2xl mb-4 sm:mb-10 border-b border-yellow-500 pb-2">
              Muita luta e garra
            </h1>
            <p className="max-w-3xl">
              A história da JM Rodrigues é marcada por uma trajetória de muita
              luta e garra. Após os desafios iniciais, nossa dedicação e
              perseverança continuaram a ser postos à prova. Enfrentamos o
              mercado competitivo e a necessidade constante de inovação, sempre
              com o objetivo de atender às necessidades dos nossos clientes.
              Cada obstáculo superado fortaleceu nossa empresa e nossa equipe,
              consolidando nossa posição no setor de madeiras para obras.
              Acreditamos que é essa determinação incansável que nos distingue,
              permitindo-nos oferecer produtos de alta qualidade e um serviço
              excepcional.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center bg-white  rounded-lg shadow-md">
          <Image
            src="/assets/img/1.png"
            width={500}
            height={500}
            alt="foto da madeireira"
            className="w-full sm:w-auto"
          />
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-2xl mb-4 sm:mb-10 border-b border-yellow-500 pb-2">
              Hoje em 2024
            </h1>
            <p className="max-w-3xl">
              Em 2024, nos orgulhamos da nossa trajetória e das conquistas
              alcançadas ao longo dos anos. O que começou como um pequeno
              empreendimento em 1995, hoje é uma referência no setor de madeiras
              para obras. Nosso compromisso com a qualidade e a satisfação do
              cliente continua a ser o pilar de nossas operações. Investimos
              continuamente em tecnologia e inovação para atender às demandas do
              mercado e superar as expectativas de nossos clientes. Nossa
              equipe, altamente capacitada, compartilha da mesma visão e
              dedicação que nos impulsionaram desde o início. Estamos preparados
              para enfrentar o futuro com confiança, mantendo nossos valores e a
              excelência que nos definem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
