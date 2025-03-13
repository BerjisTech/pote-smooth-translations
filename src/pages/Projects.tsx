
import React from "react";
import Layout from "@/components/layout/Layout";
import { projects } from "@/utils/mockData";
import ProjectCard from "@/components/dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Projects = () => {
  return (
    <Layout title="Projects">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">My Projects</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(p => p.status === 'in-progress' || p.status === 'needs-review')
            .slice(0, 4)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
        
        <div className="glass-card">
          <h3 className="text-lg font-medium p-4 border-b">All Projects</h3>
          <div className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Word Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>{new Date(project.deadline).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                            project.status === 'needs-review' ? 'bg-yellow-100 text-yellow-800' : 
                            project.status === 'completed' ? 'bg-green-100 text-green-800' : 
                            'bg-purple-100 text-purple-800'}`}
                      >
                        {project.status === 'in-progress' ? 'In Progress' :
                          project.status === 'needs-review' ? 'Needs Review' :
                          project.status === 'completed' ? 'Completed' : 'Scheduled'}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{project.wordCount.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
