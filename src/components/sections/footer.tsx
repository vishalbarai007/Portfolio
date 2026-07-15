"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Loader2 } from 'lucide-react';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Renamed from 'number' for consistency
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setStatus('loading');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <footer className="bg-muted/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Contact me</h2>
              <p className="text-muted-foreground max-w-md">
                I'm committed to processing the information in order to contact you and talk about your project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-chart-5 p-3 rounded-lg shrink-0">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div className="pt-2">
                  <p className="text-foreground text-base">vishalbaraiofficial02@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-chart-5 p-3 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div className="pt-2">
                  <p className="text-foreground text-base">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:pl-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
                  Something went wrong. Please try again later.
                </div>
              )}

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact no. (Optional)"
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-chart-5 hover:bg-chart-5/90 text-foreground font-semibold px-10 py-3.5 rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">VISHAL Signature</h3>
              <p className="text-sm text-muted-foreground">Full Stack • App • Software • Security</p>
            </div>
            
            {/* ... Kept existing navigation links ... */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="/timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</a></li>
                <li><a href="/assistant" className="text-muted-foreground hover:text-primary transition-colors">AI Assistant</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/vishalbarai007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/vishalbarai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:vishalbaraiofficial02@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
            <p>&copy; {currentYear} Vishal Barai Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}