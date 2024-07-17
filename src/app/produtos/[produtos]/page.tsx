"use client";

import { PageParams } from "@/interfaces/Produtos-types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { token } from "@/componentes/cod";
import CategoriasMenu from "@/componentes/Produtos/CategoriasMenu";

export default function ProdutoPage({ params }: PageParams) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apijmrodrigues.altuori.com/wp-json/api/produto/${params.produtos}`,
        {
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [params.produtos]);

  if (!data) {
    return (
      <main className="w-full">
        <h1>Nada encontrado</h1>
      </main>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.fotos.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.fotos.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="font-sans w-full">
      <div className="bg-[url('/assets/bg/2.png')] h-64 sm:h-[380px] -mt-36 flex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8"></div>
      <CategoriasMenu />
      <div className="mx-auto my-8 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-8 my-8">
          <div className="flex flex-col gap-4">
            <div className="relative flex items-center justify-center">
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer z-10 hover:text-gray-700"
                onClick={handlePrevClick}
              >
                &lt;
              </button>
              <Image
                src={data.fotos[currentIndex].src}
                alt={data.fotos[currentIndex].titulo}
                width={600}
                height={500}
                className="border border-gray-300 rounded-md"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer z-10 hover:text-gray-700"
                onClick={handleNextClick}
              >
                &gt;
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.fotos.map((foto: any, index: number) => (
                <Image
                  key={index}
                  src={foto.src}
                  alt={foto.titulo}
                  width={100}
                  height={80}
                  className={`cursor-pointer border rounded-md ${
                    currentIndex === index
                      ? "border-red-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-2xl font-semibold">{data.nome}</h1>
            <div className="flex flex-col gap-2">
              <span className="line-through text-red-500">
                De: R$ {data.preco_original}
              </span>
              <span className="text-xl text-green-600">
                Por: R$ {data.preco}
              </span>
              <span className="text-gray-600">
                Ou no cartão por: R$ {data.preco_parcelado}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">Cor:</h3>
              <span className="w-5 h-5 border rounded-full"></span>
            </div>
            <a
              target="blank"
              href={data.link_1}
              className="inline-block py-3 px-6 text-center bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Compre via WhatsApp
            </a>
            <p>Parcelamos no cartão em até 6x</p>
          </div>
        </div>
        <div className="my-4 mx-8">
          <ul className="flex gap-8 border-b border-gray-300 pb-2">
            <li className="cursor-pointer">Descrição</li>
            <li className="cursor-pointer">Informações adicionais</li>
          </ul>
          <div className="mt-4 max-w-3xl">
            <h3 className="mt-8">
              {data.nome_long} {data.cor}
            </h3>
            <p>{data.descricao}</p>
            {data.altura && data.largura && (
              <>
                <h3 className="mt-8">Medidas:</h3>
                <p>Altura: {data.altura}m</p>
                <p>Largura|Diâmetro: {data.largura}</p>
                {/* <p>Profundidade: {data.profundidade_aberto}m</p> */}
                {data.profundidade_fechado && (
                  <p>
                    Profundidade fechado (sofás retráteis):{" "}
                    {data.profundidade_fechado}m
                  </p>
                )}
              </>
            )}
            {data.assento && (
              <>
                <h3 className="mt-8">Assento:</h3>
                <p>{data.assento}</p>
              </>
            )}
            {data.encosto && (
              <>
                <h3 className="mt-8">Encosto:</h3>
                <p>{data.encosto}</p>
              </>
            )}
            {data.estrutura && (
              <>
                <h3 className="mt-8">Características:</h3>
                <p>{data.estrutura}</p>
              </>
            )}
            {data.braco && (
              <>
                <h3 className="mt-8">Braços:</h3>
                <p>{data.braco}</p>
              </>
            )}
            <p className="mt-8">
              * As imagens dos produtos são meramente ilustrativas. As cores
              podem sofrer variações dependendo da luminosidade, tipo de câmera
              ou mesmo da visualização das imagens em computadores, notebooks
              com telas LCD ou LED, tablets ou smartphones, dependendo da
              quantidade de pixels, podendo deixar as imagens com cores mais
              opacas ou cores mais vibrantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
