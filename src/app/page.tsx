import GetProdutosDestaque from "@/componentes/Produtos/ProdutosGet";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="BG-inicio">
        <div className="bg-[url('/assets/bg/1.png')] h-[1080px] -mt-36 flex flex-col justify-center items-center gap-9 text-white p-4 sm:p-8">
          <Image
            src="/assets/logotipo.png"
            width={200}
            height={200}
            alt="Logotipo"
          />
          <h1 className="text-2xl font-bold uppercase text-center">
            JM Rodrigues: Sua solução completa em Madeiras, Telhas, Portas e
            Ferragens{" "}
          </h1>
          <Link
            href="#"
            className="bg-green-700 flex rounded-3xl w-48 p-1 items-center text-center justify-center text-white"
          >
            <Image
              src="/assets/icones/2.svg"
              width={50}
              height={50}
              alt="Logotipo"
            />
            Fale Conosco
          </Link>
        </div>
      </section>
      <section id="Aviso">
        <div className="text-center text-2xl uppercase font-bold text-red-700 bg-yellow-400 p-4">
          <h1>
            não percam nossas promoções todas as madeiras com descontos
            imperdíveis para pagamento no dinheiro.
          </h1>
        </div>
      </section>
      <section id="produtos" className="p-4 sm:p-8">
        <div className="flex flex-col items-center justify-center max-w-[1080px] m-auto">
          <h1 className="text-4xl font-light uppercase border-b-8 border-yellow-500 m-10 text-center">
            Confira nossas promoções
          </h1>
          <div>
            <GetProdutosDestaque />
          </div>
        </div>
      </section>
      <section id="encontre-tudo-aqui">
        <div className="bg-[url('/assets/bg/2.png')] h-[580px] mt-10 text-center text-white items-center flex justify-center text-3xl uppercase p-4">
          <h1>Encontre tudo o que você precisa para a sua casa aqui</h1>
        </div>
      </section>
      <section
        id="categorias"
        className="flex flex-col items-center justify-center p-4 sm:p-8"
      >
        <h1 className="text-4xl font-light uppercase border-b-8 border-yellow-500 m-10 text-center">
          Categorias
        </h1>
        <div className="flex flex-wrap gap-6 max-w-[980px] justify-center uppercase">
          <div className="bg-[#BF8B63] w-100 text-center text-white font-bold p-4">
            <Link href="/categorias/Madeiras para telhado">
              <h1 className="mb-4">Madeira para telhado</h1>
              <Image
                src={"/assets/img/1.png"}
                width={270}
                height={250}
                alt="Logotipo"
              />
            </Link>
          </div>
          <div className="bg-[#BF8B63] w-100 text-center text-white font-bold p-4">
            <Link href="/categorias/Madeiras para Obra">
              <h1 className="mb-4">Madeira para Obra</h1>
              <Image
                src={"/assets/img/2.png"}
                width={270}
                height={250}
                alt="Logotipo"
              />
            </Link>
          </div>
          <div className="bg-[#BF8B63] w-100 text-center text-white font-bold p-4">
            <Link href="/categorias/Madeiras para Acabamento">
              <h1 className="mb-4">Madeira para Acabamento</h1>
              <Image
                src={"/assets/img/3.png"}
                width={270}
                height={250}
                alt="Logotipo"
              />
            </Link>
          </div>
          <div className="bg-[#BF8B63] w-100 text-center text-white font-bold p-4">
            <Link href="/categorias/Ferragens">
              <h1 className="mb-4">Ferragens</h1>
              <Image
                src={"/assets/img/4.png"}
                width={270}
                height={250}
                alt="Logotipo"
              />
            </Link>
          </div>
          <div className="bg-[#BF8B63] w-100 text-center text-white font-bold p-4">
            <Link href="/categorias/Madeiras para Estofados">
              <h1 className="mb-4">Madeiras para Estofados</h1>
              <Image
                src={"/assets/img/5.png"}
                width={270}
                height={250}
                alt="Logotipo"
              />
            </Link>
          </div>
          <div className="bg-[#BF8B63] w-100 text-center text-white font-bold p-4">
            <Link href="/categorias/Portas e acabamentos">
              <h1 className="mb-4">Portas e fechaduras</h1>
              <Image
                src={"/assets/img/6.png"}
                width={270}
                height={250}
                alt="Logotipo"
              />
            </Link>
          </div>
        </div>
      </section>

      <section id="qualidade">
        <div>
          <div className="bg-[url('/assets/bg/3.png')] h-[780px] flex justify-center text-white uppercase items-center text-4xl font-bold p-4 text-center">
            <h1>A QUALIDADE QUE VOCÊ JÁ CONHEÇE E CONFIA</h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-around items-center bg-yellow-400 py-20 uppercase p-4">
            <div className="flex flex-col max-w-xs items-center justify-center text-center">
              <Image
                src={"/assets/icones/3.svg"}
                width={150}
                height={150}
                alt="Icone"
              />
              <h1 className="text-xl">entrega rápida e planejada</h1>
              <p className="text-sm mt-2 ">
                Nossas entregas são feitas com caminhões próprios e
                profissionais altamente qualificados para garantir uma entrega
                de excelência, dentro do prazo e com segurança.
              </p>
            </div>
            <div className="flex flex-col max-w-xs items-center justify-center text-center">
              <Image
                src={"/assets/icones/4.svg"}
                width={120}
                height={120}
                alt="Icone"
              />
              <h1 className="text-xl mt-[30px]">pagamento flexível</h1>
              <p className="text-sm mt-2 ">
                Aceitamos todas as bandeiras de cartões nas nossas transações,
                garantindo muito mais segurança, flexibilidade e conforto nos
                pagamentos. Parcelamos em até 12 vezes qualquer transação
              </p>
            </div>
            <div className="flex flex-col max-w-xs items-center justify-center text-center">
              <Image
                src={"/assets/icones/5.svg"}
                width={150}
                height={150}
                alt="Icone"
              />
              <h1 className="text-xl">mais de 30 anos de tradição</h1>
              <p className="text-sm mt-2 ">
                Com 30 anos de experiência e duas filiais ativas, a Galuta
                Madeiras é altamente qualificada e possui toda a infraestrutura
                necessária para garantir um serviço de excelência.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="border-b-8 text-3xl font-light uppercase border-yellow-400 text-center m-auto w-80 mt-10 p-4">
          Encontre-nos em
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14713.643649409474!2d-43.3967858!3d-22.7872331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99643b2a103ebb%3A0xd822b89acf0de156!2sJM%20Rodrigues!5e0!3m2!1spt-BR!2sbr!4v1721138998560!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-80 xl:h-96 mt-8"
        ></iframe>
      </section>
    </main>
  );
}
