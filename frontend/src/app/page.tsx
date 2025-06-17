import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Shield, Clock, Brain, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoginDialog } from "@/components/LoginDialog";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // After successful login, navigate to chatbot
    navigate('/chatbot');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection onGetStarted={() => setIsLoginOpen(true)} />
      <FeaturesSection />
      <Footer />
      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;