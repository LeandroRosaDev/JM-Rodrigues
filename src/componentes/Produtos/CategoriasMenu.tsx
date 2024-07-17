import Image from "next/image";
import Link from "next/link";

export default function CategoriasMenu() {
  return (
    <section>
      <nav>
        <ul className="flex flex-wrap justify-center  bg-white p-8 gap-16">
          <li>
            <Link
              href="/categorias/Madeiras para Telhado"
              className="flex flex-col items-center hover:-mt-2 transition-all"
            >
              <Image
                src="/assets/icones/13.svg"
                width={50}
                height={50}
                alt="icone personalizado"
              />
              Madeiras para Telhado
            </Link>
          </li>
          <li>
            <Link
              href="/categorias/Madeiras para Obra"
              className="flex flex-col items-center hover:-mt-2 transition-all"
            >
              <Image
                src="/assets/icones/18.svg"
                width={50}
                height={50}
                alt="icone personalizado"
              />
              Madeiras para Obra
            </Link>
          </li>
          <li>
            <Link
              href="/categorias/Madeiras para Acabamento"
              className="flex flex-col items-center hover:-mt-2 transition-all"
            >
              <Image
                src="/assets/icones/15.svg"
                width={50}
                height={50}
                alt="icone personalizado"
              />
              Madeiras para Acabamento
            </Link>
          </li>
          <li>
            <Link
              href="/categorias/Ferragens"
              className="flex flex-col items-center hover:-mt-2 transition-all"
            >
              <Image
                src="/assets/icones/16.svg"
                width={50}
                height={50}
                alt="icone personalizado"
              />
              Ferragens e Ferramentas
            </Link>
          </li>
          <li>
            <Link
              href="/categorias/Madeiras para Estofados"
              className="flex flex-col items-center hover:-mt-2 transition-all"
            >
              <Image
                src="/assets/icones/17.svg"
                width={50}
                height={50}
                alt="icone personalizado"
              />
              Madeiras para Estofados
            </Link>
          </li>
          <li>
            <Link
              href="/categorias/Portas e Acabamentos"
              className="flex flex-col items-center hover:-mt-2 transition-all"
            >
              <Image
                src="/assets/icones/14.svg"
                width={50}
                height={50}
                alt="icone personalizado"
              />
              Portas e Fechaduras
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
