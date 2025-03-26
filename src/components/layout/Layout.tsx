
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { PageTransition } from "../ui/PageTransition";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "Dashboard" }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 ml-[76px] md:ml-[250px] transition-all duration-300">
        <Header title={title} />
        
        <main className="container px-6 py-8">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>
    </div>
  );
};

export default Layout;
