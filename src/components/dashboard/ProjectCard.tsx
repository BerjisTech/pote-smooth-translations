
import React from "react";
import { Project } from "@/utils/mockData";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Calendar, Clock, Languages } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusColors = {
  'in-progress': 'bg-blue-500',
  'needs-review': 'bg-orange-500',
  'completed': 'bg-green-500',
  'upcoming': 'bg-purple-500'
};

const statusLabels = {
  'in-progress': 'In Progress',
  'needs-review': 'Needs Review',
  'completed': 'Completed',
  'upcoming': 'Upcoming'
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card p-5 hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium text-lg mb-1 text-card-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.client}</p>
        </div>
        <Badge className={`${statusColors[project.status]} text-white`}>
          {statusLabels[project.status]}
        </Badge>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <Languages size={16} className="mr-2" />
            <span>{project.sourceLang} → {project.targetLang}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground pt-2">
          <div>{project.wordCount.toLocaleString()} words</div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>Updated {project.lastModified}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
