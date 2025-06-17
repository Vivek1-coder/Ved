import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
          <Sparkles className="w-4 h-4 mr-1" />
          Powered by Advanced AI
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          Meet Your AI
          <br />
          Assistant
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the future of conversation with our intelligent chatbot. 
          Get instant answers, creative solutions, and personalized assistance 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Chatting Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-1">10M+</div>
            <div className="text-gray-600">Conversations</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-600 mb-1">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-indigo-600 mb-1">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
