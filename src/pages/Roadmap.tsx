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
      subtitle: "Reserve Your Spot",
      description: "Secure your seat in the masterclass of your choice. With limited spots available, early booking ensures you don't miss out.",
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
              <div 
                key={step.step} 
                className="relative opacity-0 translate-y-10 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Connector Line */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-primary/30 z-0"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Icon and Number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-elegant animate-scale-in">
                      {step.step}
                    </div>
                    <div className="mt-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] transform">
                      <CardContent className="p-8">
                        <div className="mb-6">
                          <div className="flex items-center gap-4 mb-2">
                            <h2 className="text-3xl font-bold text-primary">{step.title}</h2>
                            <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full animate-pulse">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-xl text-muted-foreground mb-4">{step.subtitle}</h3>
                          <p className="text-lg leading-relaxed">{step.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          {step.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-start gap-3 opacity-0 animate-fade-in"
                              style={{
                                animationDelay: `${(index * 0.2) + (featureIndex * 0.1) + 0.5}s`,
                                animationFillMode: 'forwards'
                              }}
                            >
                              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
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