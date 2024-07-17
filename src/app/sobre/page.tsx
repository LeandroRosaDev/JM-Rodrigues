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
            <h1 className="text-xl mb-4 sm:mb-10 border-b border-yellow-500 pb-2">
              Nossa história começa em 1950
            </h1>
            <p className="max-w-3xl">
              O início foi longo e complicado, e isso é apenas um texto para
              ilustrar a história da madeireira. O início foi longo e
              complicado, e isso é apenas um texto para ilustrar a história da
              madeireira. O início foi longo e complicado, e isso é apenas um
              texto para ilustrar a história da madeireira. O início foi longo e
              complicado, e isso é apenas um texto para ilustrar a história da
              madeireira.
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
            <h1 className="text-xl mb-4 sm:mb-10 border-b border-yellow-500 pb-2">
              Muita luta e garra
            </h1>
            <p className="max-w-3xl">
              O início foi longo e complicado, e isso é apenas um texto para
              ilustrar a história da madeireira. O início foi longo e
              complicado, e isso é apenas um texto para ilustrar a história da
              madeireira. O início foi longo e complicado, e isso é apenas um
              texto para ilustrar a história da madeireira. O início foi longo e
              complicado, e isso é apenas um texto para ilustrar a história da
              madeireira.
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
            <h1 className="text-xl mb-4 sm:mb-10 border-b border-yellow-500 pb-2">
              Hoje em 2024
            </h1>
            <p className="max-w-3xl">
              O início foi longo e complicado, e isso é apenas um texto para
              ilustrar a história da madeireira. O início foi longo e
              complicado, e isso é apenas um texto para ilustrar a história da
              madeireira. O início foi longo e complicado, e isso é apenas um
              texto para ilustrar a história da madeireira. O início foi longo e
              complicado, e isso é apenas um texto para ilustrar a história da
              madeireira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
