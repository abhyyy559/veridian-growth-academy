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
  ArrowLeft,
  QrCode,
  CreditCard
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
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'manual' | 'qrcode'>('upi');

  // Payment handlers
  const handleUPIPayment = () => {
    // UPI link
    const upiLink = `upi://pay?pa=9652702916@ybl&pn=Payment%20Receiver&am=${masterclass.price}&cu=INR`;
    window.open(upiLink, '_blank');
    // Show transaction ID form after payment
    setShowTxnForm(true);
  };

  const handleManualPayment = () => {
    // Show transaction ID form for manual payment
    setPaymentMethod('manual');
    setShowTxnForm(true);
  };

  const handleQRCodePayment = () => {
    // Show QR code for payment
    setPaymentMethod('qrcode');
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
        .upsert([registrationData], { onConflict: 'email' });

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
        <div className="space-y-3">
          <Button 
            className="w-full bg-primary hover:bg-primary-dark text-white" 
            size="lg"
            onClick={handleUPIPayment}
          >
            Pay ₹{masterclass.price} via UPI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
            size="lg"
            onClick={handleQRCodePayment}
          >
            Pay via QR Code Scanner (Recommended)
            <QrCode className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white" 
            size="lg"
            onClick={handleManualPayment}
          >
            Enter Payment Details Manually
            <CreditCard className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}

      {showTxnForm && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          {paymentMethod === 'qrcode' && (
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold mb-2">Scan QR Code to Pay</h3>
              <div className="bg-white p-4 inline-block rounded-lg border mb-2">
                {/* QR Code Image */}
                <img 
                  src="/urcode.png" 
                  alt="QR Code for UPI payment to 9652702916@ybl"
                  className="w-48 h-48"
                />
              </div>
              <p className="text-sm font-medium">UPI ID: 9652702916@ybl</p>
              <p className="text-sm text-gray-600 mt-1">Amount: ₹{masterclass.price}</p>
              
              <div className="mt-4 text-left bg-blue-50 p-3 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Steps to complete payment:</h4>
                <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
                  <li>Open your UPI payment app (Google Pay, PhonePe, Paytm, etc.)</li>
                  <li>Use the scan QR option in your app</li>
                  <li>Scan the QR code shown above</li>
                  <li>Verify the UPI ID (9652702916@ybl) and amount</li>
                  <li>Complete the payment in your app</li>
                  <li>Copy the UTR/Transaction ID from your payment app</li>
                  <li>Paste the ID in the field below and submit</li>
                </ol>
              </div>
            </div>
          )}
          
          <h3 className="text-lg font-semibold mb-2">
            {paymentMethod === 'upi' && "After payment, enter your UPI Transaction/Reference ID below:"}
            {paymentMethod === 'manual' && "Enter your payment details below:"}
            {paymentMethod === 'qrcode' && "After scanning and paying, enter your Transaction ID below:"}
          </h3>
          
          {paymentMethod === 'manual' && (
            <div className="mb-4 text-left bg-green-50 p-3 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-800 mb-2">Steps to complete manual payment:</h4>
              <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
                <li>Copy the UPI ID: <span className="font-medium">9652702916@ybl</span></li>
                <li>Open your preferred UPI payment app</li>
                <li>Paste the UPI ID in the payment section</li>
                <li>Enter the amount: ₹{masterclass.price}</li>
                <li>Complete the payment in your app</li>
                <li>Copy the UTR/Transaction ID from your payment confirmation</li>
                <li>Paste the ID in the field below and submit</li>
              </ol>
            </div>
          )}
          
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder={paymentMethod === 'manual' ? "Enter Transaction ID (UTR/TXN ID)" : "Enter Transaction ID (UTR/TXN ID)"}
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
            Submit Payment Details
          </Button>
          
          <p className="text-xs text-gray-500 mt-2">We will verify your payment and contact you soon.</p>
          
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
            <p className="font-medium">Important Payment Notes:</p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-xs">
              <li>Please wait patiently after making the payment. It may take a few moments to process.</li>
              <li>If your payment is declined, please try another payment method.</li>
              <li>Make sure to copy the correct transaction ID from your payment app.</li>
              <li>For any payment issues, please contact our support team.</li>
            </ul>
          </div>
          
          {/* Option to change payment method */}
          <Button 
            variant="ghost" 
            className="w-full mt-2 text-sm" 
            onClick={() => {
              setShowTxnForm(false);
              setTxnId('');
            }}
          >
            Choose a different payment method
          </Button>
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
        Secure payment options • Enter your transaction details after payment
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
