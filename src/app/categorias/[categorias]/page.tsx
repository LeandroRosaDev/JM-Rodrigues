// componentes/produtosComponentes/CategoriasPage.tsx
"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageParams } from "@/interfaces/Produtos-types";
import FiltroComponent from "@/componentes/FiltroComponente";
import { token } from "@/componentes/cod";
import CategoriasMenu from "@/componentes/Produtos/CategoriasMenu";

const CategoriasPage = ({ params }: PageParams) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const fetchProdutos = useCallback(async () => {
    let url = `https://apijmrodrigues.altuori.com/wp-json/api/produto?disponibilidade=sim&categoria=${params.categorias}`;
    Object.keys(filters).forEach((key) => {
      url += `&${key}=${filters[key]}`;
    });

    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }

      const data: any = await response.json();
      console.log("Dados recebidos:", data);
      if (!data || data.length === 0) {
        throw new Error("Nenhum produto encontrado");
      }

      setProdutos(data);
    } catch (error: any) {
      console.error("Erro na requisição:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [params, filters]);

  useEffect(() => {
    fetchProdutos();
  }, [fetchProdutos]);

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
  };

  if (loading) return <p>Carregando...</p>;
  if (error)
    return (
      <section className="w-full">
        <div className="bg-[url('/assets/bg/2.png')] h-64 sm:h-[480px] -mt-36 flex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-light uppercase text-center mt-36">
            PRODUTOS
          </h1>
        </div>
        <CategoriasMenu />
        <h3 className="text-center mt-4">{error}</h3>

        <h1 className="text-center m-8">
          Mas você pode continuar vendo todos os produtos de:{" "}
          {decodeURIComponent(params.categorias).replace(/%20/g, " ")}
        </h1>
        <div className="flex flex-row justify-center">
          <FiltroComponent
            params={params}
            onFilterChange={handleFilterChange}
          />

          <div className="flex flex-wrap gap-5 justify-center max-w-screen-lg m-8">
            {produtos.map((produto: any) => (
              <div
                key={produto.id}
                className="relative max-w-sm bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 flex flex-col items-center text-center p-4 justify-between"
              >
                {produto.fotos && produto.fotos.length > 0 && (
                  <Link href={`/produtos/${produto.id}`}>
                    <Image
                      src={produto.fotos[1].src}
                      alt={`Imagem de ${produto.nome}`}
                      width={300}
                      height={200}
                      className="w-full h-auto transition-opacity duration-500 rounded-md"
                    />
                  </Link>
                )}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500">
                  <Link
                    className="bg-red-700 text-white text-lg p-2.5 no-underline rounded hover:bg-red-600"
                    href={`/produtos/${produto.id}`}
                  >
                    Ver detalhes
                  </Link>
                </div>
                <div className="text-left">
                  <h2>{produto.nome}</h2>
                  <p className="line-through text-red-500 text-sm">
                    De: {produto.preco_original}
                  </p>
                  <p className="text-lg">
                    Por: {produto.preco}{" "}
                    <span className="text-sm">a vista</span>
                  </p>
                  <p className="text-base text-gray-500">
                    Ou no cartão em até 12x de: {produto.preco_parcelado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  return (
    <section className="w-full">
      <div className="bg-[url('/assets/bg/2.png')] h-64 sm:h-[480px] -mt-36 flex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-light uppercase text-center mt-36">
          PRODUTOS
        </h1>
      </div>
      <CategoriasMenu />
      <h1 className="text-center m-8 text-xl">
        Exibindo todos os produtos de{" "}
        {decodeURIComponent(params.categorias).replace(/%20/g, " ")}
      </h1>
      <div className="flex flex-row justify-center">
        <FiltroComponent params={params} onFilterChange={handleFilterChange} />

        <div className="flex flex-wrap gap-5 justify-center max-w-screen-lg m-8">
          {produtos.map((produto: any) => (
            <div
              key={produto.id}
              className="relative max-w-sm bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 flex flex-col items-center text-center p-4 justify-between"
            >
              {produto.fotos && produto.fotos.length > 0 && (
                <Link href={`/produtos/${produto.id}`}>
                  <Image
                    src={produto.fotos[1].src}
                    alt={`Imagem de ${produto.nome}`}
                    width={300}
                    height={200}
                    className="w-full h-auto transition-opacity duration-500 rounded-md"
                  />
                </Link>
              )}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500">
                <Link
                  className="bg-red-700 text-white text-lg p-2.5 no-underline rounded hover:bg-red-600"
                  href={`/produtos/${produto.id}`}
                >
                  Ver detalhes
                </Link>
              </div>
              <div className="text-left w-full">
                <h2 className="text-xl w-full">{produto.nome}</h2>
                <p className="line-through text-red-500 text-sm">
                  De: R$ {produto.preco_original}
                </p>
                <p className="text-lg">
                  Por: R$ {produto.preco}{" "}
                  <span className="text-sm">a vista</span>
                </p>
                <p className="text-base text-gray-500">
                  Ou no cartão em até 12x de: R$ {produto.preco_parcelado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriasPage;
