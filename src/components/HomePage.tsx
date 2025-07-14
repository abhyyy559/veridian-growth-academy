import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    { icon: GraduationCap, title: "Book", description: "Reserve your masterclass spot" },
    { icon: Users, title: "Attend", description: "Join live mentorship sessions" },
    { icon: TrendingUp, title: "Learn", description: "Master proven techniques" },
    { icon: Award, title: "Earn", description: "Start generating income" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transform Your Future with
              <span className="block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Income-Generating Skills
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
              Join thousands who've discovered the path to financial independence 
              through our expert-led masterclasses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" variant="glass" asChild className="text-lg px-8 py-6">
                <Link to="/masterclass">
                  Join the Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        
        {/* Sticky Join Community Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Button size="lg" variant="hero" asChild className="shadow-elegant animate-pulse">
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
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < roadmapSteps.length - 1 && (
                    <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground mt-4 absolute translate-x-16" />
                  )}
                </div>
              ))}
            </div>
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
            Spots for This Week's Mentorship Are Open
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Limited seats available. Don't miss your chance to transform your financial future.
          </p>
          <Button size="lg" variant="hero" asChild className="text-xl px-12 py-6">
            <Link to="/masterclass">
              Book Your Spot Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;