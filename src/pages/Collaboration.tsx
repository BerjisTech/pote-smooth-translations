
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Share2, UserPlus } from "lucide-react";

// Mock team members
const teamMembers = [
  { id: 1, name: "John Doe", role: "Translator", avatar: "", languages: ["English", "Spanish", "French"] },
  { id: 2, name: "Alice Smith", role: "Proofreader", avatar: "", languages: ["English", "German", "Italian"] },
  { id: 3, name: "Robert Johnson", role: "Project Manager", avatar: "", languages: ["English"] },
  { id: 4, name: "Maria Garcia", role: "Translator", avatar: "", languages: ["Spanish", "Portuguese", "English"] },
];

// Mock shared projects
const sharedProjects = [
  { id: 1, title: "Corporate Website Localization", owner: "Robert Johnson", members: 3, lastUpdated: "2 hours ago" },
  { id: 2, title: "Product Catalog Translation", owner: "John Doe", members: 4, lastUpdated: "Yesterday" },
  { id: 3, title: "Marketing Materials", owner: "Alice Smith", members: 2, lastUpdated: "3 days ago" },
];

const Collaboration = () => {
  return (
    <Layout title="Collaboration">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Collaboration</h2>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Team Member
          </Button>
        </div>
        
        <Tabs defaultValue="team">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="team">Team Members</TabsTrigger>
            <TabsTrigger value="projects">Shared Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="team" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <strong>Languages:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {member.languages.map((lang, i) => (
                          <span key={i} className="px-2 py-1 bg-accent rounded-md text-xs">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="ghost" size="sm">View Profile</Button>
                    <Button variant="outline" size="sm">Message</Button>
                  </CardFooter>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground mb-4">Invite a new team member to collaborate</p>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Member
                </Button>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="projects" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sharedProjects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>Owner: {project.owner}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{project.members} team members</span>
                      <span>Updated {project.lastUpdated}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground mb-4">Create a new collaborative project</p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Collaboration;
