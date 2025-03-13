import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, Download, Globe, Moon, Plus, Sun, Upload } from "lucide-react";

const Settings = () => {
  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <Button>Save Changes</Button>
        </div>
        
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="translation">Translation</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal information and how it appears on your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <input
                      id="name"
                      type="text"
                      defaultValue="John Doe"
                      className="w-full p-2 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full p-2 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    rows={4}
                    defaultValue="Professional translator with over 10 years of experience specializing in technical and legal translations."
                    className="w-full p-2 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Profile Picture</Label>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-lg font-medium">JD</span>
                    </div>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Language Pairs</CardTitle>
                <CardDescription>
                  Manage your translation language pairs and expertise level
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">English → Spanish</div>
                      <div className="text-sm text-muted-foreground">Native → Professional Proficiency</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">English → French</div>
                      <div className="text-sm text-muted-foreground">Native → Professional Proficiency</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Language Pair
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how POTE looks on your device
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="theme-mode">Theme Mode</Label>
                    <div className="flex items-center space-x-2">
                      <Sun className="h-4 w-4 text-muted-foreground" />
                      <Switch id="theme-mode" />
                      <Moon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark themes
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <Label>Font Size</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="text-sm h-20 w-full flex flex-col">
                      <span className="text-base mb-2">Small</span>
                      <span className="text-xs">Aa</span>
                    </Button>
                    <Button variant="outline" className="text-sm h-20 w-full flex flex-col relative">
                      <span className="text-base mb-2">Medium</span>
                      <span className="text-sm">Aa</span>
                      <div className="absolute inset-0 rounded-md ring-2 ring-primary"></div>
                      <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="outline" className="text-sm h-20 w-full flex flex-col">
                      <span className="text-base mb-2">Large</span>
                      <span className="text-base">Aa</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="translation" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Translation Memory</CardTitle>
                <CardDescription>
                  Manage your translation memory settings and data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="tm-enabled">Enable Translation Memory</Label>
                    <Switch id="tm-enabled" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use your past translations to improve future work
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="fuzzy-matches">Show Fuzzy Matches</Label>
                    <Switch id="fuzzy-matches" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Display partial matches from your translation memory
                  </p>
                </div>
                
                <div className="rounded-md bg-accent/50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Translation Memory Size</div>
                      <div className="text-sm text-muted-foreground">12,458 segments (4.8 MB)</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Import
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Translation Preferences</CardTitle>
                <CardDescription>
                  Configure how the translation editor works
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-save">Auto-save translations</Label>
                    <Switch id="auto-save" defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="spell-check">Spell-check while typing</Label>
                    <Switch id="spell-check" defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ai-suggestions">Show AI translation suggestions</Label>
                    <Switch id="ai-suggestions" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use AI to provide translation suggestions as you work
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="auto-propagation">Auto-propagation threshold</Label>
                  <select
                    id="auto-propagation"
                    className="w-full p-2 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="100">Exact match only (100%)</option>
                    <option value="95">High similarity (95%+)</option>
                    <option value="90">Medium similarity (90%+)</option>
                    <option value="75">Low similarity (75%+)</option>
                    <option value="0">Disabled</option>
                  </select>
                  <p className="text-sm text-muted-foreground">
                    Automatically apply translations to similar segments
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Manage API keys and external tool connections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>API Key</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="password"
                      value="••••••••••••••••••••••••••••••"
                      disabled
                      className="flex-1 p-2 rounded-md border bg-muted"
                    />
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use this key to access POTE API from external applications
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Connected Services</Label>
                  <div className="rounded-md border p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium">ProZ Account</div>
                          <div className="text-sm text-muted-foreground">Connected as john.doe@example.com</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                  Manage your account data and backups
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Translation Data
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Backup
                </Button>
                
                <Button variant="destructive" className="w-full justify-start">
                  Delete Account
                </Button>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Deleting your account will remove all your data and cannot be undone.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
