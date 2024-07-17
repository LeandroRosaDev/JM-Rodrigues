"use client";

import FiltroComponent from "@/componentes/FiltroComponente";
import CategoriasMenu from "@/componentes/Produtos/CategoriasMenu";
import GetProdutosDestaque from "@/componentes/Produtos/ProdutosGet";

export default function produtosPage() {
  return (
    <section>
      <div className="bg-[url('/assets/bg/2.png')] h-64 sm:h-[480px] -mt-36 flex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-light uppercase text-center mt-36">
          PRODUTOS
        </h1>
      </div>
      <CategoriasMenu />
      <div className="m-10">
        <h1 className="text-center m-10 text-3xl border-b-8 border-yellow-500 mx-auto w-fit">
          Confira abaixo nossos produtos em destaque!
        </h1>
        <GetProdutosDestaque />
      </div>
    </section>
  );
}
