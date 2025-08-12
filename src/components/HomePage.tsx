import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// Custom animated counter hook
function useAnimatedCount(end: number, duration: number, options?: { prefix?: string; suffix?: string; separator?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;
    const step = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
    // eslint-disable-next-line
  }, [end, duration]);
  let display = count.toLocaleString();
  if (options?.prefix) display = options.prefix + display;
  if (options?.suffix) display = display + options.suffix;
  return display;
}
import { 
  Users, 
  Clock, 
  Briefcase, 
  GraduationCap, 
  Star, 
  ArrowRight,
  Target,
  TrendingUp,
  Award
} from "lucide-react";

const HomePage = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expert Mentor Support",
      description: "Get personalized guidance from successful mentors who've been where you want to go."
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Learn at your own pace with sessions that fit your schedule and lifestyle."
    },
    {
      icon: Briefcase,
      title: "Part-time Friendly",
      description: "Perfect for students, homemakers, and anyone looking to earn while learning."
    },
    {
      icon: GraduationCap,
      title: "No Experience Required",
      description: "Start from scratch with our beginner-friendly approach to income generation."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      quote: "From zero to ₹25,000/month in just 3 months! The mentorship changed my life completely.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      quote: "As a college student, this gave me financial independence. Highly recommend!",
      rating: 5
    },
    {
      name: "Anjali Singh",
      quote: "Perfect for homemakers like me. Now I contribute significantly to family income.",
      rating: 5
    },
    {
      name: "Vikash Yadav",
      quote: "The step-by-step guidance made everything so clear. Amazing support system!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      quote: "Finally found a legitimate way to earn online. The mentors are incredibly helpful.",
      rating: 5
    }
  ];

  const roadmapSteps = [
    { icon: Target, title: "Discover", description: "Learn about income opportunities" },
    { icon: GraduationCap, title: "Book", description: "Reserve your masterclass slot" },
    { icon: Users, title: "Attend", description: "Join live mentorship sessions" },
    { icon: TrendingUp, title: "Learn", description: "Master proven techniques" },
    { icon: Award, title: "Earn", description: "Start generating income" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Turn Your <span className="text-primary">Free Time</span>
                <br />
                Into
                <br />
                <span className="inline-block">Part-Time Income</span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Discover proven income opportunities through social media marketing,
                networking, and digital sales. Connect with mentors who guide you to real
                earning potential.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Button size="lg" className="bg-green-600 text-white px-8 py-3" asChild>
                  <Link to="/masterclass">
                    Start Earning Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-green-600 text-white px-8 py-3" >
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              <motion.div 
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  {/* Background Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-primary/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-2/3 w-full h-full max-w-xl max-h-xl bg-primary/5 rounded-full blur-2xl animate-pulse animation-delay-2000" />
                </div>
              </motion.div>

              <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.4 }}
              >
                {/* Enhanced Logo with animations */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Logo glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Main logo container */}
                  <motion.div
                    className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20"
                    initial={{ rotateY: -15 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileHover={{ 
                      rotateY: 5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <motion.img 
                      src="LOGO.jpg"
                      alt="Veredian Growth Logo"
                      className="w-32 h-32 md:w-40 md:h-40 object-contain"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    />
                  </motion.div>

                  {/* Floating particles around logo */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary/60 rounded-full"
                      style={{
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      }}
                      animate={{
                        scale: [0.5, 1, 0.5],
                        opacity: [0.3, 1, 0.3],
                        rotate: [0, 360],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4 + i * 0.5,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">
                {useAnimatedCount(1000, 2)}+
              </div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                ₹{useAnimatedCount(50000, 2.5)}+
              </div>
              <div className="text-gray-600">Avg Monthly Earnings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                {useAnimatedCount(95, 2)}%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
        
        {/* Sticky Join Community Button */}
        <div className="fixed bottom-8 right-8 z-40">
            <Button
            size="lg"
            className="bg-green-600 text-white px-6 py-2 rounded shadow"
            asChild
            >
            <Link to="/masterclass">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-primary/5">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/img/benefits-bg.jpg')" }} // Placeholder image
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Choose <span className="text-primary">Veredian Growth</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive ecosystem designed for your success in the digital economy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                className="h-full"
              >
                <Card className="bg-white/80 backdrop-blur-md border-gray-200/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full overflow-hidden rounded-2xl text-center">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <div className="w-20 h-20 mb-5 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center ring-4 ring-white/50">
                      <benefit.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-xl text-muted-foreground">
              Real people, real results, real transformations.
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 12px 35px rgba(0,0,0,0.15)" }}
              >
                <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center mb-4 justify-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </motion.div>
                    <motion.p
                      className="text-muted-foreground mb-4 italic"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    <motion.p
                      className="font-semibold text-primary"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {testimonial.name}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Button variant="accent" size="lg" className="bg-green-600 text-white" asChild>
              <Link to="/masterclass">Join Them Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Journey to Success
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven 5-step process that transforms beginners into earners.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18
                  }
                }
              }}
            >
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                  className="flex flex-col items-center text-center group relative"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < roadmapSteps.length - 1 && (
                    <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground mt-4 absolute translate-x-16" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="bg-green-600 text-white" asChild>
              <Link to="/roadmap">See Full Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Slots for This Week's Mentorship Are Open
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Limited seats available. Don't miss your chance to transform your financial future.
          </p>
          <Button size="lg" variant="hero" className="bg-green-600 text-white text-xl px-12 py-6" asChild>
            <Link to="/masterclass">
              Book Your Slot Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;