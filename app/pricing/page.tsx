import Navbar from "@/components/Navbar";
import { Check } from "lucide-react"; 
import Link from "next/link"; 
import Image from "next/image";

export default function PricingPage() {
  const tiers = [
    { 
      name: "TLS Start up", 
      price: "$500", 
      subtitle: "Start up fee",
      features: ["1-5 Virtual Assistants", "1 Operations Manager", "Onboarding Support"] 
    },
    { 
      name: "TLS PRO", 
      price: "$1,000", 
      subtitle: "Start up fee",
      features: ["6-10 Virtual Assistants", "1 Operations Manager", "Priority Management"],
      popular: true
    },
    { 
      name: "TLS Executive", 
      price: "$2,000", 
      subtitle: "Start up fee",
      features: ["11-20 Virtual Assistants", "2 Operations Managers", "Scalable Infrastructure"] 
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Pricing background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div> 
      </div>

      <section className="pt-32 pb-20 container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Packages</h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Scale your team efficiently with dedicated Virtual Assistants and professional Operations Management.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {tiers.map((tier) => (
            <div key={tier.name} className={`flex flex-col bg-dark-card border p-8 rounded-2xl transition-all relative ${tier.popular ? 'border-ice' : 'border-white/10'} hover:border-ice/50`}>

              {tier.popular && (
                <div className="absolute top-0 right-0 bg-ice text-black px-4 py-1.5 rounded-bl-xl rounded-tr-xl text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h2 className="text-xl font-bold mb-2">{tier.name}</h2>
              <div className="mb-6">
                <span className="text-4xl font-black text-ice">{tier.price}</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{tier.subtitle}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-400 text-sm">
                    <Check className="w-4 h-4 text-ice mr-2 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <Link 
                href="/consultation" 
                className="block w-full py-3 bg-ice text-black text-center font-bold rounded-lg hover:bg-white transition-all"
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}