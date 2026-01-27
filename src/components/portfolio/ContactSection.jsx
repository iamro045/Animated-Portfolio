import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Facebook,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    status: "idle", // idle | submitting | success | error
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    // ✅ TEMPORARY SUCCESS SIMULATION (safe for portfolio)
    setTimeout(() => {
      setFormState({
        status: "success",
        message: "Thank you for your message! I’ll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rohitshinde045/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: Github,
      href: "https://github.com/iamro045",
      color: "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/people/Rohit-Shinde/",
      color: "text-blue-500 hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 pt-20 pb-12 bg-white dark:bg-gray-900">

    
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just
            talking tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Info icon={Mail} label="Email" value="rohitshinde7922@gmail.com" />
              <Info icon={MapPin} label="Location" value="Nashik, India" />
              <Info icon={Phone} label="Phone" value="+91 80104 24146" />
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg
                                  flex items-center justify-center transition-colors
                                  ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              <InputField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <Textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    handleInputChange("message", e.target.value)
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={formState.status === "submitting"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {formState.status === "submitting" ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>

            <AnimatePresence>
              {formState.status !== "idle" && formState.message && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4"
                >
                  <Alert
                    variant={
                      formState.status === "error" ? "destructive" : "default"
                    }
                  >
                    {formState.status === "error" && (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {formState.status === "success" ? "Success!" : "Error"}
                    </AlertTitle>
                    <AlertDescription>
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

/* ---------- SMALL COMPONENTS ---------- */

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    </div>
    <div>
      <p className="font-medium text-gray-900 dark:text-white">{label}</p>
      <p className="text-gray-600 dark:text-gray-400">{value}</p>
    </div>
  </div>
);

const InputField = ({ label, type = "text", value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <Input type={type} value={value} onChange={onChange} required />
  </div>
);
