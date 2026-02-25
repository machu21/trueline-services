import Navbar from "@/components/Navbar";
import { Check, Link as LinkIcon } from "lucide-react"; // Rename the icon
import Link from "next/link"; // Import the actual Next.js Link component

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "$499", features: ["20 Hours/mo", "Executive Admin", "Email Support"] },
    { name: "Professional", price: "$999", features: ["40 Hours/mo", "Technical Support", "Project Ops"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited Support", "Full Team Integration", "Dedicated PM"] },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-dark-card border border-white/10 p-8 rounded-2xl hover:border-ice/50 transition-all">
              <h2 className="text-xl font-bold text-white mb-2">{tier.name}</h2>
              <p className="text-4xl font-black text-ice mb-6">{tier.price}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-400 text-sm">
                    <Check className="w-4 h-4 text-ice mr-2" /> {f}
                  </li>
                ))}
              </ul>
              {/* Now this uses the Next.js Link component correctly */}
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