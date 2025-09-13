import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { SendEmail } from "@/integrations/Core";
import { AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });
    
    try {
      await SendEmail({
        to: 'rohit.shinde.portfolio@example.com',
        subject: `New Portfolio Message from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Message:
          ${formData.message}
        `,
      });
      
      setFormState({ status: 'success', message: "Thank you for your message! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormState({ status: 'error', message: "Something went wrong. Please try again later." });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rohitshinde045/", color: "text-blue-600 hover:text-blue-700" },
    { icon: Github, href: "https://github.com/iamro045", color: "text-gray-700 hover:text-gray-900 dark:hover:text-white" },
    { icon: Facebook, href: "https://www.facebook.com/people/Rohit-Shinde/pfbid024ptXsJePfRq947NtGXc5TnkeKQsJwtyq9L3Fkaz4RuQFvA9fU3jiSTRbmJVzNzgMl/", color: "text-blue-400 hover:text-blue-500" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">rohitshinde7922@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Nashik, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 80104 24146</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project or just say hello!"
                  required
                  rows={5}
                  className="w-full resize-none bg-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-shadow"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={formState.status === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {formState.status === 'submitting' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            <AnimatePresence>
              {formState.status !== 'idle' && formState.message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4"
                >
                  <Alert variant={formState.status === 'error' ? 'destructive' : 'default'} className={formState.status === 'success' ? 'bg-green-50 border-green-200' : ''}>
                    {formState.status === 'error' && <AlertCircle className="h-4 w-4" />}
                    <AlertTitle>{formState.status === 'success' ? 'Success!' : 'Error'}</AlertTitle>
                    <AlertDescription className={formState.status === 'success' ? 'text-green-800' : ''}>
                      {formState.message}
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}