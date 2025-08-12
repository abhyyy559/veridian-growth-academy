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

  // Single masterclass as per user details
  const masterclasses = [
    {
      id: 1,
      title: "Unlock Your Income Potential: 6-Day Live Masterclass",
      description: "A transformational 6-day, 100% live masterclass for anyone ready to start earning online — even with zero experience. Just 90 minutes a day, packed with clarity, action, and real results.",
      time: "7:00 PM – 8:30 PM (IST)",
      paymentLink: "#",
      image: "/api/placeholder/400/250",
      slots: 50,
      active: true,
      price: 200,
      highlights: [
        "6 days, 90 minutes each — live on Zoom",
        "No experience or degree needed",
        "Step-by-step earning roadmap",
        "Find your hidden income potential",
        "Action plan by Day 6 — not just theory!",
        "Perfect for beginners, job seekers, or anyone feeling stuck"
      ],
      bonus: "Leave with a real earning strategy by Day 6!"
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

      {/* Masterclass List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            {masterclasses.map((masterclass) => (
              <div key={masterclass.id} className="bg-white border border-gray-200 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 p-6 mb-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl text-center mb-2">{masterclass.title}</CardTitle>
                  <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground mb-2">
                  

                    <Clock className="h-4 w-4 ml-4" />
                    {masterclass.time}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  <ul className="list-disc list-inside text-muted-foreground text-base space-y-1 mb-2">
                    {masterclass.highlights && masterclass.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 text-white px-8 py-3 " asChild>
                    <Link to={`/masterclass/${masterclass.id}`}>
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
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