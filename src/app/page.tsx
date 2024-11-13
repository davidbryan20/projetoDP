import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
      <header className="flex flex-col items-center gap-4">
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="dark:invert"
        />
        <h1 className="text-4xl font-bold">Bem-vindo ao Projeto</h1>
        <p className="text-lg text-gray-300 text-center max-w-lg">
          Um exemplo de aplicação Next.js com uma interface de login. Explore a documentação e acesse a página de login.
        </p>
      </header>

      <main className="flex flex-col gap-6 items-center">
        <Link href="/login">
          <a className="bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium py-2 px-8 rounded-lg shadow-lg">
            Acessar Login
          </a>
        </Link>
        <Link href="/register">
          <a className="bg-green-600 hover:bg-green-500 transition-colors text-white font-medium py-2 px-8 rounded-lg shadow-lg">
            Cadastrar-se
          </a>
        </Link>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center text-gray-400 mt-8">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Documentação
        </a>
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Tutoriais
        </a>
        <a
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Templates
        </a>
      </footer>
    </div>
  );
}
