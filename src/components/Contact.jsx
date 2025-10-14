import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyznnoyw"); // Replace with your own Form ID

  if (state.succeeded) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold text-[#FFEB3B]">
          ✅ Message Sent!
        </h2>
        <p className="text-gray-300 mt-4">
          Thanks for reaching out — we’ll reply to your Gmail soon.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xyznnoyw"
        method="POST"
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fullName" className="text-white mb-2 block">
              Full Name *
            </Label>
            <Input
              id="fullName"
              name="fullName"
              required
              className="bg-gray-800 border-gray-700 text-white focus:border-[#FFEB3B]"
            />
          </div>
          <div>
            <Label htmlFor="company" className="text-white mb-2 block">
              Company *
            </Label>
            <Input
              id="company"
              name="company"
              required
              className="bg-gray-800 border-gray-700 text-white focus:border-[#FFEB3B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="role" className="text-white mb-2 block">
              Your Role *
            </Label>
            <Input
              id="role"
              name="role"
              required
              className="bg-gray-800 border-gray-700 text-white focus:border-[#FFEB3B]"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white mb-2 block">
              Phone *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-gray-800 border-gray-700 text-white focus:border-[#FFEB3B]"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-white mb-2 block">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-gray-800 border-gray-700 text-white focus:border-[#FFEB3B]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="service" className="text-white mb-2 block">
              Service Interest *
            </Label>
            <select
              id="service"
              name="service"
              required
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-[#FFEB3B] focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="social-media">Social Media Management</option>
              <option value="branding">Branding & Identity</option>
              <option value="web-app">Web & App Development</option>
              <option value="media">Media Production</option>
              <option value="all-in-one">All-in-One Package</option>
            </select>
          </div>
          <div>
            <Label htmlFor="budget" className="text-white mb-2 block">
              Budget Range *
            </Label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-[#FFEB3B] focus:outline-none"
            >
              <option value="">Select budget range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-plus">$10,000+</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-white mb-2 block">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            className="bg-gray-800 border-gray-700 text-white focus:border-[#FFEB3B]"
            placeholder="Tell us about your project..."
          />
        </div>

        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#FFEB3B] text-black hover:bg-[#FFEB3B]/90 font-semibold text-lg py-6"
        >
          {state.submitting ? "Sending..." : "Request Strategy Call"}
        </Button>
      </form>
    </motion.div>
  );
}
