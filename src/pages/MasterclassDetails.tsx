import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState<'details' | 'register' | 'payment'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Sample masterclass data - in real app this would come from API
  const masterclassData = {
    1: {
      id: 1,
      title: "Digital Income Mastery",
      subtitle: "From Zero to ₹25,000+ Monthly Income",
      description: "Learn proven strategies to generate consistent monthly income through digital platforms. Perfect for beginners with zero experience.",
      detailedDescription: "This comprehensive masterclass will teach you everything you need to know about generating income online. We cover social media marketing, affiliate marketing, digital products, and networking strategies that actually work.",
      date: "2024-07-20",
      time: "6:00 PM IST",
      duration: "3 hours",
      price: 999,
      originalPrice: 1999,
      slots: 25,
      instructor: "Rahul Sharma",
      rating: 4.9,
      reviews: 150,
      learningOutcomes: [
        "Master 5 proven income generation strategies",
        "Set up your first digital income stream",
        "Build a network of mentors and supporters",
        "Create a sustainable part-time income plan",
        "Access to exclusive resources and templates"
      ],
      whatYouGet: [
        "3-hour live masterclass",
        "Q&A session with experts",
        "Downloadable resources pack",
        "30-day follow-up support",
        "Access to private community group",
        "Certificate of completion"
      ],
      agenda: [
        { time: "6:00-6:30 PM", topic: "Welcome & Success Stories" },
        { time: "6:30-7:15 PM", topic: "5 Proven Income Strategies" },
        { time: "7:15-7:30 PM", topic: "Break" },
        { time: "7:30-8:15 PM", topic: "Implementation Roadmap" },
        { time: "8:15-9:00 PM", topic: "Q&A & Next Steps" }
      ]
    },
    2: {
      id: 2,
      title: "Part-Time Earning Blueprint",
      subtitle: "Perfect for Working Professionals",
      description: "Discover flexible income opportunities that work around your schedule. Ideal for working professionals.",
      detailedDescription: "Designed specifically for busy professionals who want to create additional income streams without leaving their day job. Learn time-efficient strategies that can be implemented in just 1-2 hours daily.",
      date: "2024-07-22",
      time: "7:00 PM IST",
      duration: "2.5 hours",
      price: 1299,
      originalPrice: 2499,
      slots: 30,
      instructor: "Priya Verma",
      rating: 4.8,
      reviews: 200,
      learningOutcomes: [
        "Time-efficient income strategies",
        "Work-life balance techniques",
        "Automation tools and systems",
        "Passive income fundamentals",
        "Professional networking strategies"
      ],
      whatYouGet: [
        "2.5-hour intensive session",
        "Professional toolkit",
        "Time management templates",
        "60-day email support",
        "LinkedIn networking guide",
        "Industry certification"
      ],
      agenda: [
        { time: "7:00-7:20 PM", topic: "Introduction & Assessment" },
        { time: "7:20-8:00 PM", topic: "Time-Efficient Strategies" },
        { time: "8:00-8:40 PM", topic: "Automation & Tools" },
        { time: "8:40-9:30 PM", topic: "Action Planning & Q&A" }
      ]
    }
  };

  const masterclass = masterclassData[parseInt(id as string) as keyof typeof masterclassData];

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

  const handleRegistration = () => {
    if (formData.name && formData.email && formData.phone) {
      setCurrentStep('payment');
    }
  };

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
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-semibold">
              {new Date(masterclass.date).toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="text-sm text-gray-600">{masterclass.time}</div>
          </CardContent>
        </Card>
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
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>30-day money-back guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Lifetime access to resources</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Certificate of completion</span>
        </div>
      </div>

      <Button 
        className="w-full bg-primary hover:bg-primary-dark text-white" 
        size="lg"
      >
        Pay ₹{masterclass.price} & Join Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        className="w-full" 
        onClick={() => setCurrentStep('register')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Registration
      </Button>

      <p className="text-xs text-center text-gray-500">
        Secure payment via Razorpay • Your data is protected
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