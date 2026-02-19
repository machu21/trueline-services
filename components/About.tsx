import { ShieldCheck, Cpu, Zap, Globe } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Data Security",
      desc: "Strict NDA protocols and secure credential management.",
      // Updated class from text-brand-ice to text-ice
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
  ];

  return (
    <section id="about" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <h2 className="text-ice font-mono text-sm tracking-widest uppercase mb-4 drop-shadow-[0_0_5px_rgba(185,255,217,0.3)]">
              // Why Trueline
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Reliability is our <br /> 
              {/* Updated gradient to use 'ice' to 'white' */}
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

          {/* Right: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="p-6 bg-dark-card border border-white/5 rounded-xl hover:bg-ice/[0.03] hover:border-ice/30 transition-all duration-300 group"
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
      </div>
    </section>
  );
}