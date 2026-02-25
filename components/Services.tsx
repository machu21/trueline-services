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
    desc: "Managing your CRMs, Dialer and Marketing Platforms to keep projects on track.",
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
    <section id="services" className="py-24 bg-white relative scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">

          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Tailored Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Modern Enterprises.
            </span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gray-50 border border-gray-100 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-[3] duration-700" />

              <div className="relative z-10">
                {/* Icon Container: Gray to Emerald */}
                <div className="mb-6 w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gray-400 group-hover:text-emerald-600 group-hover:shadow-emerald-100 transition-all duration-300">
                  {service.icon}
                </div>
                
                {/* Title: Dark Gray to Emerald */}
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h4>
                
                {/* Description: Subtle gray for premium feel */}
                <p className="text-gray-500 leading-relaxed text-sm font-light">
                  {service.desc}
                </p>

                {/* Bottom link decoration */}
                <div className="mt-6 flex items-center text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold uppercase tracking-wider">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}