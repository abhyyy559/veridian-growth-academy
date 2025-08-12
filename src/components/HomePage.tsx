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
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-3" asChild>
                  <Link to="/masterclass">
                    Start Earning Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Learn More
                </Button>
              </motion.div>
            </div>
<<<<<<< HEAD
            <div className="relative flex items-center justify-center min-h-[340px]">
              {/* Premium animated hero illustration */}
              <motion.div
                className="relative w-full h-[340px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Glowing animated background */}
                <motion.div
                  className="absolute w-72 h-72 bg-gradient-to-br from-primary/40 to-primary-dark/60 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                {/* Floating coins */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute z-10"
                    style={{
                      left: `${20 + i * 18}%`,
                      top: `${18 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -18 + i * 6, 0],
                      rotate: [0, 12 * (i % 2 === 0 ? 1 : -1), 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5 + i,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="19" cy="19" r="18" fill="#FFD700" stroke="#FBBF24" strokeWidth="2" />
                      <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">₹</text>
                    </svg>
                  </motion.div>
                ))}
                {/* Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute z-20"
                    style={{
                      left: `${10 + i * 13}%`,
                      top: `${10 + (i % 3) * 30}%`,
                    }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2 + i * 0.3,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 0L10.7553 6.24472L17 8.00001L10.7553 9.75529L9 16L7.24472 9.75529L1 8.00001L7.24472 6.24472L9 0Z" fill="#fff" fillOpacity="0.7"/>
                    </svg>
                  </motion.div>
                ))}
                {/* Glowing animated arrow */}
                <motion.div
                  className="relative z-30 flex flex-col items-center"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <motion.div
                    className="text-[5rem] md:text-[6rem] font-bold text-primary drop-shadow-[0_0_32px_rgba(251,191,36,0.5)]"
                    animate={{ scale: [1, 1.18, 1], textShadow: [
                      "0 0 32px #FBBF24AA", "0 0 48px #FBBF24", "0 0 32px #FBBF24AA"
                    ] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  >
                    ↗
                  </motion.div>
                  <motion.div
                    className="mt-2 flex flex-col items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                  >
                    <div className="w-16 h-1 bg-primary rounded" />
                    <div className="w-10 h-1 bg-primary/60 rounded" />
                    <div className="w-20 h-1 bg-primary/30 rounded" />
                  </motion.div>
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                  >
                    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 shadow-lg" asChild>
                      <Link to="/masterclass">
                        Start Now
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
=======
            <div className="relative">
              <div className="hero-gradient rounded-3xl p-8 text-white relative overflow-hidden animate-glow shadow-2xl">
                {/* Enhanced Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
                </div>

                {/* Floating Success Icons */}
                <div className="absolute top-6 left-8 animate-float bg-white/10 rounded-full p-2 backdrop-blur-sm" style={{animationDelay: '0s'}}>
                  <div className="text-xl">💰</div>
                </div>
                <div className="absolute top-12 right-12 animate-float bg-white/15 rounded-full p-2 backdrop-blur-sm" style={{animationDelay: '1.5s'}}>
                  <div className="text-lg">🚀</div>
                </div>
                <div className="absolute bottom-20 right-8 animate-float bg-white/10 rounded-full p-2 backdrop-blur-sm" style={{animationDelay: '3s'}}>
                  <div className="text-xl">⭐</div>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse border border-white/20">
                      ⚡ Live Earnings Tracker
                    </div>
                    <div className="bg-green-400/20 backdrop-blur-sm text-green-100 px-3 py-1 rounded-full text-xs font-medium border border-green-400/30">
                      95% Success Rate
                    </div>
                  </div>
                  
                  {/* Income Growth Visualization */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Monthly Growth</h3>
                      <div className="text-2xl">📊</div>
                    </div>
                    
                    {/* Enhanced Progress Bars */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-white/90 w-16">Month 1</div>
                        <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full animate-[slide-in-right_1.5s_ease-out] shadow-lg" style={{width: '35%'}}></div>
                        </div>
                        <div className="text-sm text-white font-semibold w-12">₹15k</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-white/90 w-16">Month 2</div>
                        <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full animate-[slide-in-right_2s_ease-out] shadow-lg" style={{width: '65%'}}></div>
                        </div>
                        <div className="text-sm text-white font-semibold w-12">₹35k</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-white/90 w-16">Month 3</div>
                        <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-gradient-to-r from-green-400 to-green-200 rounded-full animate-[slide-in-right_2.5s_ease-out] shadow-lg" style={{width: '95%'}}></div>
                        </div>
                        <div className="text-sm text-white font-semibold w-12">₹50k+</div>
                      </div>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-green-200">1000+</div>
                      <div className="text-xs text-white/80">Active Members</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-green-200">24/7</div>
                      <div className="text-xs text-white/80">Support</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-green-400/20 backdrop-blur-sm text-green-100 px-4 py-2 rounded-full text-sm font-medium animate-pulse border border-green-400/30" style={{animationDelay: '1s'}}>
                      🎯 Proven System
                    </div>
                  </div>
                </div>

                {/* Supabase Dashboard Features */}
                <div className="absolute inset-0">
                  {/* Database Status Indicators */}
                  <div className="absolute top-6 right-6 flex flex-col space-y-2">
                    <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-200 font-medium">Database Online</span>
                    </div>
                    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-xs text-blue-200 font-medium">Auth Active</span>
                    </div>
                    <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <span className="text-xs text-purple-200 font-medium">Realtime</span>
                    </div>
                  </div>

                  {/* Supabase Logo Animation */}
                  <div className="absolute top-8 left-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 animate-float">
                      <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Real-time Data Stream */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-white/90 font-medium">⚡ Live Activity</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-4 bg-green-400 rounded animate-pulse"></div>
                          <div className="w-1 h-4 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-4 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-white/70">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          User registered • 2s ago
                        </div>
                        <div className="flex items-center text-xs text-white/70">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          Profile updated • 5s ago
                        </div>
                        <div className="flex items-center text-xs text-white/70">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          Data synced • 8s ago
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Code Snippets */}
                  <div className="absolute top-1/3 right-8 animate-float bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10 font-mono text-xs text-green-300" style={{animationDelay: '1s'}}>
                    <div>supabase.auth</div>
                    <div className="text-white/50">.signIn()</div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-12 animate-float bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10 font-mono text-xs text-blue-300" style={{animationDelay: '2s'}}>
                    <div>supabase.from</div>
                    <div className="text-white/50">('profiles')</div>
                  </div>
                </div>
              </div>
>>>>>>> 954a66a9c9181b771d79883f17b16f684b5113ea
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
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-lg transition-transform hover:scale-105" asChild>
            <Link to="/masterclass">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Veredian Growth?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in your income generation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
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
            <Button variant="accent" size="lg" asChild>
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
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <Button variant="outline" size="lg" asChild>
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
          <Button size="lg" variant="hero" asChild className="text-xl px-12 py-6">
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