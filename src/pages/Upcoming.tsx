
import React from "react";
import Layout from "@/components/layout/Layout";
import { projects } from "@/utils/mockData";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, FileText, Clock } from "lucide-react";

const Upcoming = () => {
  const sortedProjects = [...projects]
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 5);

  return (
    <Layout title="Upcoming">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Upcoming Deadlines</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card p-5 space-y-4">
            <h3 className="text-lg font-medium">Upcoming Projects</h3>
            {sortedProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center 
                    ${project.status === 'in-progress' ? 'bg-blue-100 text-blue-500' : 
                      project.status === 'needs-review' ? 'bg-orange-100 text-orange-500' : 
                      project.status === 'completed' ? 'bg-green-100 text-green-500' : 
                      'bg-purple-100 text-purple-500'}`}
                  >
                    {project.status === 'in-progress' ? <FileText size={18} /> : 
                      project.status === 'needs-review' ? <Clock size={18} /> : 
                      <CalendarClock size={18} />}
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
              </div>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="rounded-md border" />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Upcoming;
