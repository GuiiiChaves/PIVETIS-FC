"use client";

import Link from "next/link";
import Image from "next/image";
import { TEAM_PLAYERS } from "@/data/players";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Moderno */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/logo.png" 
                  alt="Pivetis FC Logo" 
                  width={56} 
                  height={56}
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">PIVETIS FC</h1>
                <p className="text-xs text-gray-600 uppercase tracking-wider">EA FC 26</p>
              </div>
            </div>
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              Entrar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-6 tracking-tight">
              BEM-VINDO AO
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">PIVETIS FC</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Dashboard oficial do nosso time no Pro Clubs. Excelência, técnica e vitórias.
            </p>
          </div>

          {/* Stats Cards Moderno */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all shadow-lg border border-gray-200">
              <h3 className="text-5xl font-black text-gray-900 mb-2">12</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Jogadores</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all shadow-lg border border-gray-200">
              <h3 className="text-5xl font-black bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">85</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Overall Médio</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all shadow-lg">
              <h3 className="text-5xl font-black text-white mb-2">91</h3>
              <p className="text-white/90 text-sm uppercase tracking-wider">Top Player</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all shadow-lg border border-gray-200">
              <h3 className="text-5xl font-black text-gray-900 mb-2">PRO</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Divisão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elenco Completo */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16">
            ELENCO
          </h3>
          
          {/* Carousel com setas laterais */}
          <div className="relative">
            {/* Seta Esquerda */}
            <button 
              onClick={() => {
                const container = document.getElementById('players-scroll');
                if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <span className="text-white text-2xl font-bold">←</span>
            </button>

            {/* Seta Direita */}
            <button 
              onClick={() => {
                const container = document.getElementById('players-scroll');
                if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <span className="text-white text-2xl font-bold">→</span>
            </button>

            {/* Container com scroll */}
            <div id="players-scroll" className="overflow-x-auto pb-8 scrollbar-hide scroll-smooth">
              <div className="flex gap-6 min-w-max px-4">
                {TEAM_PLAYERS.map((player) => (
                  <div 
                    key={player.id} 
                    className="bg-white rounded-3xl p-6 w-80 transform hover:scale-105 transition-all flex-shrink-0 shadow-xl border border-gray-200"
                  >
                    {/* Overall e Posição */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          {player.position}
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-2xl font-black text-white">{player.overall}</span>
                      </div>
                    </div>
                    
                    {/* Imagem Hero do Jogador */}
                    <div className="w-full h-64 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center overflow-hidden relative border border-gray-200">
                      <Image
                        src={`/players/hero/${player.name.toLowerCase()}.png`}
                        alt={player.name}
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Nome do Jogador */}
                    <div className="text-center space-y-1">
                      <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                        {player.name}
                      </h4>
                      {player.name === "Oracio" && (
                        <p className="text-gray-600 text-sm font-bold">#10</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">Use as setas ou arraste para ver mais jogadores</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-200">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              PRONTO PARA VER MAIS?
            </h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Faça login para acessar o dashboard completo com estatísticas detalhadas,
              formação tática e análise de desempenho de todos os jogadores.
            </p>
            <Link 
              href="/login"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-black py-4 px-12 rounded-xl transition-all transform hover:scale-105 text-lg shadow-md"
            >
              ACESSAR DASHBOARD
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto text-center text-gray-600">
          <p className="text-sm">© 2025 Pivetis FC. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
