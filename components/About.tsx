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
      title: "Flexible Scaling",
      desc: "No long-term contracts; adapt support as you grow.",
      icon: <Receipt className="w-6 h-6 text-ice" />,
    },
    {
      title: "Accountability",
      desc: "Centralized communication and proactive management.",
      icon: <NfcIcon className="w-6 h-6 text-ice" />,
    },
  ];

  const team = [
    { name: "Melanie G.", role: "Founder & CEO", img: "/mel.png" },
    { name: "Marianne A.", role: "Admin & Finance", img: "/marianne.png" },
  ];

  return (
    <section id="about" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Leadership Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="grid grid-cols-2 gap-4">
            {team.map((member) => (
              <div key={member.name} className="relative group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-ice opacity-0 group-hover:opacity-10 transition duration-700 z-10"></div>
                
                {/* Image & Standard Crop */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top scale-100 group-hover:scale-105 transition duration-700 z-0"
                  />
                </div>

                {/* Info & Subtle Fade In */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                  <h4 className="text-xl font-bold text-white group-hover:text-ice transition duration-300">{member.name}</h4>
                  <p className="text-gray-300 font-mono text-[10px] tracking-widest uppercase opacity-80 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pt-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white">
                Choose Us?
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Trueline Services is a family-operated Virtual Assistant company with seasoned experience supporting businesses across the US, UK, and Australia. We specialize in removing the bottlenecks that prevent founders from focusing on high-level strategy.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We hire with heart and train with purpose. Beyond skills, we value initiative and reliability. Every VA we deploy is prepared to contribute immediately, helping your business run smoothly while you focus on growth.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-ice/[0.03] hover:border-ice/30 transition-all duration-300 group"
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