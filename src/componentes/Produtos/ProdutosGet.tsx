"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductsDestaqueAction } from "@/action/produtos/get-produtos-action";

export default function GetProdutosDestaque() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await getProductsDestaqueAction();
        if (data && data.length > 0) {
          setProdutos(data);
        } else {
          setProdutos([]);
        }
      } catch (err) {
        setError(
          "Não foi possível carregar os produtos. Por favor, tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <div>
        <div className="flex flex-wrap gap-4 justify-center">
          {produtos.map((produto: any) => (
            <div
              key={produto.id}
              className="flex flex-col rounded-md text-start gap-2 p-2 max-w-xs items-center bg-white shadow-lg"
            >
              {produto.fotos && produto.fotos.length > 0 && (
                <Link href={`/produtos/${produto.id}`}>
                  <Image
                    src={
                      produto.fotos[1]
                        ? produto.fotos[1].src
                        : produto.fotos[0].src
                    }
                    alt={`Imagem de ${produto.nome}`}
                    width={300}
                    height={200}
                  />
                </Link>
              )}

              <h2 className="w-full text-lg font-medium">{produto.nome}</h2>
              <p className="w-full line-through">
                De: R$ {produto.preco_original}
              </p>
              <p className="w-full">
                Por:{" "}
                <span className="font-bold text-2xl text-red-600">
                  {" "}
                  R$ {produto.preco}
                </span>{" "}
                <span>a vista</span>
              </p>
              <p className="w-full text-sm">
                Ou no cartão por: R${produto.preco_parcelado}
              </p>
              <Link
                target="blank"
                href={produto.link_1}
                className="bg-green-600 flex rounded-3xl w-48 p-1 items-center text-center justify-center text-white"
              >
                <Image
                  src="/assets/icones/2.svg"
                  width={50}
                  height={50}
                  alt="Logotipo"
                />
                Comprar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
