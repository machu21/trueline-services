import Navbar from "@/components/Navbar";

export default function ConsultationPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Book a <span className="text-ice">Consultation</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Schedule a 15-minute discovery call to discuss how our VAs can integrate into your operations.
        </p>
        
        {/* Placeholder for Scheduling Embed or Form */}
        <div className="bg-dark-card border border-white/10 p-12 rounded-2xl max-w-3xl mx-auto">
           <p className="text-ice font-mono tracking-widest">// CALENDAR EMBED GOES HERE</p>
        </div>
      </section>
    </main>
  );
}