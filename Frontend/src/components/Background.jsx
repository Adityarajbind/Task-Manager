import { useState } from "react";



export default function Background() {

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-[#070814]"
    >
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)'
        }}
      />
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-175 w-175 rounded-full bg-violet-700/10 blur-[180px] animate-blob" />

        <div className="absolute right-[-10%] bottom-[-20%] h-175 w-175 rounded-full bg-blue-600/5 blur-[180px] animate-blob" />

        <div className="absolute left-[40%] top-[40%] h-100 w-100 rounded-full bg-purple-500/10 blur-[120px] animate-blob" />
      </div>



      {/* Center Spotlight */}
      <div className="absolute left-1/2 top-1/2 h-212.5 w-212.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Bento Grid */}
      <div className="absolute inset-0 -z-1">
        <div className="grid h-full w-full grid-cols-8 gap-2">
          {Array.from({ length: 56 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-md border border-white/3 bg-white/1.5 "
            >
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}