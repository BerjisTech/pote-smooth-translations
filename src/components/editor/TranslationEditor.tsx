
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Check, 
  Save, 
  History, 
  AlertTriangle, 
  MessageSquare, 
  Lightbulb 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TranslationEditor = () => {
  const [sourceText, setSourceText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."
  );
  const [targetText, setTargetText] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const handleSave = () => {
    console.log("Saving translation...");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-medium">Translation Editor</h3>
          <p className="text-sm text-muted-foreground">
            Translate your content with CAT tools and AI assistance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => setShowHistory(!showHistory)}>
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
          <Button size="sm" onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>
      
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Source Text</h4>
              <span className="text-xs text-muted-foreground">English</span>
            </div>
            <Textarea 
              className="min-h-[200px] font-mono"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Enter source text here..." 
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Target Text</h4>
              <span className="text-xs text-muted-foreground">Spanish</span>
            </div>
            <Textarea 
              className="min-h-[200px] font-mono"
              value={targetText}
              onChange={(e) => setTargetText(e.target.value)}
              placeholder="Enter translation here..." 
            />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="suggestions">
        <TabsList className="mb-2">
          <TabsTrigger value="suggestions">
            <Lightbulb className="h-4 w-4 mr-2" />
            AI Suggestions
          </TabsTrigger>
          <TabsTrigger value="comments">
            <MessageSquare className="h-4 w-4 mr-2" />
            Comments
          </TabsTrigger>
          <TabsTrigger value="issues">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Quality Issues
          </TabsTrigger>
        </TabsList>
        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-md">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">FindAI suggestion</p>
                        <p className="text-sm">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 bg-muted rounded-md">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Translation Memory (90% match)</p>
                        <p className="text-sm">
                          "Nullam pulvinar risus non risus hendrerit venenatis."
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comments">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">No comments yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="issues">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">No quality issues detected.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TranslationEditor;
