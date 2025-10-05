"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { Card, CardContent } from "@/components/ui/card";
import SubHeader from "@/components/SubHeader";

export default function ContactPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800  relative overflow-hidden">
      {/* <div className="fixed inset-0 bg-gradient-to-br from-amber-900/10 via-black to-slate-900/20 pointer-events-none" /> */}

      <SubHeader />

      <main className="relative pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Have a question or want to discuss a custom furniture project? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Visit Us Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105 text-center">
              <div className="inline-flex w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="https://maps.app.goo.gl/5veUqc1BvhmEidgf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors cursor-pointer underline"
                >
                  Quilandy Elattery Street
                </a>
              </p>
              <p className="text-gray-400 text-sm">Kozhikode, 673306</p>
              <p className="text-gray-400 text-sm">Kerala</p>
            </div>

            {/* Call Us Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105 text-center">
              <div className="inline-flex w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="tel:+919745671335"
                  className="hover:text-amber-400 transition-colors cursor-pointer underline"
                >
                  +91 9745671335
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="tel:+918086022295"
                  className="hover:text-amber-400 transition-colors cursor-pointer underline"
                >
                  +91 8086022295
                </a>
              </p>
              <p className="text-gray-400 text-sm">Mon-Sat 7AM-9PM</p>
            </div>

            {/* Email Us Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105 text-center">
              <div className="inline-flex w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:hello@royalwood.com"
                  className="hover:text-amber-400 transition-colors cursor-pointer underline"
                >
                  hello@royalwood.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:support@royalwood.com"
                  className="hover:text-amber-400 transition-colors cursor-pointer underline"
                >
                  support@royalwood.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:sales@royalwood.com"
                  className="hover:text-amber-400 transition-colors cursor-pointer underline"
                >
                  sales@royalwood.com
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Send Us a <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Subject</label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Message</label>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-6 text-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-full min-h-[500px] md:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d429.6034650674206!2d75.72421386247498!3d11.431886714389416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d11.432215!2d75.7245287!4m3!3m2!1d11.4322238!2d75.7245468!5e1!3m2!1sen!2sin!4v1759677295521!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: 'brightness(0.4) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Visit Our <span className="text-amber-400">Showroom</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Experience our furniture collection in person.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3 text-gray-300">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Opening Hours</p>
                      <p className="text-xs sm:text-sm">Mon-Fri: 7:00 AM - 3:00 PM</p>
                      <p className="text-xs sm:text-sm">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-xs sm:text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3 text-gray-300">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Live Chat</p>
                      <p className="text-xs sm:text-sm">Available during business hours</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps?q=11.43224592722264,75.7246344596716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-500/50 text-amber-400 cursor-pointer hover:bg-amber-500/10 hover:border-amber-500 lg:w-full text-sm sm:text-base py-2 sm:py-3"
                  >
                    Visit Our Showroom
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-playfair text-white mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-gray-300">Quick answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">What is your return policy?</h3>
                  <p className="text-gray-300">
                    We offer a 30-day return policy for all items in original condition. Custom orders may have different terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">Do you offer custom furniture?</h3>
                  <p className="text-gray-300">
                    Yes! We specialize in custom pieces. Contact us to discuss your specific requirements and get a quote.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">How long does delivery take?</h3>
                  <p className="text-gray-300">
                    Standard delivery is 5-7 business days. Express delivery (2-3 days) and white glove service are also available.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">What warranty do you provide?</h3>
                  <p className="text-gray-300">
                    All our furniture comes with a 5-year warranty covering manufacturing defects and structural issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* <div className="mt-16 rounded-2xl overflow-hidden h-[400px] border border-amber-500/20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                filter: "brightness(0.7) grayscale(0.3)",
              }}
            />
          </div> */}
        </div>
      </main>

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div >
  );
}
