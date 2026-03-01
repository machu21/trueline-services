import Image from "next/image";
import { ShieldCheck, Cpu, Zap, Globe, Receipt, NfcIcon } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Data Security",
      desc: "Strict NDA protocols and secure credential management.",
      icon: <ShieldCheck className="w-6 h-6 text-ice" />,
    },
    {
      title: "AI-Augmented",
      desc: "We leverage AI tools to double the output of every VA.",
      icon: <Cpu className="w-6 h-6 text-ice" />,
    },
    {
      title: "Rapid Onboarding",
      desc: "Go from consultation to active support in 48 hours.",
      icon: <Zap className="w-6 h-6 text-ice" />,
    },
    {
      title: "Global Talent",
      desc: "Access the top 1% of virtual professionals worldwide.",
      icon: <Globe className="w-6 h-6 text-ice" />,
    },
    {
      title: "No Long-Term Contracts",
      desc: "Access the top 1% of virtual professionals worldwide.",
      icon: <Receipt className="w-6 h-6 text-ice" />,
    },
    {
      title: "Centralized Communication & Accountability",
      desc: "Access the top 1% of virtual professionals worldwide.",
      icon: <NfcIcon className="w-6 h-6 text-ice" />,
    },

  ];

  return (
    <section id="about" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Top Section: CEO Image & Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group max-w-md mx-auto lg:mx-0 w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-ice to-transparent opacity-25 blur rounded-2xl group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/mel.png" // Replace with your actual saved filename
                alt="Truline CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-bold text-white">Mel</h4>
              <p className="text-ice font-mono text-sm tracking-widest uppercase">Founder & CEO</p>
            </div>
          </div>

          <div>
            <h2 className="text-ice font-mono text-sm tracking-widest uppercase mb-4 drop-shadow-[0_0_5px_rgba(185,255,217,0.3)]">
              // Why Choose Us?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Reliability is our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white">
                Primary Standard.
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Trueline Services doesn't just provide "help." We provide high-bandwidth operational partners. Our systems are designed to integrate seamlessly into your existing tech stack, from Slack to Salesforce.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We specialize in removing the bottlenecks that prevent founders from focusing on high-level strategy. When your operations are in a "True Line," your business moves faster.
            </p>
          </div>
        </div>

        {/* Bottom Section: Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-ice/[0.03] hover:border-ice/30 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(185,255,217,0.5)] transition-all duration-300">
                {pillar.icon}
              </div>
              <h4 className="text-white font-bold mb-2 group-hover:text-ice transition-colors">
                {pillar.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}