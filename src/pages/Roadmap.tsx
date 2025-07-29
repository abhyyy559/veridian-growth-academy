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

      {/* Enhanced Roadmap Steps with Advanced Animations */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/2 right-20 w-32 h-32 bg-accent rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-primary rounded-full animate-float" style={{animationDelay: '6s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-20">
            {roadmapSteps.map((step, index) => (
              <div 
                key={step.step} 
                className="relative opacity-0 translate-y-10 animate-fade-in group"
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Enhanced Connector Line with Gradient */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-24 w-1 h-40 bg-gradient-to-b from-primary via-accent to-primary/30 z-0 rounded-full animate-pulse" style={{animationDelay: `${index * 0.3 + 0.5}s`}}></div>
                )}
                
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Enhanced Step Icon and Number */}
                  <div className="flex-shrink-0 relative z-10">
                    {/* Pulsing Outer Ring */}
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                    
                    {/* Main Step Number Circle */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer">
                      {step.step}
                      <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                    </div>
                    
                    {/* Enhanced Icon Container */}
                    <div className="mt-6 w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center hover:scale-125 transition-all duration-500 border-2 border-primary/10 group-hover:border-primary/30 cursor-pointer">
                      <step.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 text-center">
                      <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                          style={{
                            width: `${((step.step - 1) / 4) * 100}%`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Step Content */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] transform bg-white/90 backdrop-blur-sm relative overflow-hidden group/card">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover/card:border-gradient-to-r group-hover/card:from-primary/20 group-hover/card:to-accent/20 transition-all duration-500"></div>

                      <CardContent className="p-10 relative z-10">
                        <div className="mb-8">
                          <div className="flex items-center gap-6 mb-4">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover/card:scale-105 transition-transform duration-300">
                              {step.title}
                            </h2>
                            <span className="text-sm bg-gradient-to-r from-accent/10 to-primary/10 text-accent px-4 py-2 rounded-full animate-pulse border border-accent/20 font-medium">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl text-muted-foreground mb-6 font-medium">{step.subtitle}</h3>
                          <p className="text-lg leading-relaxed text-gray-700">{step.description}</p>
                        </div>

                        {/* Enhanced Feature Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {step.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-start gap-4 opacity-0 animate-fade-in p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group/feature cursor-pointer"
                              style={{
                                animationDelay: `${(index * 0.3) + (featureIndex * 0.15) + 0.8}s`,
                                animationFillMode: 'forwards'
                              }}
                            >
                              <div className="relative">
                                <CheckCircle className="h-6 w-6 text-accent group-hover/feature:text-primary group-hover/feature:scale-125 transition-all duration-300 mt-0.5 flex-shrink-0" />
                                <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping opacity-0 group-hover/feature:opacity-30"></div>
                              </div>
                              <span className="text-muted-foreground group-hover/feature:text-gray-800 transition-colors duration-300 font-medium leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Step Progress Bar */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>Step {step.step} of 5</span>
                            <span>{Math.round((step.step / 5) * 100)}% Complete</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Timeline */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              What to Expect & When
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              A realistic timeline of your progress milestones.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-accent/5 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                    <div className="text-3xl font-bold text-primary mb-2">Week 1</div>
                    <div className="text-lg font-semibold mb-2">Foundation</div>
                    <p className="text-muted-foreground">Complete masterclass, set up tools, and create your action plan.</p>
                  </div>
                  <div className="text-center opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                    <div className="text-3xl font-bold text-primary mb-2">Week 2-4</div>
                    <div className="text-lg font-semibold mb-2">Implementation</div>
                    <p className="text-muted-foreground">Start executing strategies, get mentor support, see first results.</p>
                  </div>
                  <div className="text-center opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                    <div className="text-3xl font-bold text-primary mb-2">Month 2+</div>
                    <div className="text-lg font-semibold mb-2">Scaling</div>
                    <p className="text-muted-foreground">Optimize and scale your income streams for consistent growth.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Thousands have already taken the first step. Your financial transformation 
            starts with booking your first masterclass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild className="text-lg px-8 py-6 animate-scale-in hover:scale-105 transition-transform">
              <Link to="/masterclass">
                Book a Masterclass
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.2s'}}>
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;