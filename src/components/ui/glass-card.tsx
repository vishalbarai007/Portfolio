"use client";

import React from "react";

export default function GlassCard({
    children,
    className = "",
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`
        relative w-full h-full rounded-[20px]
        bg-[rgba(255,255,255,0.15)]        
        backdrop-blur-[40px]
        border border-[rgba(255,255,255,0.4)]
        shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(255,255,255,0.2),inset_0_0_12px_6px_rgba(255,255,255,0.3)]
        overflow-hidden
        ${className}
      `}
            style={{
                maskImage:
                    "radial-gradient(70px 60% at right, transparent calc(100% - 1px), black)",
                WebkitMaskImage:
                    "radial-gradient(70px 60% at right, transparent calc(100% - 1px), black)",
            }}
        >
            {/* Enhanced Top Shine with gradient */}
            <span
                className="
          pointer-events-none absolute inset-x-0 top-0 h-[2px]
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9)_20%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0.9)_80%,transparent)]
        "
            />

            {/* Enhanced Left Shine */}
            <span
                className="
          pointer-events-none absolute left-0 top-0 w-[2px] h-full
          bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_30%,transparent_70%,rgba(255,255,255,0.4)_100%)]
        "
            />

            {/* Bottom Shine (new) */}
            <span
                className="
          pointer-events-none absolute inset-x-0 bottom-0 h-[1px]
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.3)_70%,transparent)]
        "
            />

            {/* Right Shine (new) */}
            <span
                className="
          pointer-events-none absolute right-0 top-0 w-[1px] h-full
          bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,transparent_40%,rgba(255,255,255,0.3)_100%)]
        "
            />

            {/* Corner Glow - Top Left */}
            <span
                className="
          pointer-events-none absolute top-0 left-0 w-[80px] h-[80px]
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_70%)]
        "
            />

            {/* Corner Glow - Top Right */}
            <span
                className="
          pointer-events-none absolute top-0 right-0 w-[60px] h-[60px]
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)]
        "
            />

            {/* Corner Glow - Bottom Left */}
            <span
                className="
          pointer-events-none absolute bottom-0 left-0 w-[60px] h-[60px]
          bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.25),transparent_70%)]
        "
            />

            {/* Subtle inner glow around edges */}
            <span
                className="
          pointer-events-none absolute inset-[2px] rounded-[18px]
          bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.08)_100%)]
        "
            />

            {/* Refraction effect */}
            <span
                className="
          pointer-events-none absolute inset-0 rounded-[20px]
          bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.2),transparent_50%)]
        "
            />

            {children}
        </div>
    );
}

// // Demo component to showcase the glass effect
// function Demo() {
//     return (
//         <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8">
//             <GlassCard className="w-[400px] h-[300px] p-8">
//                 <div className="relative z-10 flex flex-col justify-center h-full">
//                     <h2 className="text-white text-3xl font-bold mb-4">
//                         Glassy Card
//                     </h2>
//                     <p className="text-white/90 text-lg">
//                         Enhanced glass morphism effect with natural-looking edges and realistic light refraction.
//                     </p>
//                 </div>
//             </GlassCard>
//         </div>
//     );
// }