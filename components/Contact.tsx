import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
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
              {/* Email Block */}
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-ice/10 border border-ice/20 rounded-xl flex items-center justify-center text-ice group-hover:bg-ice group-hover:text-black transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email us</p>
                  <p className="text-gray-200 font-medium">hello@truelineservices.com</p>
                </div>
              </div>

              {/* Location Block */}
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
            {/* Ice Glow Decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-ice/5 blur-[80px] rounded-full" />
            
            <form className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all placeholder:text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Service Needed</label>
                <div className="relative">
                  <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all appearance-none cursor-pointer">
                    <option>Executive Admin</option>
                    <option>Technical Support</option>
                    <option>Social Media Management</option>
                    <option>Lead Generation</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs font-bold">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-mono">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice focus:ring-1 focus:ring-ice/30 transition-all placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>

              {/* The Ice Button */}
              <button className="group w-full bg-ice hover:bg-white text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(185,255,217,0.3)] active:scale-95">
                <span>Send Inquiry</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}