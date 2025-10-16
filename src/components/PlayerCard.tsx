import Image from "next/image";
import { Player } from "@/types/player";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="relative w-48 h-[340px]">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 rounded-2xl shadow-2xl transform transition-transform hover:scale-105 border-2 border-yellow-400 overflow-hidden">
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-300 to-transparent transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-yellow-800 to-transparent"></div>
        </div>

        <div className="relative p-2.5 flex justify-between items-start">
          <div className="text-black">
            <div className="text-3xl font-black leading-none drop-shadow-md">{player.overall}</div>
            <div className="text-xs font-bold uppercase tracking-wider">{player.position}</div>
          </div>
          {player.overall >= 85 && (
            <div className="text-2xl drop-shadow-md">⭐</div>
          )}
        </div>

        <div className="relative h-40 flex items-center justify-center px-2 mb-2">
          <div className="relative w-full h-full">
            <Image
              src={`/players/cards/${player.name.toLowerCase()}.png`}
              alt={player.name}
              fill
              className="object-contain drop-shadow-xl"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
        </div>

        <div className="relative px-3 text-center mb-2">
          <div className="bg-black/80 rounded-lg py-1.5 px-2">
            <h3 className="text-sm font-black text-yellow-400 uppercase tracking-tight">
              {player.name}
            </h3>
            {player.name === "Oracio" && (
              <p className="text-[10px] text-yellow-300 font-bold">#10</p>
            )}
          </div>
        </div>

        <div className="relative px-2.5 pb-2.5">
          <div className="grid grid-cols-3 gap-1.5 text-black font-bold text-xs">
            <div className="text-center">
              <div className="text-[10px] opacity-70">PAC</div>
              <div className="text-sm font-black">{player.pace}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] opacity-70">SHO</div>
              <div className="text-sm font-black">{player.shooting}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] opacity-70">PAS</div>
              <div className="text-sm font-black">{player.passing}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] opacity-70">DRI</div>
              <div className="text-sm font-black">{player.dribbling}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] opacity-70">DEF</div>
              <div className="text-sm font-black">{player.defending}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] opacity-70">PHY</div>
              <div className="text-sm font-black">{player.physical}</div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-transparent to-yellow-800/20 pointer-events-none"></div>
      </div>
    </div>
  );
}