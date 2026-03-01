import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      
      {/* Video Background Container */}
      <div className="absolute inset-0 z-0 bg-black"> {/* Fallback black bg */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Improved Overlay - Higher contrast for "Trueline Results" */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/40" /> {/* Extra darkening layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ice/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-ice uppercase bg-ice/10 border border-ice/20 rounded-full animate-pulse">
          Trusted Virtual Assistance
        </span>

        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white lg:text-8xl">
          Precision Support. Scalable Results <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white drop-shadow-[0_0_20px_rgba(185,255,217,0.4)]">
            The Truline Standard
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 md:text-xl font-light leading-relaxed">
Fuel your business growth with a high-performing virtual assistants combined with the strategic power of ai systems
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center">
          <Link
            href="/consultation"
            className="px-8 py-4 text-lg font-bold text-black transition-all bg-ice rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(185,255,217,0.5)] active:scale-95 inline-block"
          >
            Let's get started
          </Link>

        </div>
      </div>
    </section>
  );
}