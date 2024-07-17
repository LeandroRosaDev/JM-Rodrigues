import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="bg-yellow-400 p-10 flex flex-col md:flex-row justify-around text-center gap-4">
        <nav>
          <ul className="flex flex-col">
            <li>
              <Link href="/">INICIO</Link>
            </li>
            <li>
              <Link href="/produtos">PRODUTOS</Link>
            </li>
            <li>
              <Link href="/sobre">QUEM SOMOS</Link>
            </li>
            <li>
              <Link href="/contato">CONTATO</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4 items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/icones/6.svg"
              width={30}
              height={50}
              alt="Icone de rede social"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icones/7.svg"
              width={50}
              height={70}
              alt="Icone de rede social"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icones/8.svg"
              width={40}
              height={60}
              alt="Icone de rede social"
            />
          </Link>
        </div>
      </div>
      <div className="bg-yellow-500 text-center uppercase p-10">
        <h1>Todos os direitos reservados. | © 2024 jm rodrigues</h1>
      </div>
    </footer>
  );
}
