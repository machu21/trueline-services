import { 
  UserCheck, 
  BarChart3, 
  Settings, 
  Mail, 
  Layers, 
  Shield 
} from "lucide-react";

const services = [
  {
    title: "Executive Admin",
    desc: "Elite calendar management, travel coordination, and executive lifestyle support.",
    icon: <UserCheck className="w-8 h-8" />,
  },
  {
    title: "Lead Generation",
    desc: "Data-driven prospecting and CRM management to fuel your sales pipeline.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Technical Support",
    desc: "Website maintenance, automation setup, and software troubleshooting.",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    title: "Email Marketing",
    desc: "Newsletter management and cold outreach campaigns that convert.",
    icon: <Mail className="w-8 h-8" />,
  },
  {
    title: "Project Ops",
    desc: "Managing your Trello, Asana, or ClickUp boards to keep projects on track.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: "Data Security",
    desc: "Highly trained VAs following strict security protocols for your sensitive info.",
    icon: <Shield className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          {/* Changed text-green-500 -> text-ice */}
          <h2 className="text-ice font-mono text-sm tracking-widest uppercase mb-4 drop-shadow-[0_0_5px_rgba(185,255,217,0.3)]">
            // Our Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tailored Solutions for <br />
            {/* Added a subtle gradient to the sub-heading */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200">Modern Enterprises.</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-dark-card border border-white/5 rounded-2xl transition-all duration-500 hover:border-ice/30 hover:-translate-y-2 overflow-hidden"
            >
              {/* Ice Glow Background on Hover */}
              <div className="absolute inset-0 bg-ice/0 group-hover:bg-ice/[0.02] transition-colors rounded-2xl" />
              
              <div className="relative z-10">
                {/* Icon Glow using Ice RGB values */}
                <div className="mb-6 text-gray-500 group-hover:text-ice group-hover:drop-shadow-[0_0_12px_rgba(185,255,217,0.6)] transition-all duration-300">
                  {service.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-ice transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-500 leading-relaxed text-sm font-light">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}