
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do we start working together?',
      answer: 'Simply book a strategy call through our contact form. We\'ll discuss your needs, goals, and how we can help scale your business with our AI-powered solutions.',
    },
    {
      question: 'Do you integrate AI into all your services?',
      answer: 'Yes! AI is at the core of everything we do. From content creation to analytics, we leverage cutting-edge AI technology to deliver smarter, faster, and more effective results.',
    },
    {
      question: 'What about content ownership and rights?',
      answer: 'You own 100% of all content and materials we create for you. We provide full rights transfer upon project completion and payment.',
    },
    {
      question: 'How are project timelines determined?',
      answer: 'Timelines vary based on project scope and complexity. During our initial consultation, we\'ll provide a detailed timeline with milestones and deliverables.',
    },
    {
      question: 'Can you work on-site in Hargeisa?',
      answer: 'Absolutely! We\'re based in Hargeisa and can work on-site with your team. We also serve Somali clients globally through remote collaboration.',
    },
    {
      question: 'How do revisions and feedback work?',
      answer: 'Each package includes a specific number of revision rounds. We work closely with you to ensure the final product exceeds your expectations, with clear feedback loops at every stage.',
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#FFEB3B] glow-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with Curis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl px-6 hover:border-[#FFEB3B]/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#FFEB3B] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
  