
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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

// Colors for charts
const COLORS = ["#4D9D9D", "#6BBABA", "#89D2D2", "#A8E2E2", "#C7F0F0"];

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
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={productivityData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#edf5f5" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Day
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {payload[0].payload.date}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Words
                                  </span>
                                  <span className="font-bold">
                                    {payload[0].value.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Legend />
                    <Bar dataKey="words" fill="#4D9D9D" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyEarningsData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#edf5f5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Month
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {payload[0].payload.month}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Earnings
                                  </span>
                                  <span className="font-bold">
                                    ${payload[0].value.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="earnings" stroke="#4D9D9D" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {projectTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Type
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {payload[0].name}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Percentage
                                  </span>
                                  <span className="font-bold">
                                    {payload[0].value}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Analytics;
