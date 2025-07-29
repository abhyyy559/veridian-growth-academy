import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Tag,
  User,
  Mail,
  Phone
} from "lucide-react";

const Masterclass = () => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'register' | 'payment'>('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Single masterclass data with your new description
  const masterclasses = [
    {
      id: 1,
      title: "Unlock Your Income Potential",
      subtitle: "6 Days, 90 Minutes a Day",
      description: "Start earning online with a simple, proven plan — no experience needed. Join this 6-day live masterclass (90 minutes/day) and discover the easiest digital income paths for beginners, how to find your earning potential and take action, and a simple, proven framework to start making money online. No experience or special skills needed—just a willingness to learn. Limited seats. Register now to secure your spot!",
      date: "2025-08-01",
      time: "7:00 PM to 8:30 PM (IST)",
      duration: "6 Days (90 min/day)",
      format: "Live Interactive Session",
      paymentLink: "#",
      image: "/api/placeholder/400/250",
      slots: 50,
      active: true,
      learningTopics: [
        "Beginner-friendly digital income paths",
        "Day-by-day roadmap for clarity and action", 
        "Identify hidden earning potential in your daily life",
        "Framework to start generating income online",
        "Consistency and growth with limited time/resources"
      ],
      agenda: [
        { day: "Day 1", topic: "Clarity & Mindset for Earning" },
        { day: "Day 2", topic: "Digital Income Paths Overview" },
        { day: "Day 3", topic: "Finding Your Earning Niche" },
        { day: "Day 4", topic: "Building Your First Income Stream" },
        { day: "Day 5", topic: "Scaling & Consistency" },
        { day: "Day 6", topic: "Action Plan & Q&A" }
      ],
      included: [
        "6-day live masterclass (Zoom)",
        "90 minutes per day, 100% live",
        "Actionable earning strategy by Day 6"
      ]
    }
  ];

  const outcomes = [
    {
      icon: Target,
      title: "Clear Income Roadmap",
      description: "Get a step-by-step plan tailored to your situation and goals."
    },
    {
      icon: TrendingUp,
      title: "Proven Strategies",
      description: "Learn methods that are currently working for our successful students."
    },
    {
      icon: Users,
      title: "Mentor Support",
      description: "Direct access to mentors for guidance and doubt resolution."
    },
    {
      icon: Award,
      title: "Implementation Guide",
      description: "Practical tools and templates to start implementing immediately."
    }
  ];

  const applyCoupon = (masterclassId: number) => {
    // Mock coupon application (will integrate with Razorpay later)
    if (couponCode.toLowerCase() === "welcome50") {
      setAppliedCoupon("welcome50");
      // Apply 50% discount logic here
    }
  };

  const calculateDiscountedPrice = (originalPrice: number) => {
    if (appliedCoupon === "welcome50") {
      return Math.round(originalPrice * 0.5);
    }
    return originalPrice;
  };

  const handleRegistration = (masterclassId: number) => {
    if (formData.name && formData.email && formData.phone) {
      setCurrentStep('payment');
    }
  };

  const renderRegistrationForm = (masterclass: any) => (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">Registration Details</h4>
      <div className="space-y-3">
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="pl-10"
          />
        </div>
      </div>
      <Button 
        className="w-full" 
        size="lg" 
        variant="hero"
        onClick={() => handleRegistration(masterclass.id)}
        disabled={!formData.name || !formData.email || !formData.phone}
      >
        Proceed to Payment
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );

  const renderPaymentForm = (masterclass: any) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Payment</h4>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setCurrentStep('register')}
        >
          Back to Registration
        </Button>
      </div>
      
      {/* Coupon Section */}
      <div className="border rounded-lg p-4 bg-muted/50">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="h-4 w-4 text-accent" />
          <span className="font-medium">Have a coupon code?</span>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1"
          />
          <Button 
            variant="outline" 
            onClick={() => applyCoupon(masterclass.id)}
            disabled={!couponCode.trim()}
          >
            Apply
          </Button>
        </div>
        {appliedCoupon && (
          <div className="mt-2 text-sm text-accent">
            ✓ Coupon applied! You saved ₹{masterclass.price - calculateDiscountedPrice(masterclass.price)}
          </div>
        )}
      </div>

      <div className="bg-accent/5 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Amount:</span>
          <span className="text-2xl font-bold text-primary">
            ₹{calculateDiscountedPrice(masterclass.price)}
          </span>
        </div>
      </div>

      <Button className="w-full" size="lg" variant="hero">
        Pay Now - ₹{calculateDiscountedPrice(masterclass.price)}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Secure payment via Razorpay • Full refund if not satisfied
      </p>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Intro Section */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Live Masterclasses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our expert-led sessions and discover proven income generation strategies. 
              Each masterclass is limited to ensure personalized attention and maximum learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Limited Seats
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Live Interaction
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Single Enhanced Masterclass Card */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {masterclasses.map((masterclass) => (
              <Card key={masterclass.id} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/95 backdrop-blur-sm relative overflow-hidden group animate-scale-in">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                
                <CardHeader className="relative z-10 p-8">
                  <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm font-medium animate-pulse">
                        <Users className="h-4 w-4 mr-1" />
                        Only {masterclass.slots} slots left
                      </Badge>
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                        ✨ FREE Registration
                      </Badge>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 px-4 py-2 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {masterclass.duration}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                      {masterclass.title}
                    </CardTitle>
                    <p className="text-xl text-primary font-semibold">{masterclass.subtitle}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8 p-8 relative z-10">
                  <p className="text-lg text-muted-foreground leading-relaxed">{masterclass.description}</p>
                  
                  {/* Enhanced Date and Time Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {new Date(masterclass.date).toLocaleDateString('en-IN', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-sm text-muted-foreground">{masterclass.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{masterclass.format}</div>
                        <div className="text-sm text-muted-foreground">Interactive & Live</div>
                      </div>
                    </div>
                  </div>

                  {/* Learning Topics Preview */}
                  {masterclass.learningTopics && (
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-primary">What You'll Learn:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {masterclass.learningTopics.slice(0, 4).map((topic, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex-1 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      asChild
                    >
                      <Link to={`/masterclass/${masterclass.id}`}>
                        View Full Details
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link to={`/masterclass/${masterclass.id}`}>
                        Register FREE Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-100 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>No experience needed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>100% Live & Interactive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Action plan by Day 6</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll Walk Away With
            </h2>
            <p className="text-xl text-muted-foreground">
              Every masterclass is designed to give you immediate, actionable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <outcome.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{outcome.title}</h3>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Important Notes</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>• <strong>Limited Seats:</strong> Each masterclass is restricted to ensure quality interaction and personalized guidance.</p>
                  <p>• <strong>Live Session:</strong> All masterclasses are conducted live.</p>
                  <p>• <strong>Interactive Format:</strong> Ask questions, get personalized advice, and connect with like-minded individuals.</p>
                  <p>• <strong>Follow-up Support:</strong> Get access to our community group for continued support and networking.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Income Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait for the perfect moment. The perfect moment is now. 
            Join thousands who've already transformed their financial future.
          </p>
          <Button size="lg" variant="glass" className="text-lg px-8 py-6">
            Start My Journey Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Masterclass;