
import React from "react";
import Layout from "@/components/layout/Layout";
import { Search, PlusCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

// Mock message data
const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "",
    lastMessage: "Hi, just checking on the progress of the legal document translation.",
    time: "10:42 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "",
    lastMessage: "Thanks for the quick turnaround on the product descriptions!",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "",
    lastMessage: "Could you please provide an estimate for translating our new website?",
    time: "Jun 12",
    unread: false,
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    avatar: "",
    lastMessage: "The client approved your translation. Great job!",
    time: "Jun 10",
    unread: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hi there! Just checking in on the progress of the legal document translation. Do you have an estimated completion time?",
    time: "10:42 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Hello Sarah! I'm making good progress on the legal documents. I've completed about 70% so far. I should be able to deliver by tomorrow evening as scheduled.",
    time: "10:45 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content: "That's great news! The client will be very happy to hear that. Let me know if you need any clarification on any terms.",
    time: "10:48 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Me",
    content: "Actually, there are a couple of industry-specific terms I'm researching to ensure accuracy. I'll send you a list if I need help with context.",
    time: "10:52 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    content: "Perfect. I'll be available all day if you need anything. The client is particularly concerned about accuracy in the liability section, so please pay extra attention to that part.",
    time: "10:55 AM",
    isMe: false,
  },
];

const Messages = () => {
  return (
    <Layout title="Messages">
      <div className="flex h-[calc(100vh-120px)] overflow-hidden bg-background rounded-lg border">
        {/* Conversation List */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto flex-1">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id} 
                className={`p-4 hover:bg-accent/50 cursor-pointer transition-colors ${conversation.id === 1 ? 'bg-accent/50' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{conversation.time}</span>
                    </div>
                    <p className="text-sm truncate text-muted-foreground">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <Button className="w-full" size="sm">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Conversation
            </Button>
          </div>
        </div>
        
        {/* Message Content */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Sarah Johnson</h3>
                <p className="text-xs text-muted-foreground">Project Manager • Legal Translation</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md p-3 rounded-lg ${
                      message.isMe
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className={`text-xs mt-1 block text-right ${
                      message.isMe ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t">
            <Textarea
              placeholder="Type your message..."
              className="w-full resize-none"
              rows={3}
            />
            <div className="mt-2 flex justify-between">
              <Button variant="outline" size="sm">Attach File</Button>
              <Button size="sm">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
