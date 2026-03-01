"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import { Calendar, User, Mail, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  async function handleBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const { error } = await supabase
      .from("consultations")
      .insert([{
        full_name: formData.get("name"),
        email: formData.get("email"),
        scheduled_date: formData.get("date"),
        topic: formData.get("topic"),
        timezone: timezone,
      }]);

    if (!error) {
      router.push("/consultation/success");
    } else {
      alert("Error booking: " + error.message);
      setLoading(false);
    }
  }

  return (
    <main className="bg-white min-h-screen text-black font-sans">
      <Navbar />
      
      <section className="pt-40 pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic">
                Strategic <br />
                <span className="text-gray-300">Consultation.</span>
              </h1>
              <p className="text-gray-500 text-lg mb-10 max-w-sm font-light leading-relaxed">
                Schedule a discovery call to discuss how our VAs can integrate into your operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50">
                        <Globe className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Region</span>
                      <span className="text-xs font-bold text-black">{timezone || "Detecting..."}</span>
                    </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]"
            >
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
                    <User className="w-3 h-3 text-black" />
                    <span>Full Name</span>
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 focus:border-ice outline-none transition-all placeholder:text-gray-400 text-black font-semibold"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
                    <Mail className="w-3 h-3 text-black" />
                    <span>Email Address</span>
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="pat@example.com"
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 focus:border-ice outline-none transition-all placeholder:text-gray-400 text-black font-semibold"
                  />
                </div>

                {/* --- THE TIME FIX --- */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
                      <Calendar className="w-3 h-3 text-black" />
                      <span>Preferred Date & Time</span>
                    </label>
                    <input
                      name="date"
                      required
                      type="datetime-local"
                      // Forced text color and scheme for visibility
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 focus:border-ice outline-none transition-all text-black font-semibold block [color-scheme:light]"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
                    <MessageSquare className="w-3 h-3 text-black" />
                    <span>Service Interest</span>
                  </label>
                  <div className="relative">
                    <select
                        name="topic"
                        className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 focus:border-ice outline-none transition-all text-black font-semibold appearance-none cursor-pointer"
                    >
                        <option value="General Enterprise">General Enterprise</option>
                        <option value="Real Estate VA">Real Estate VA</option>
                        <option value="E-Commerce VA">E-Commerce VA</option>
                        <option value="Medical/Dental Healthcare VA">Medical/Dental Healthcare VA</option>
                        <option value="Web/Software Developer">Web/Software Developer</option>
                        <option value="Finance & Bookkeeping VA">Finance & Bookkeeping VA</option>
                        <option value="Others">Others</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-ice hover:bg-black hover:text-white text-black font-black py-5 rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(185,255,217,0.4)] active:scale-[0.98] disabled:opacity-50 uppercase tracking-[0.2em] text-[10px]"
                >
                  {loading ? "Processing..." : "Confirm Booking"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}