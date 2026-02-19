export default function Logo({ className = "h-12" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className} group cursor-pointer select-none`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                className="h-full w-auto drop-shadow-[0_0_8px_rgba(185,255,217,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(185,255,217,0.6)] transition-all duration-500"
            >
                {/* Shield Background */}
                <path
                    d="M50 5L10 25V75L50 95L90 75V25L50 5Z"
                    fill="#050505"
                    stroke="#B9FFD9"
                    strokeWidth="3.5"
                />
                {/* The 'T' & 'S' - Sharp White */}
                <path
                    d="M30 35H70M50 35V65M40 65H60"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                {/* The Swoosh - Animated Ice Green */}
                <path
                    d="M25 55C35 45 65 45 75 55"
                    stroke="#B9FFD9"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-pulse"
                />
            </svg>

            <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tighter leading-none italic uppercase text-white">
                    TRUELINE
                </span>

                {/* Using an arbitrary hex value here to bypass any config issues */}
                <span className="text-[#B9FFD9] font-bold tracking-[0.4em] text-[10px] uppercase leading-tight mt-1 brightness-150 saturate-150">
                    SERVICES
                </span>
            </div>
        </div>
    );
}