
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, HelpCircle, MessageSquare, MessageSquareText, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

// Mock FAQ data
const faqs = [
  {
    question: "How do I upload a document for translation?",
    answer: "You can upload documents by clicking on the 'New Project' button on the dashboard, then select 'Upload Files' and choose the documents you want to translate."
  },
  {
    question: "What file formats are supported?",
    answer: "POTE supports common translation formats including .docx, .xlsx, .pdf, .txt, .html, .xml, .xliff, and .sdlxliff files."
  },
  {
    question: "How do I export my completed translations?",
    answer: "When viewing a project, click on the 'Export' button in the top right corner, then select your preferred format for the export."
  },
  {
    question: "Can I collaborate with other translators?",
    answer: "Yes, POTE supports collaboration. You can invite team members via the Collaboration page, then assign specific roles and permissions for your projects."
  },
  {
    question: "How do I access my Translation Memory (TM)?",
    answer: "Your Translation Memory can be accessed from the Settings page. You can view, edit, import, or export your TM from there."
  },
];

// Mock help articles
const helpArticles = [
  { id: 1, title: "Getting Started with POTE", category: "Basics", readTime: "5 min read" },
  { id: 2, title: "Creating and Managing Projects", category: "Projects", readTime: "8 min read" },
  { id: 3, title: "Using Translation Memory Effectively", category: "Advanced", readTime: "10 min read" },
  { id: 4, title: "Collaboration Features Guide", category: "Teams", readTime: "7 min read" },
  { id: 5, title: "Integrating External CAT Tools", category: "Advanced", readTime: "12 min read" },
];

const Support = () => {
  return (
    <Layout title="Support">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Support Center</h2>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
        
        <Tabs defaultValue="faq">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="help">Help Center</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="help" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="text-xs font-medium text-primary mb-1">{article.category}</div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.readTime}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Learn how to use the POTE platform efficiently and make the most of its features.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" size="sm">
                      <Book className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Our support team is available to help with any questions or issues you may have.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    placeholder="What can we help you with?"
                    className="w-full p-2 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Please describe your issue in detail..."
                    rows={6}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Attach Screenshot
                </Button>
                <Button>
                  <MessageSquareText className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Support;
