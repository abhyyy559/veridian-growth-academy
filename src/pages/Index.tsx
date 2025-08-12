
import { MarqueeTestimonials } from "@/components/ui/MarqueeTestimonials";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-12 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
      <div className="w-full max-w-4xl">
        <MarqueeTestimonials />
      </div>
    </div>
  );
};

export default Index;
