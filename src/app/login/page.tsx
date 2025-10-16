"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>

      <div className="bg-white rounded-3xl p-12 w-full max-w-md relative z-10 shadow-2xl border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/logo.png" 
              alt="Pivetis FC Logo" 
              width={96} 
              height={96}
              className="object-contain p-2"
            />
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 text-center mb-2">
          PIVETIS FC
        </h1>
        <p className="text-gray-600 text-center mb-10 uppercase tracking-wider text-sm">
          Dashboard Pro Clubs
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-900 mb-2 font-bold text-sm uppercase tracking-wider">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-200"
              placeholder="Digite seu usuário"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-900 mb-2 font-bold text-sm uppercase tracking-wider">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-200"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-black py-4 px-8 rounded-xl transition-all transform hover:scale-105 text-lg uppercase tracking-wider shadow-md"
          >
            Entrar
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
            ← Voltar para home
          </Link>
        </div>
      </div>
    </main>
  );
}
