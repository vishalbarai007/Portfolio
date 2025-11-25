"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', number: '', message: '' });
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-muted/30 mt-20">
      {/* Main Contact Section */}
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
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-chart-5 p-3 rounded-lg shrink-0">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div className="pt-2">
                  <p className="text-foreground text-base">vishalbaraiofficial01@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-chart-5 p-3 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div className="pt-2">
                  <p className="text-foreground text-base">Mumbai,Maharashtra</p>
                </div>
              </div>

              {/* Phone */}
              {/* <div className="flex items-start gap-4">
                <div className="bg-chart-5 p-3 rounded-lg shrink-0">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div className="pt-2">
                  <p className="text-foreground text-base">+44 123 777 5401</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:pl-8">
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
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
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="Contact no."
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Contact no.*"
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
{/* 
              <div>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website*"
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div> */}

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  // rows="6"
                  className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-chart-5 hover:bg-chart-5/90 text-foreground font-semibold px-10 py-3.5 rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">VISHAL Signature</h3>
              <p className="text-sm text-muted-foreground">Full Stack • App • Software • Security</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/timeline" className="text-muted-foreground hover:text-primary transition-colors">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/resume" className="text-muted-foreground hover:text-primary transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="/assistant" className="text-muted-foreground hover:text-primary transition-colors">
                    AI Assistant
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vishalbarai007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishalbarai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a> */}
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxwTKPtDWlkVpwFtxBNnvCDrrmWnsZWGZcBSgVknqpPPJsHjLLrGQQHgRStMGRfwMgPZTj" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
            <p>&copy; {currentYear} Vishal Barai Portfolio. All rights reserved.</p>
            {/* <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}