import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Calendar, 
  Users, 
  BookOpen, 
  TrendingUp, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion } from 'framer-motion';

const Roadmap = () => {
  const roadmapSteps = [
    {
      step: 1,
      icon: Search,
      title: "Discover",
      subtitle: "Explore Opportunities",
      description: "Browse our curated masterclasses and discover income generation strategies that align with your skills, interests, and availability.",
      duration: "5-10 minutes",
      features: [
        "Compare different income strategies",
        "Read success stories from our community",
        "Understand time commitments and potential earnings",
        "Get personalized recommendations"
      ]
    },
    {
      step: 2,
      icon: Calendar,
      title: "Book",
      subtitle: "Reserve Your Slot",
      description: "Secure your seat in the masterclass of your choice. With limited slots available, early booking ensures you don't miss out.",
      duration: "2-3 minutes",
      features: [
        "Choose your preferred date and time",
        "Register with your details first",
        "Apply coupon codes for discounts",
        "Secure payment via trusted gateways"
      ]
    },
    {
      step: 3,
      icon: Users,
      title: "Attend",
      subtitle: "Join Live Sessions",
      description: "Participate in interactive, live masterclasses where you'll learn directly from successful mentors and connect with like-minded individuals.",
      duration: "2-3 hours",
      features: [
        "Live interaction with expert mentors",
        "Q&A sessions for personalized guidance",
        "Networking with fellow participants",
        "Real-time doubt resolution"
      ]
    },
    {
      step: 4,
      icon: BookOpen,
      title: "Learn",
      subtitle: "Master the Techniques",
      description: "Absorb proven strategies, practical techniques, and insider knowledge that successful earners use to generate consistent income.",
      duration: "Ongoing",
      features: [
        "Step-by-step implementation guides",
        "Access to exclusive resources and tools",
        "Video recordings for future reference",
        "Community support and mentorship"
      ]
    },
    {
      step: 5,
      icon: TrendingUp,
      title: "Earn",
      subtitle: "Generate Income",
      description: "Apply what you've learned to start generating income. Our continued support ensures you stay on track and scale your earnings.",
      duration: "Lifelong",
      features: [
        "Implementation support from mentors",
        "Progress tracking and optimization",
        "Advanced strategies for scaling",
        "Community of successful earners"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Your Journey to Financial Freedom
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Follow our proven 5-step roadmap that has helped thousands transform 
            from complete beginners to successful income generators.
          </p>
          <div className="text-lg bg-white/10 rounded-lg p-4 inline-block animate-scale-in">
            Average time to first income: <span className="font-bold text-accent-light">2-4 weeks</span>
          </div>
        </div>
      </section>

      {/* Roadmap Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {roadmapSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center group">
                  <motion.div 
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <step.icon className="h-10 w-10 text-primary" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold mb-2"
                    whileHover={{ color: '#2563eb' }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < roadmapSteps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 right-0 w-32 h-1 bg-muted"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Timeline */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What to Expect & When
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A realistic timeline of your progress milestones.
          </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-accent/5 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">Week 1</div>
                    <div className="text-lg font-semibold mb-2">Foundation</div>
                    <p className="text-muted-foreground">Complete masterclass, set up tools, and create your action plan.</p>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">Week 2-4</div>
                    <div className="text-lg font-semibold mb-2">Implementation</div>
                    <p className="text-muted-foreground">Start executing strategies, get mentor support, see first results.</p>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">Month 2+</div>
                    <div className="text-lg font-semibold mb-2">Scaling</div>
                    <p className="text-muted-foreground">Optimize and scale your income streams for consistent growth.</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Thousands have already taken the first step. Your financial transformation 
            starts with booking your first masterclass.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button size="lg" variant="hero" asChild className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Link to="/masterclass">
                  Book a Masterclass
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;