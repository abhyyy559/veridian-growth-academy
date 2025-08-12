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
  CheckCircle,
  Star,
  Award,
  Target,
  Zap,
  Clock,
  DollarSign,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [counters, setCounters] = useState({ students: 0, success: 0, income: 0 });
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Animated counter effect
  useEffect(() => {
    if (isHeroInView) {
      const targets = { students: 15000, success: 94, income: 50000 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounters({
          students: Math.floor(targets.students * easeOut),
          success: Math.floor(targets.success * easeOut),
          income: Math.floor(targets.income * easeOut)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isHeroInView]);

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
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0
            }}
            animate={{ 
              y: [null, -100, null],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-gradient py-20 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="h-12 w-12 text-accent-light mx-auto mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Journey to Financial Freedom
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Follow our proven 5-step roadmap that has helped thousands transform 
              from complete beginners to successful income generators.
            </motion.p>
          </motion.div>

          {/* Animated Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div 
              className="bg-primary/10 text-white backdrop-blur-sm rounded-xl p-6 border border-primary/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                key={counters.students}
              >
                {counters.students.toLocaleString()}+
              </motion.div>
              <div className="text-sm opacity-90">Students Transformed</div>
            </motion.div>
            <motion.div 
              className="bg-primary/10 text-white backdrop-blur-sm rounded-xl p-6 border border-primary/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                key={counters.success}
              >
                {counters.success}%
              </motion.div>
              <div className="text-sm opacity-90">Success Rate</div>
            </motion.div>
            <motion.div 
              className="bg-primary/10 text-white backdrop-blur-sm rounded-xl p-6 border border-primary/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                key={counters.income}
              >
                ${counters.income.toLocaleString()}
              </motion.div>
              <div className="text-sm opacity-90">Average Monthly Income</div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-lg text-white bg-primary/10 backdrop-blur-sm rounded-xl p-6 inline-block border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="inline h-5 w-5 mr-2" />
            Average time to first income: <span className="font-bold text-accent-light">2-4 weeks</span>
          </motion.div>
        </div>
      </section>

      {/* Interactive Roadmap Steps */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Success Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five proven steps that transform beginners into successful income generators
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {roadmapSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-16 last:mb-0"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Step Content */}
                  <motion.div 
                    className="flex-1 lg:max-w-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`border-2 transition-all duration-500 hover:shadow-2xl ${
                      activeStep === index 
                        ? 'border-primary shadow-lg bg-primary/5' 
                        : 'border-muted hover:border-primary/50'
                    }`}>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                              activeStep === index 
                                ? 'bg-primary text-white scale-110' 
                                : 'bg-primary/10 text-primary'
                            }`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <step.icon className="h-8 w-8" />
                          </motion.div>
                          <div>
                            <div className="text-sm font-medium text-primary mb-1">
                              Step {step.step}
                            </div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                            <Clock className="h-4 w-4" />
                            Duration: {step.duration}
                          </div>
                          <div className="space-y-2">
                            {step.features.map((feature, featureIndex) => (
                              <motion.div 
                                key={featureIndex}
                                className="flex items-center gap-2 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Animated Step Number */}
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.div 
                      className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl font-bold transition-all duration-500 ${
                        activeStep === index
                          ? 'border-primary bg-primary text-white scale-125'
                          : 'border-muted bg-background text-muted-foreground'
                      }`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {step.step}
                    </motion.div>
                    
                    {/* Connecting Line */}
                    {index < roadmapSteps.length - 1 && (
                      <motion.div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary to-muted"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Success Timeline */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Success Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A realistic roadmap of milestones and achievements you can expect
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  period: "Week 1",
                  title: "Foundation",
                  icon: Target,
                  description: "Complete masterclass, set up tools, and create your action plan.",
                  achievements: ["Masterclass completed", "Tools configured", "Action plan created", "Community access"]
                },
                {
                  period: "Week 2-4",
                  title: "Implementation", 
                  icon: Zap,
                  description: "Start executing strategies, get mentor support, see first results.",
                  achievements: ["First income generated", "Mentor guidance", "Strategy refinement", "Initial success"]
                },
                {
                  period: "Month 2+",
                  title: "Scaling",
                  icon: TrendingUp,
                  description: "Optimize and scale your income streams for consistent growth.",
                  achievements: ["Consistent income", "Multiple streams", "Advanced strategies", "Financial freedom"]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <Card className="h-full border-2 border-transparent hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <motion.div 
                        className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6 mx-auto"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <phase.icon className="h-10 w-10 text-primary" />
                      </motion.div>
                      
                      <div className="text-center mb-6">
                        <motion.div 
                          className="text-3xl font-bold text-white mb-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          {phase.period}
                        </motion.div>
                        <div className="text-xl font-semibold mb-3">{phase.title}</div>
                        <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                      </div>
                      
                      <div className="space-y-3">
                        {phase.achievements.map((achievement, achievementIndex) => (
                          <motion.div 
                            key={achievementIndex}
                            className="flex items-center gap-3 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 + 0.3 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Award className="h-4 w-4 text-accent flex-shrink-0" />
                            </motion.div>
                            <span className="group-hover:text-primary transition-colors">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Connecting Arrow */}
                  {index < 2 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real people who followed our roadmap
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Marketing Professional",
                income: "$8,500/month",
                timeframe: "3 months",
                story: "From zero to $8.5K monthly income through digital marketing strategies learned in the masterclass."
              },
              {
                name: "Michael Rodriguez", 
                role: "College Student",
                income: "$4,200/month",
                timeframe: "6 weeks",
                story: "Started earning while studying by implementing e-commerce strategies from the program."
              },
              {
                name: "Jennifer Park",
                role: "Stay-at-home Mom",
                income: "$6,800/month",
                timeframe: "2 months",
                story: "Built a successful online business while managing family responsibilities."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-muted hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{story.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{story.name}</h4>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="font-bold text-green-600">{story.income}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{story.timeframe}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      "{story.story}"
                    </p>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: starIndex * 0.1 + 0.5 }}
                        >
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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