
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects, stats } from "@/utils/mockData";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/dashboard/ProjectCard";
import StatCard from "@/components/dashboard/StatCard";
import TranslationEditor from "@/components/editor/TranslationEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarCheck, Clock, FileText, Filter, MoreHorizontal } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Layout>
      <Tabs 
        defaultValue="dashboard" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="w-full mb-8 max-w-md mx-auto grid grid-cols-2 h-auto p-1">
          <TabsTrigger value="dashboard" className="py-2">Dashboard</TabsTrigger>
          <TabsTrigger value="editor" className="py-2">Quick Translation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.title} stat={stat} index={index} />
            ))}
          </motion.div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">Current Projects</h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-md hover:bg-accent transition-colors">
                  <Filter size={18} className="text-muted-foreground" />
                </button>
                <button className="p-2 rounded-md hover:bg-accent transition-colors">
                  <MoreHorizontal size={18} className="text-muted-foreground" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects
                .filter(p => p.status !== 'completed')
                .slice(0, 4)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Upcoming Deadlines</h2>
            </div>
            
            <div className="glass-card p-5 space-y-4">
              {projects
                .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
                .slice(0, 3)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center 
                        ${project.status === 'in-progress' ? 'bg-blue-100 text-blue-500' : 
                          project.status === 'needs-review' ? 'bg-orange-100 text-orange-500' : 
                          project.status === 'completed' ? 'bg-green-100 text-green-500' : 
                          'bg-purple-100 text-purple-500'}`}
                      >
                        {project.status === 'in-progress' ? <FileText size={18} /> : 
                          project.status === 'needs-review' ? <Clock size={18} /> : 
                          <CalendarCheck size={18} />}
                      </div>
                      <div>
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {new Date(project.deadline).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.wordCount.toLocaleString()} words
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="editor">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card"
          >
            <TranslationEditor />
          </motion.div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
