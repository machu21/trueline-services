export default function Logo({ className = "h-12" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className} group cursor-pointer select-none`}>
            {/* Optimized SVG Shield */}
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                className="h-full w-auto drop-shadow-[0_0_8px_rgba(185,255,217,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(185,255,217,0.6)] group-hover:scale-105 transition-all duration-500"
            >
                {/* Shield Outline & Gradient Background */}
                <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
                
                <path
                    d="M50 5 L90 22 V55 C90 75 50 95 50 95 C50 95 10 75 10 55 V22 L50 5 Z"
                    fill="#111"
                    stroke="#B9FFD9"
                    strokeWidth="3"
                />
                <path
                    d="M50 5 L90 22 V55 C90 75 50 95 50 95 V5 L50 5 Z"
                    fill="url(#shieldGrad)"
                />

                {/* The "T" and "S" Lettering */}
                <path
                    d="M32 30 H55 M43 30 V65 M35 65 H52"
                    stroke="white"
                    strokeWidth="7"
                    strokeLinecap="square"
                />
                <path
                    d="M58 35 H72 C75 35 75 45 72 45 H62 C59 45 59 55 62 55 H75"
                    stroke="#B9FFD9"
                    strokeWidth="7"
                    strokeLinecap="square"
                />

                {/* The Dynamic Swoosh */}
                <path
                    d="M15 60 Q50 45 85 60"
                    stroke="#B9FFD9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-pulse"
                />
            </svg>

            {/* The Text Branding */}
            <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tighter leading-none italic uppercase text-white">
                    TRULINE
                </span>
                <span className="text-[#B9FFD9] font-bold tracking-[0.4em] text-[10px] uppercase leading-tight mt-1 brightness-150 saturate-150">
                    SERVICES
                </span>
            </div>
        </div>
    );
}