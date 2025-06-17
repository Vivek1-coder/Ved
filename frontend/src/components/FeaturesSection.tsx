import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, Brain, Users, MessageCircle } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Powered by cutting-edge language models for natural, human-like conversations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Responses",
      description: "Get instant answers and solutions without any waiting time.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your conversations are encrypted and secure. We respect your privacy.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always here when you need it. No downtime, no breaks, just reliable assistance.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Perfect for teams and individuals. Collaborate and share insights seamlessly.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Chat naturally like you would with a friend. No complex commands needed.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Why Choose Our AI Assistant?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our chatbot the perfect companion for your daily tasks and creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
