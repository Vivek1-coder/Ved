import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header = ({ onLoginClick }: HeaderProps) => {
  return (
    <header className="border-b border-white/20 backdrop-blur-sm bg-white/70 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ChatBot AI
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <Button variant="outline" onClick={onLoginClick}>
            Sign In
          </Button>
          <Button onClick={onLoginClick} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started
          </Button>
        </nav>
        <div className="md:hidden">
          <Button onClick={onLoginClick} size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};
