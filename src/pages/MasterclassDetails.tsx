import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/components/ui/use-toast";
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
  Phone,
  CheckCircle,
  Star,
  ArrowLeft
} from "lucide-react";

const MasterclassDetails = () => {
  const { toast } = useToast();
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState<'details' | 'register' | 'payment'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Transaction ID state for manual confirmation
  const [showTxnForm, setShowTxnForm] = useState(false);
  const [txnId, setTxnId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Payment handler
  const handleUPIPayment = () => {
    // UPI link
    const upiLink = `upi://pay?pa=9652702916@ybl&pn=Payment+Receiver&am=${masterclass.price}&cu=INR`;
    window.open(upiLink, '_blank');
    // Show transaction ID form after payment
    setShowTxnForm(true);
  };


  // Single masterclass data as per user details
  const masterclass = {
    id: 1,
    title: "Unlock Your Income Potential – 6 Days, 90 Minutes a Day",
    subtitle: "Start earning online with a simple, proven plan — no experience needed.",
    description: "A practical 6-day live masterclass to help you start earning online, even if you have no prior experience. Learn proven digital income strategies, get a clear step-by-step roadmap, and leave with an actionable plan in just 90 minutes a day.",
    detailedDescription: `Join this 6-day live masterclass (90 minutes/day) and discover:\n- The easiest digital income paths for beginners\n- How to find your earning potential and take action\n- A simple, proven framework to start making money online\n\nNo experience or special skills needed—just a willingness to learn. Limited seats. Register now to secure your spot!`,
    date: "2025-08-01",
    time: "7:00 PM to 8:30 PM (IST)",
    duration: "6 Days (90 min/day)",
    price: 200,
    originalPrice: 499,
    slots: 2,
    instructor: "Your Name",
    rating: 4.9,
    reviews: 3475,
    learningOutcomes: [
      "Beginner-friendly digital income paths",
      "Day-by-day roadmap for clarity and action",
      "Identify hidden earning potential in your daily life",
      "Framework to start generating income online",
      "Consistency and growth with limited time/resources"
    ],
    whatYouGet: [
      "6-day live masterclass (Zoom)",
      "90 minutes per day, 100% live",
      "Actionable earning strategy by Day 6"
    ],
    agenda: [
      { time: "Day 1", topic: "Clarity & Mindset for Earning" },
      { time: "Day 2", topic: "Digital Income Paths Overview" },
      { time: "Day 3", topic: "Finding Your Earning Niche" },
      { time: "Day 4", topic: "Building Your First Income Stream" },
      { time: "Day 5", topic: "Scaling & Consistency" },
      { time: "Day 6", topic: "Action Plan & Q&A" }
    ]
  };

  if (!masterclass) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Masterclass Not Found</h1>
          <Link to="/masterclass">
            <Button variant="outline">Back to Masterclasses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRegistration = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all the required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email format.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const registrationData = {
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
      };

      const { error } = await supabase
        .from('contacts')
        .insert([registrationData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      toast({
        title: "Registration Successful!",
        description: "Please proceed to the payment step.",
      });

      setCurrentStep('payment');

    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred. Please try again.",
        variant: "destructive",
      });
      console.error('Error saving registration data:', error);
    } finally {
      setIsLoading(false);
    }
  };;

  const renderDetailsView = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {masterclass.slots} slots left
          </Badge>
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
            ⭐ {masterclass.rating} ({masterclass.reviews} reviews)
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">{masterclass.title}</h1>
        <p className="text-xl text-primary font-semibold">{masterclass.subtitle}</p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{masterclass.detailedDescription}</p>
      </div>

      {/* Key Details */}
      <div className="grid md:grid-cols-3 gap-6">
        
        <Card className="text-center">
          <CardContent className="p-6">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-semibold">{masterclass.duration}</div>
            <div className="text-sm text-gray-600">Live Interactive Session</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-semibold">Limited Seats</div>
            <div className="text-sm text-gray-600">Only {masterclass.slots} slots available</div>
          </CardContent>
        </Card>
      </div>

      {/* What You'll Learn */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {masterclass.learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Session Agenda */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Session Agenda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {masterclass.agenda.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-primary min-w-[100px]">
                  {item.time}
                </div>
                <div className="flex-1">{item.topic}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            What's Included
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {masterclass.whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-dark text-white px-12 py-4 text-lg"
          onClick={() => setCurrentStep('register')}
        >
          Register Now - FREE
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          No payment required to register • Secure your slot now
        </p>
      </div>
    </div>
  );

  const renderRegistrationForm = () => (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Secure Your Slot</h2>
        <p className="text-gray-600">Just a few details to get started</p>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="pl-10"
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            title="Please enter a valid email address."
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, '');
              setFormData({...formData, phone: numericValue});
            }}
            className="pl-10"
          />
        </div>
      </div>
      
      <Button 
        className="w-full bg-primary hover:bg-primary-dark text-white" 
        size="lg" 
        onClick={handleRegistration}
        disabled={!formData.name || !formData.email || !formData.phone}
      >
        Continue
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        className="w-full" 
        onClick={() => setCurrentStep('details')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Details
      </Button>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Complete Your Registration</h2>
        <p className="text-gray-600">You're almost there!</p>
      </div>

      <Card className="border-2 border-primary/20">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold text-primary">
              ₹{masterclass.price}
            </div>
            <div className="text-sm text-gray-600 line-through">
              Originally ₹{masterclass.originalPrice}
            </div>
            <div className="text-sm text-green-600 font-medium">
              Save ₹{masterclass.originalPrice - masterclass.price} today!
            </div>
          </div>
        </CardContent>
      </Card>
\

      {!showTxnForm && (
        <Button 
          className="w-full bg-primary hover:bg-primary-dark text-white" 
          size="lg"
          onClick={handleUPIPayment}
        >
          Pay ₹{masterclass.price} via UPI & Join Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      )}

      {showTxnForm && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">After payment, enter your UPI Transaction/Reference ID below:</h3>
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter UPI Transaction ID (UTR/TXN ID)"
            value={txnId}
            onChange={e => setTxnId(e.target.value)}
            />
          <Button
            className="w-full bg-green-600 text-white"
            size="lg"
            disabled={!txnId}
            onClick={() => {
              window.location.href = '/paymentsuccess';
            }}
          >
            Submit Transaction ID
          </Button>
          <p className="text-xs text-gray-500 mt-2">We will verify your payment and contact you soon.</p>
        </div>
      )}
      
      <Button 
        variant="ghost" 
        className="w-full" 
        onClick={() => setCurrentStep('register')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Registration
      </Button>

      <p className="text-xs text-center text-gray-500">
        Secure payment via UPI • Enter your transaction ID after payment
      </p>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/masterclass" className="inline-flex items-center text-gray-600 hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Masterclasses
          </Link>
        </div>

        {currentStep === 'details' && renderDetailsView()}
        {currentStep === 'register' && renderRegistrationForm()}
        {currentStep === 'payment' && renderPaymentForm()}
      </div>
    </div>
  );
};

export default MasterclassDetails;
