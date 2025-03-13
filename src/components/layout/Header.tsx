
import React from "react";
import { Bell, HelpCircle, Search } from "lucide-react";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Dashboard" }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-medium text-foreground">{title}</h1>
      </div>
      
      <div className="flex-1 max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
            <Search size={18} />
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-sm rounded-lg glass-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            placeholder="Search for projects, texts, or clients..."
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-accent transition-colors">
          <HelpCircle size={20} className="text-muted-foreground" />
        </button>
        <button className="p-2 rounded-full hover:bg-accent transition-colors relative">
          <Bell size={20} className="text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
