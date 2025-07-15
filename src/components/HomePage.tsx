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
    { icon: GraduationCap, title: "Book", description: "Reserve your masterclass slot" },
    { icon: Users, title: "Attend", description: "Join live mentorship sessions" },
    { icon: TrendingUp, title: "Learn", description: "Master proven techniques" },
    { icon: Award, title: "Earn", description: "Start generating income" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Turn Your{" "}
                <span className="text-primary">Free Time</span>
                <br />
                Into
                <br />
                Part-Time Income
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Discover proven income opportunities through social media marketing,
                networking, and digital sales. Connect with mentors who guide you to real
                earning potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-3" asChild>
                  <Link to="/masterclass">
                    Start Earning Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                    ⚡ Start Earning
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-6xl font-bold mb-2">↗</div>
                  <div className="space-y-2">
                    <div className="w-12 h-1 bg-primary-light rounded"></div>
                    <div className="w-8 h-1 bg-primary-light/70 rounded"></div>
                    <div className="w-16 h-1 bg-primary-light/50 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                    📈 Proven System
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">₹50k+</div>
              <div className="text-gray-600">Avg Monthly Earnings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">95%</div>
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