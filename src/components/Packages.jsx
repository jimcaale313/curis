
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Packages = () => {
  const [activeTab, setActiveTab] = useState('social-media');

  const packageCategories = [
    { id: 'social-media', label: 'Social Media' },
    { id: 'web-app', label: 'Web & App' },
    { id: 'branding', label: 'Branding' },
    { id: 'media', label: 'Media Production' },
    { id: 'all-in-one', label: 'All-in-One' },
  ];

  const pricingTiers = {
    'social-media': [
  {
    name: 'Silver',
    price: '$199.9',
    period: '/month',
    features: [
      '10 posts per month',
      '2 videos per month',
      '3 social media management',
      'Monthly report',
    ],
  },
  {
    name: 'Gold',
    price: '$299.9',
    period: '/month',
    popular: true,
    features: [
      '18 posts per month',
      '3 videos per month',
      '3 social media management',
      'Half-monthly report',
      'Paid ads 2 times',
      'Content strategy',
    ],
  },
  {
    name: 'Platinum',
    price: '$599.9',
    period: '/month',
    features: [
      '26 posts per month',
      '5 videos per month',
      '5 social media management',
      '2-day customer reply',
      'weekly reporting',
      'Google SEO & Google Map setup',
      'Advanced content strategy with analysis',
      'Paid ads 2 times',
      'Monthly report',
    ],
  },
],

    'web-app': [
      {
        name: 'Silver',
        price: 'Contact US',
        period: 'one-time',
        features: [
          '5-page website',
          'Responsive design',
          'Basic SEO',
          'Contact form',
          '3 months support',
        ],
      },
      {
        name: 'Gold',
        price: 'Contact US',
        period: 'one-time',
        popular: true,
        features: [
          '10-page website',
          'Custom design',
          'Advanced SEO',
          'CMS integration',
          'E-commerce ready',
          '6 months support',
          'Performance optimization',
        ],
      },
      {
        name: 'Platinum',
        price: 'Contact US',
        period: 'one-time',
        features: [
          'Unlimited pages',
          'Custom web application',
          'Full SEO suite',
          'Advanced integrations',
          'Mobile app included',
          '12 months support',
          'Dedicated development team',
          'AI features integration',
        ],
      },
    ],
    'branding': [
      {
        name: 'Silver',
        price: 'Contact US',
        features: [
          'Logo design (3 concepts)',
          'Brand color palette',
          'Typography selection',
          'Basic brand guidelines',
        ],
      },
      {
        name: 'Gold',
        price: 'Contact US',
        popular: true,
        features: [
          'Logo design (5 concepts)',
          'Complete visual identity',
          'Brand guidelines book',
          'Business card design',
          'Social media templates',
          'Brand strategy session',
        ],
      },
      {
        name: 'Platinum',
        price: 'Contact US',
        features: [
          'Unlimited logo concepts',
          'Full brand ecosystem',
          'Comprehensive guidelines',
          'Marketing collateral',
          'Brand video',
          'Brand positioning strategy',
          'Trademark assistance',
          '6 months brand consulting',
        ],
      },
    ],
    'media': [
      {
        name: 'Silver',
        price: 'Contact US',
        features: [
          '1 video production',
          'Basic editing',
          'Stock music',
          '1080p resolution',
          '2 revision rounds',
        ],
      },
      {
        name: 'Gold',
        price: 'Contact US',
        popular: true,
        features: [
          '3 video productions',
          'Professional editing',
          'Custom music',
          '4K resolution',
          'Unlimited revisions',
          'Motion graphics',
          'Color grading',
        ],
      },
      {
        name: 'Platinum',
        price: 'Contact US',
        features: [
          'Unlimited video productions',
          'Cinematic production',
          'Original soundtrack',
          '8K resolution',
          'Unlimited revisions',
          'Advanced VFX',
          'Professional voice-over',
          'Multi-platform optimization',
        ],
      },
    ],
    'all-in-one': [
      {
        name: 'Silver',
        price: 'Contact US',
        features: [
          'Basic social media',
          'Simple website',
          'Logo design',
          '1 video per month',
          'Monthly strategy call',
        ],
      },
      {
        name: 'Gold',
        price: 'Contact US',
        popular: true,
        features: [
          'Full social media management',
          'Custom website & app',
          'Complete branding',
          '3 videos per month',
          'Weekly strategy calls',
          'Priority support',
          'Quarterly brand review',
        ],
      },
      {
        name: 'Platinum',
        price: 'Contact US',
        
        features: [
          'Enterprise social media',
          'Advanced web applications',
          'Full brand ecosystem',
          'Unlimited video production',
          'Daily strategy support',
          'Dedicated team',
          'AI-powered analytics',
          'White-glove service',
        ],
      },
    ],
  };

  const handleSelectPackage = (packageName) => {
    toast({
      title: "Package Selected! 🎉",
      description: `You've selected the ${packageName} package. Scroll down to contact us!`,
    });
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  };

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #FFEB3B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#FFEB3B] glow-text">Packages</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your business needs
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-5 gap-2 bg-gray-800/50 p-2 rounded-xl mb-12">
            {packageCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-[#FFEB3B] data-[state=active]:text-black font-semibold"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {packageCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {pricingTiers[category.id].map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border ${
                      tier.popular
                        ? 'border-[#FFEB3B] glow-border scale-105'
                        : 'border-gray-700'
                    } hover:border-[#FFEB3B]/50 transition-all duration-300`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 px-4 py-1 bg-[#FFEB3B] text-black text-sm font-bold rounded-full">
                          <Star size={14} fill="currentColor" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-[#FFEB3B]">{tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="text-[#FFEB3B] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handleSelectPackage(tier.name)}
                      className={`w-full ${
                        tier.popular
                          ? 'bg-[#FFEB3B] text-black hover:bg-[#FFEB3B]/90 glow-border'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      } font-semibold`}
                    >
                      Select {tier.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Packages;
  