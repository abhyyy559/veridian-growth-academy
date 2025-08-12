import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ExternalLink } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this suitable for complete beginners?",
      answer: "Absolutely! Our masterclasses are designed specifically for beginners with zero experience. We start from the basics and guide you step-by-step through proven income generation strategies. No prior knowledge or special skills are required."
    },
    {
      question: "How much can I realistically earn?",
      answer: "Earnings vary based on your dedication and implementation. Our students typically see their first income within 2-4 weeks, with many reaching ₹25,000+ monthly within 3 months. However, results depend on consistent effort and following the strategies taught."
    },
    {
      question: "What if I can't attend the live session?",
      answer: "Don't worry! All live masterclasses are recorded and sent to registered participants within 24 hours. You'll also get access to our community group where you can ask questions and get support from mentors and fellow participants."
    },
    {
      question: "Is there any ongoing support after the masterclass?",
      answer: "Yes! You get lifetime access to our exclusive community group where mentors and successful students provide ongoing support. We also conduct monthly follow-up sessions and send regular updates with new strategies and opportunities."
    },
    {
      question: "What's the refund policy?",
      answer: "We will not provide any refund policy."
    },
    {
      question: "Do I need any special tools or software?",
      answer: "Most strategies we teach require only basic tools that are free or very affordable. We'll guide you through setting up everything during the masterclass. You'll mainly need a smartphone/laptop and internet connection."
    },
    {
      question: "How is this different from other online courses?",
      answer: "Unlike pre-recorded courses, our masterclasses are live, interactive sessions with real mentors. You get personalized guidance, can ask questions in real-time, and become part of a supportive community. We focus on practical, currently working strategies rather than outdated theory."
    },
    {
      question: "Can I do this while studying/working full-time?",
      answer: "Absolutely! Our strategies are designed to be part-time friendly. Most of our successful students are either studying or working full-time. The income generation methods we teach can be done in your spare time, even with just 1-2 hours daily."
    },
    {
      question: "Are the strategies legal and legitimate?",
      answer: "Yes, all strategies we teach are 100% legal and legitimate. We focus on skill-based income generation, digital services, and proven business models. We never promote get-rich-quick schemes or anything that could put you at risk."
    },
    {
      question: "What if I have more questions?",
      answer: "We're here to help! You can reach out to us directly via WhatsApp or Instagram. Our team responds quickly and is always happy to clarify any doubts you might have before joining a masterclass."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about 
            our masterclasses, strategies, and support system.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is always ready to help. Get in touch with us directly for 
            personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6" asChild>
              <a href="https://wa.me/919652702916" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Chat on WhatsApp
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="https://instagram.com/verediangrowth" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Message on Instagram
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We typically respond within 2-3 hours during business hours
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background text-center border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back from transforming your financial future. 
            Join thousands who've already taken the leap.
          </p>
          <Button size="lg" variant="hero" className="text-lg px-8 py-6">
            Book Your Masterclass Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;