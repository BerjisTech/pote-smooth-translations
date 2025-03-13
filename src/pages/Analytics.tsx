
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "recharts";

// Mock data for charts
const productivityData = [
  { date: "Mon", words: 2400 },
  { date: "Tue", words: 1398 },
  { date: "Wed", words: 3800 },
  { date: "Thu", words: 3908 },
  { date: "Fri", words: 4800 },
  { date: "Sat", words: 1500 },
  { date: "Sun", words: 500 },
];

const projectTypeData = [
  { name: "Legal", value: 35 },
  { name: "Technical", value: 25 },
  { name: "Marketing", value: 20 },
  { name: "Medical", value: 15 },
  { name: "Other", value: 5 },
];

const monthlyEarningsData = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1900 },
  { month: "Mar", earnings: 2000 },
  { month: "Apr", earnings: 2780 },
  { month: "May", earnings: 1890 },
  { month: "Jun", earnings: 2390 },
  { month: "Jul", earnings: 3490 },
];

const Analytics = () => {
  return (
    <Layout title="Analytics">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Translated Words</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">124,892</div>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-500">↑ 12%</span> from previous period
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Projects Completed</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
              <p className="text-sm text-muted-foreground">
                <span className="text-red-500">↓ 3%</span> from previous period
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Total Earnings</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$4,328</div>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-500">↑ 8%</span> from previous period
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="productivity">
          <TabsList className="grid max-w-[400px] grid-cols-3">
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="productivity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Word Count</CardTitle>
                <CardDescription>Words translated over the past week</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-muted-foreground">[Productivity Chart Placeholder]</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="earnings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Earnings</CardTitle>
                <CardDescription>Your earnings over the past 7 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-muted-foreground">[Earnings Chart Placeholder]</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Types</CardTitle>
                <CardDescription>Distribution of projects by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-muted-foreground">[Project Types Chart Placeholder]</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Analytics;
