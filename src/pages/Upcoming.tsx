
import React from "react";
import Layout from "@/components/layout/Layout";
import { projects } from "@/utils/mockData";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, FileText, Clock, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const Upcoming = () => {
  const sortedProjects = [...projects]
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 5);

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Helper function to format status for display
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case "in-progress": return "In Progress";
      case "needs-review": return "Needs Review"; 
      case "completed": return "Completed";
      default: return "Upcoming";
    }
  };

  // Helper function to determine badge variant based on status
  // Modified to only use supported badge variants: "default", "secondary", "outline", or "destructive"
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "in-progress": return "default";
      case "needs-review": return "secondary";
      case "completed": return "destructive"; // Changed from "accent" to "destructive"
      default: return "outline";
    }
  };

  return (
    <Layout title="Upcoming">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300">Upcoming Deadlines</h2>
          <Badge variant="outline" className="px-3 bg-secondary border-primary-100">
            <Clock className="mr-1 h-3 w-3 text-primary" />
            <span className="text-primary-600">This Week</span>
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card className="border-grey-100 shadow-custom bg-white dark:bg-dark">
              <CardHeader className="pb-2 border-b border-grey-50">
                <CardTitle className="text-lg font-medium text-primary-700 dark:text-primary-300">Upcoming Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4 p-4">
                    {sortedProjects.map((project) => (
                      <div 
                        key={project.id} 
                        className="flex flex-col p-4 border rounded-lg hover:bg-secondary dark:hover:bg-dark-blue-hue/30 transition-colors border-grey-100 dark:border-grey-700"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium text-primary-800 dark:text-primary-200">{project.title}</h3>
                            <p className="text-sm text-grey-600 dark:text-grey-400">Client: {project.client}</p>
                          </div>
                          <Badge 
                            variant={getStatusVariant(project.status)}
                            className={
                              project.status === "in-progress" ? "bg-primary text-white" :
                              project.status === "needs-review" ? "bg-secondary text-primary" :
                              project.status === "completed" ? "bg-destructive text-white" :
                              "bg-grey-100 text-grey-700"
                            }
                          >
                            {getStatusDisplay(project.status)}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="flex items-center text-sm text-grey-600 dark:text-grey-400">
                            <FileText className="mr-2 h-4 w-4" />
                            <span>{project.wordCount.toLocaleString()} words</span>
                          </div>
                          <div className="flex items-center text-sm text-grey-600 dark:text-grey-400">
                            <CalendarClock className="mr-2 h-4 w-4" />
                            <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        {isUrgent(project.deadline) && (
                          <div className="mt-2 flex items-center text-destructive text-sm">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            <span>Deadline approaching!</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-grey-100 shadow-custom bg-secondary dark:bg-dark">
              <CardHeader className="pb-2 border-b border-grey-50 dark:border-grey-700">
                <CardTitle className="text-lg font-medium text-primary-700 dark:text-primary-300">Calendar</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-grey-100 dark:border-grey-700 bg-white dark:bg-dark-blue-hue/20 p-2"
                />
                
                <Separator className="my-4 bg-grey-100 dark:bg-grey-700" />
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-primary-700 dark:text-primary-300">Today's Schedule</h4>
                  {sortedProjects.filter(project => 
                    new Date(project.deadline).toDateString() === new Date().toDateString()
                  ).length > 0 ? (
                    sortedProjects
                      .filter(project => new Date(project.deadline).toDateString() === new Date().toDateString())
                      .map(project => (
                        <div key={project.id} className="flex items-center justify-between text-sm p-3 rounded-md bg-white/50 dark:bg-dark-blue-hue/30 border border-grey-100 dark:border-grey-700">
                          <span className="text-primary-800 dark:text-primary-200 font-medium">{project.title}</span>
                          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">Due today</Badge>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-grey-500 dark:text-grey-400 p-3 bg-white/50 dark:bg-dark-blue-hue/30 rounded-md border border-grey-100 dark:border-grey-700">No deadlines for today.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

function isUrgent(deadlineStr: string): boolean {
  const deadline = new Date(deadlineStr);
  const now = new Date();
  const diffTime = deadline.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 2 && diffDays >= 0;
}

export default Upcoming;
