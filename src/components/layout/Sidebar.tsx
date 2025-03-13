
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  BarChart2, 
  BookOpenText, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Folder, 
  Home, 
  Inbox, 
  MessageSquare, 
  Settings, 
  Users 
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BookOpenText, label: "Translation Editor", href: "/editor" },
  { icon: Folder, label: "Projects", href: "/projects" },
  { icon: Clock, label: "Upcoming", href: "/upcoming" },
  { icon: Inbox, label: "Messages", href: "/messages" },
  { icon: Users, label: "Collaboration", href: "/collaboration" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: MessageSquare, label: "Support", href: "/support" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: isCollapsed ? 80 : 240 }}
        animate={{ width: isCollapsed ? 80 : 240 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col py-6 fixed left-0 top-0 z-10"
      >
        <div className="px-4 mb-6 flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <span className="font-bold text-xl tracking-tight">POTE</span>
            </motion.div>
          )}
          <button
            onClick={toggleSidebar}
            className="rounded-full p-1.5 hover:bg-sidebar-accent text-sidebar-foreground transition-colors duration-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          <TooltipProvider delayDuration={200}>
            {navItems.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-sidebar-primary-foreground bg-sidebar-primary"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      }`
                    }
                  >
                    <item.icon size={20} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </NavLink>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right">{item.label}</TooltipContent>
                )}
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>

        <div className="px-4 mt-auto">
          <div className="flex items-center space-x-3 p-3">
            <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-sidebar-foreground/60">Translator</div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
