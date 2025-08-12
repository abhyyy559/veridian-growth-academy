import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  interface FormData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    instagram?: string; // Optional field for Instagram handle
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    instagram: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Attempting to insert contact data:', formData);
      
      // Prepare data matching the contact_us_messages table schema
      const messageData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        created_at: new Date().toISOString()
      };
      
      // Remove undefined or empty optional fields
      Object.keys(messageData).forEach(key => {
        if (messageData[key] === undefined || messageData[key] === '') {
          delete messageData[key];
        }
      });
      console.log('Prepared message data:', messageData);

      // Insert into the correct table
      const { data, error } = await supabase
        .from('contact_us_messages') // Updated table name
        .insert([messageData])
        .select()
        .single();

      console.log('Supabase response - Data:', data, 'Error:', error);
      
      if (error) {
        throw new Error(`Supabase error: ${error.message} (${error.code || 'no code'})`);
      }

      // Success case
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        instagram: "",
        message: ""
      });

      // Log success (optional)
      console.log('Contact form submitted successfully:', data);
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again or contact us directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'phone_number' ? 'phone' : id]: value // Map phone_number to phone in state
    }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Get instant responses to your questions",
      action: "Chat Now",
      link: "https://wa.me/+919876543210",
      color: "text-green-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for daily tips and updates",
      action: "Follow Us",
      link: "https://instagram.com/verediangrowth",
      color: "text-pink-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us detailed inquiries",
      action: "Send Email",
      link: "mailto:verediangrowthh@gmail.com",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our masterclasses? Need guidance on which program 
            is right for you? We're here to help you start your income generation journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            const numericValue = e.target.value.replace(/\D/g, '');
                            setFormData(prev => ({ ...prev, phone: numericValue }));
                          }}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="instagram">Instagram Handle</Label>
                        <Input
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          placeholder="@yourusername"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your goals, questions, or how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg" 
                      variant="hero"
                      disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone || !formData.message}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">Reach out to us for any inquiries.</p>
                  <a href="mailto:support@veridiangrowth.com" className="text-primary hover:underline">
                    support@veridiangrowth.com
                  </a>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Choose the communication method that works best for you. 
                    We're active on all channels and ready to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <method.icon className={`h-6 w-6 ${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                            <p className="text-muted-foreground mb-3">{method.description}</p>
                            <Button variant="outline" size="sm" asChild>
                              <a 
                                href={method.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                              >
                                {method.action}
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Info */}
                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Response Times</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>WhatsApp:</span>
                        <span className="font-medium">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instagram DM:</span>
                        <span className="font-medium">Within 4 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email/Form:</span>
                        <span className="font-medium">Within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="p-4 border rounded-lg bg-gray-50/50">
                <summary className="font-semibold cursor-pointer">What is Veridian Growth Academy?</summary>
                <p className="mt-2 text-gray-600">Veridian Growth Academy is a platform dedicated to providing high-quality masterclasses on digital skills and online income generation.</p>
              </details>
              <details className="p-4 border rounded-lg bg-gray-50/50">
                <summary className="font-semibold cursor-pointer">Who are the instructors?</summary>
                <p className="mt-2 text-gray-600">Our instructors are industry experts with proven track records in their respective fields, ensuring you receive practical and effective training.</p>
              </details>
              <details className="p-4 border rounded-lg bg-gray-50/50">
                <summary className="font-semibold cursor-pointer">Is there a money-back guarantee?</summary>
                <p className="mt-2 text-gray-600">Yes, we offer a 30-day money-back guarantee on all our masterclasses if you're not satisfied with the content.</p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Income?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stop waiting for the perfect moment. Your financial transformation 
            starts with a single conversation.
          </p>
          <Button size="lg" variant="glass" className="text-lg px-8 py-6">
            Book Your Masterclass Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;