"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";

export default function ConsultationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // Get the user's local timezone automatically
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { error } = await supabase
      .from("consultations")
      .insert([{
        full_name: formData.get("name"),
        email: formData.get("email"),
        scheduled_date: formData.get("date"),
        topic: formData.get("topic"),
        timezone: userTimezone, // Send the detected timezone here
      }]);

    if (!error) {
      router.push("/consultation/success");
    } else {
      alert("Error booking: " + error.message);
      setLoading(false);
    }
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6">
            Book a <span className="text-ice">Consultation</span>
          </h1>
          <p className="text-gray-400">
            Schedule a discovery call to discuss how our VAs can integrate into your operations.
          </p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Decor */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-ice/5 blur-[80px] rounded-full" />

          <form onSubmit={handleBooking} className="space-y-6 relative z-10">
            <div>
              <label className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                <User className="w-3 h-3 text-ice" />
                <span>Full Name</span>
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Your full name"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 focus:border-ice outline-none transition-all placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                <Mail className="w-3 h-3 text-ice" />
                <span>Email Address</span>
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="pat@example.com"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 focus:border-ice outline-none transition-all placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                <Calendar className="w-3 h-3 text-ice" />
                <span>Preferred Date & Time</span>
              </label>
              <input
                name="date"
                required
                type="datetime-local"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 focus:border-ice outline-none transition-all text-gray-300 [color-scheme:dark]"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                <span>Your Timezone</span>
              </label>
              <select
                name="timezone"
                defaultValue={Intl.DateTimeFormat().resolvedOptions().timeZone}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 focus:border-ice outline-none transition-all text-gray-300 appearance-none cursor-pointer"
              >
                <option value="UTC">UTC</option>
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Asia/Manila">Philippine Time (PHT)</option>
                {/* Add more as needed or use a mapper */}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                <MessageSquare className="w-3 h-3 text-ice" />
                <span>Primary Goal</span>
              </label>
              <select
                name="topic"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 focus:border-ice outline-none transition-all text-gray-300 appearance-none cursor-pointer"
              >
                <option value="General VA Support">General VA Support</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Technical/Development Support">Technical Support</option>
                <option value="Executive Admin">Executive Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ice hover:bg-white text-black font-bold py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(185,255,217,0.2)] active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Loading..." : "Confirm Booking"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}