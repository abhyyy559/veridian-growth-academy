import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, BookOpen, TrendingUp } from "lucide-react";

const About = () => {
  const whoWeHelp = [
    {
      icon: BookOpen,
      title: "Students",
      description: "College and university students looking to earn while studying and gain financial independence early."
    },
    {
      icon: Users,
      title: "Homemakers",
      description: "Dedicated homemakers who want to contribute to family income while managing household responsibilities."
    },
    {
      icon: Target,
      title: "Job Seekers",
      description: "Unemployed individuals seeking alternative income sources and new career opportunities."
    }
  ];

  const stats = [
    { number: "2,500+", label: "Students Trained" },
    { number: "₹50L+", label: "Income Generated" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Mentor Support" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Veredian Growth
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to democratize income generation by providing accessible, 
              proven strategies that work for everyone - regardless of background, experience, or location.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Veredian Growth was born from a simple observation: traditional education doesn't teach 
                practical income generation skills. While institutions focus on theoretical knowledge, 
                millions of capable individuals struggle to create sustainable income streams.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founders, successful entrepreneurs themselves, realized that the gap between 
                education and earning could be bridged through mentorship, practical training, 
                and proven methodologies. We've distilled years of business experience into 
                actionable strategies that anyone can implement.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have helped thousands of individuals discover their earning 
                potential and achieve financial independence. Our community continues to grow, 
                creating a network of successful earners who support and inspire each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Help
            </h2>
            <p className="text-xl text-muted-foreground">
              Our programs are designed for individuals ready to take control of their financial future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whoWeHelp.map((group, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <group.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our community's success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed">
              To empower every individual with the knowledge, tools, and support needed to 
              create sustainable income streams, achieve financial independence, and build 
              the life they truly deserve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;