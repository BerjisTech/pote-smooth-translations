
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

  return (
    <Layout title="Upcoming">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Upcoming Deadlines</h2>
          <Badge variant="outline" className="px-3">
            <Clock className="mr-1 h-3 w-3" />
            This Week
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Upcoming Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {sortedProjects.map((project) => (
                      <div key={project.id} className="flex flex-col p-4 border rounded-lg hover:bg-secondary transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                          </div>
                          <Badge 
                            variant={getStatusVariant(project.status)}
                          >
                            {project.status === "in-progress" ? "In Progress" : 
                             project.status === "needs-review" ? "Needs Review" : 
                             project.status === "completed" ? "Completed" : "Upcoming"}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="flex items-center text-sm">
                            <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{project.wordCount.toLocaleString()} words</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <CalendarClock className="mr-2 h-4 w-4 text-muted-foreground" />
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
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Calendar</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Today's Schedule</h4>
                  {sortedProjects.filter(project => 
                    new Date(project.deadline).toDateString() === new Date().toDateString()
                  ).length > 0 ? (
                    sortedProjects
                      .filter(project => new Date(project.deadline).toDateString() === new Date().toDateString())
                      .map(project => (
                        <div key={project.id} className="flex items-center justify-between text-sm p-2 rounded-md bg-secondary/50">
                          <span>{project.title}</span>
                          <Badge variant="outline" className="text-xs">Due today</Badge>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No deadlines for today.</p>
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

// Helper function to determine badge variant based on project status
function getStatusVariant(status: string): "default" | "secondary" | "outline" | "destructive" {
  switch (status) {
    case "in-progress":
      return "default";
    case "needs-review":
      return "secondary";
    case "completed":
      return "outline";
    default:
      return "outline";
  }
}

function isUrgent(deadlineStr: string): boolean {
  const deadline = new Date(deadlineStr);
  const now = new Date();
  const diffTime = deadline.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 2 && diffDays >= 0;
}

export default Upcoming;
