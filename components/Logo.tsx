import Image from "next/image";

export default function Logo({ className = "h-12" }: { className?: string }) {
    return (
        // Changed from <Link> to <div> to avoid nested anchor tags
        <div className={`flex items-center gap-3 ${className} group select-none`}>
            <div className="relative h-full aspect-square">
                <Image
                    src="/trulinelogo.png"
                    alt="Truline Logo"
                    width={100}
                    height={100}
                    priority
                    className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tighter leading-none italic uppercase text-black">
                    TRULINE
                </span>
                <span className="text-gray-500 font-bold tracking-[0.4em] text-[10px] uppercase leading-tight mt-1">
                    SERVICES
                </span>
            </div>
        </div>
    );
}