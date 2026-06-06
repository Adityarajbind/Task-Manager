import { useState } from "react";

const cards = [
  { title: "Design System",time:"Today", progress: 75, position: "top-16 left-10" },
  { title: "API Setup",time:"Tommorow", progress: 40, position: "top-65 left-2" },
  { title: "Documentation", time:"Tomorrow", progress: 90, position: "bottom-2 left-8" },
  { title: "Review PR", time:"Today", progress: 20, position: "top-20 right-8" },
  { title: "User Testing", time:"This Week", progress: 55, position: "top-70 right-4" },
  { title: "Production", time:"Next Month", progress: 60, position: "bottom-7 right-8" },
];

export default function AuthBackground() {

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
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-violet-700/30 blur-[180px] animate-[var(--animate-blob)]" />

        <div className="absolute right-[-10%] bottom-[-20%] h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[180px] animate-[var(--animate-blob)]" />

        <div className="absolute left-[40%] top-[40%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] animate-[var(--animate-blob)]" />
      </div>



      {/* Center Spotlight */}
      <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Bento Grid */}
      <div className="absolute inset-0 -z-1">
        <div className="grid h-full w-full grid-cols-8 gap-2">
          {Array.from({ length: 56 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-md border border-white/[0.03] bg-white/[0.015] backdrop-blur-sm"
            >
            </div>
          ))}
        </div>
      </div>

      {/* Floating Glass Cards */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`
            absolute
            ${card.position}
            w-52
            rounded-[20px]
            border
            border-violet-400/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.4)]
            animate-[var(--animate-float)]
            p-4
          `}
          style={{
            animationDelay: `${index * 1.5}s`,
            animationDuration: `${8 + index}s`,
          }}
        >
          {/* Card Glow */}
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-violet-500/5 to-blue-500/5" />

          <div className="relative">
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                Task
              </span>

              <span className="text-xs text-gray-500">{card.time}</span>
            </div>

            <h3 className="text-sm font-medium text-white">
              {card.title}
            </h3>

            <div className="mt-2">
              <div className="mb-2 flex justify-between text-xs text-gray-400">
                <span>Progress</span>
                <span>{card.progress}%</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                  style={{
                    width: `${card.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}