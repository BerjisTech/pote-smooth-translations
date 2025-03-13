
import React from "react";
import { Stats } from "@/utils/mockData";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, BookOpenText, CheckCircle, DollarSign, Folder } from "lucide-react";

interface StatCardProps {
  stat: Stats;
  index: number;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'book-open-text':
      return <BookOpenText size={20} className="text-blue-500" />;
    case 'folder':
      return <Folder size={20} className="text-purple-500" />;
    case 'dollar-sign':
      return <DollarSign size={20} className="text-green-500" />;
    case 'check-circle':
      return <CheckCircle size={20} className="text-orange-500" />;
    default:
      return null;
  }
};

const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card p-4 md:p-5"
    >
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-lg bg-primary/5">
          {getIcon(stat.icon)}
        </div>
        
        {stat.change !== 0 && (
          <div className={`flex items-center text-xs font-medium ${
            stat.change > 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {stat.change > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span>{Math.abs(stat.change)}%</span>
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <h3 className="text-muted-foreground text-sm">{stat.title}</h3>
        <p className="text-2xl font-semibold mt-1 text-card-foreground">{stat.value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
