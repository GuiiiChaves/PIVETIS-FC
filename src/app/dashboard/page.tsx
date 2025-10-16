"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PlayerCard from "@/components/PlayerCard";
import { TEAM_PLAYERS } from "@/data/players";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/logo.png" 
                alt="Pivetis FC Logo" 
                width={56} 
                height={56}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900">PIVETIS FC</h1>
              <p className="text-xs text-gray-600 uppercase tracking-wider">Dashboard Pro Clubs</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Formação do Time */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-5xl font-black text-gray-900 text-center mb-16 uppercase tracking-tight">
          Elenco do Pivetis FC
        </h2>

        {/* Campo de futebol - Estilo Tático Verde */}
        <div className="relative rounded-3xl p-8 mb-12 min-h-[1000px] overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-800 shadow-2xl">
          {/* Badge de formação no canto */}
          <div className="absolute top-6 right-6 bg-green-900/50 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 z-10">
            <span className="text-white text-sm font-bold tracking-wider">433-4</span>
          </div>

          {/* Textura de grama */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px)',
            backgroundSize: '100% 6px'
          }}></div>
          
          {/* Linhas do campo - Brancas */}
          <div className="absolute inset-0">
            {/* Linha do meio */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            
            {/* Círculo central */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/50 rounded-full"></div>
            
            {/* Área do goleiro (superior) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-56 h-20 border-2 border-t-0 border-white/40 rounded-b-lg"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-10 border-2 border-t-0 border-white/40 rounded-b-md"></div>
            
            {/* Área do goleiro (inferior) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-20 border-2 border-b-0 border-white/40 rounded-t-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-10 border-2 border-b-0 border-white/40 rounded-t-md"></div>
            
            {/* Linhas laterais */}
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            {/* Linhas horizontais */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* Jogadores dispostos em formação 4-3-3 - Estilo Tático */}
          <div className="relative flex flex-col items-center gap-16 pt-12">
            {/* Atacantes - ST no centro, extremos nas pontas */}
            <div className="flex justify-center items-center gap-32 w-full max-w-4xl">
              {TEAM_PLAYERS.filter(p => p.position === "LW").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
              {TEAM_PLAYERS.filter(p => p.position === "ST").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
              {TEAM_PLAYERS.filter(p => p.position === "RW").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>

            {/* CAM - Centralizado, um pouco recuado */}
            <div className="flex justify-center -mt-8">
              {TEAM_PLAYERS.filter(p => p.position === "CAM").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>

            {/* Meio-campistas (CMs)  */}
            <div className="flex justify-center items-center gap-40 w-full max-w-3xl mt-4">
              {TEAM_PLAYERS.filter(p => p.position === "CM").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>

            {/* Defensores  */}
            <div className="flex justify-center items-center gap-12 w-full max-w-4xl mt-8">
              {TEAM_PLAYERS.filter(p => p.position === "LB").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
              {TEAM_PLAYERS.filter(p => p.position === "CB").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
              {TEAM_PLAYERS.filter(p => p.position === "RB").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>

            {/* Goleiro */}
            <div className="flex justify-center mt-6">
              {TEAM_PLAYERS.filter(p => p.position === "GK").map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas do Time */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all shadow-lg border border-gray-200">
            <h3 className="text-4xl font-black text-gray-900 mb-2">
              {(TEAM_PLAYERS.reduce((acc, p) => acc + p.overall, 0) / TEAM_PLAYERS.length).toFixed(1)}
            </h3>
            <p className="text-gray-600 text-sm uppercase tracking-wider">Overall Médio</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all shadow-lg border border-gray-200">
            <h3 className="text-4xl font-black text-gray-900 mb-2">{TEAM_PLAYERS.length}</h3>
            <p className="text-gray-600 text-sm uppercase tracking-wider">Jogadores</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all shadow-lg">
            <h3 className="text-4xl font-black text-white mb-2">
              {Math.max(...TEAM_PLAYERS.map(p => p.overall))}
            </h3>
            <p className="text-white/90 text-sm uppercase tracking-wider">Maior Overall</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all shadow-lg border border-gray-200">
            <h3 className="text-4xl font-black text-gray-900 mb-2">4-3-3</h3>
            <p className="text-gray-600 text-sm uppercase tracking-wider">Formação</p>
          </div>
        </div>
      </section>
    </main>
  );
}
