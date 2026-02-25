"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Phone } from "lucide-react";
import { supabase } from "@/lib/supabase"; // Ensure this matches your lib folder structure

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const { error: supabaseError } = await supabase
      .from("inquiries")
      .insert([
        {
          full_name: formData.get("full_name"),
          email: formData.get("email"),
          service_needed: formData.get("service"),
          message: formData.get("message"),
        },
      ]);

    if (supabaseError) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Text Content */}
          <div>
            <h2 className="text-ice font-mono text-sm tracking-widest uppercase mb-4 drop-shadow-[0_0_5px_rgba(185,255,217,0.3)]">
              // Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white">Scale?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              Tell us about your business needs. Our team will match you with a virtual assistant specifically trained for your industry.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-ice/10 border border-ice/20 rounded-xl flex items-center justify-center text-ice group-hover:bg-ice group-hover:text-black transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email us</p>
                  <p className="text-gray-200 font-medium">hello@truelineservices.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-ice/10 border border-ice/20 rounded-xl flex items-center justify-center text-ice group-hover:bg-ice group-hover:text-black transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Contact</p>
                  <p className="text-gray-200 font-medium">123123123</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-ice/10 border border-ice/20 rounded-xl flex items-center justify-center text-ice group-hover:bg-ice group-hover:text-black transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-gray-200 font-medium">Remote / Global Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-dark-card p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-ice/5 blur-[80px] rounded-full" />

            {submitted ? (
              <div className="relative z-10 py-12 text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-ice mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">We&apos;ll be in touch with you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-ice text-sm font-mono uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Full Name</label>
                    <input
                      name="full_name"
                      type="text"
                      required
                      placeholder="You full name"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all placeholder:text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your-email@company.com"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all placeholder:text-gray-700"
                    />
                  </div>


                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Service Needed</label>
                  <div className="relative">
                    <select name="service" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all appearance-none cursor-pointer">
                      <option value="Executive Admin">Executive Admin</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Lead Generation">Lead Generation</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs font-bold">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all placeholder:text-gray-700 resize-none"
                  ></textarea>
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-ice hover:bg-white text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(185,255,217,0.3)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Processing..." : "Send Inquiry"}</span>
                  {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}