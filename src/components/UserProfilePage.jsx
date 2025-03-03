import React, { useState } from "react";
import {
  Trophy,
  Users,
  Calendar,
  Search,
  Star,
  Clock,
  MapPin,
  MessageCircle,
  Heart,
  Award,
  ThumbsUp,
  ThumbsDown,
  UserPlus,
  Check,
  PlusCircle,
  Bell,
  Settings,
  Menu,
  X,
  Edit,
  LogOut,
  Mail,
  Phone,
  Globe,
  Activity,
  Target,
  Zap,
  Gift,
  Flag,
  Coffee,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Navbar from "./Navbar";

const UserProfilePage = () => {
  // User Data
  const userData = {
    id: "user-1",
    name: "Mia Chen",
    role: "Team Lead",
    email: "mia@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joined: "April 2024",
    bio: "Passionate team leader with a knack for organizing creative challenges. I love bringing people together through unique experiences!",
    avatar: "https://imgs.search.brave.com/QTvSYpjKXv4lO9QPvSw4kGhHb_y3PJbu86l6EOsyD5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucGhvdG9mZWVs/ZXIuY29tL2ltYWdl/cy9ob21lL3Rlc3Qt/Ym94LzAxLmpwZw",
    interests: [
      "Escape Rooms",
      "Puzzles",
      "Photography",
      "Hiking",
      "Board Games",
      "Cooking",
    ],
    teams: [
      {
        id: "team-1",
        name: "Team Sakura",
        role: "Lead",
        color: "#FF69B4",
        avatar: "https://imgs.search.brave.com/Xioi8nqYEDdb-x96OVSw10nulXVP3ttsEVtNF3OBwBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmltZS1tYW5n/YS1zdHlsZS1tYWxl/LXBvcnRyYWl0Xzcw/NjE2My02MjU4Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ",
      },
      {
        id: "team-2",
        name: "NYC Explorers",
        role: "Member",
        color: "#4169E1",
        avatar: "https://imgs.search.brave.com/SV-KUcmvu2NVHx6wd6sfjKoOj3US67a_FnycF872Vnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NkcC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDUv/MzhfYW5pbWUtZHAu/anBn",
      },
    ],
    stats: {
      challengesCreated: 12,
      challengesCompleted: 28,
      collaborationsJoined: 9,
      eventsAttended: 34,
      teamMatchPercentage: 87,
      connectionsMade: 47,
      totalPoints: 1250,
    },
    badges: [
      { name: "Challenge Creator", icon: "Trophy", count: 10 },
      { name: "Team Builder", icon: "Users", count: 5 },
      { name: "Explorer", icon: "Globe", count: 15 },
      { name: "Collaborator", icon: "Handshake", count: 8 },
    ],
    activity: [
      {
        type: "challenge_created",
        title: "Created 'Midnight Escape Room Challenge'",
        team: "Team Sakura",
        teamColor: "#FF69B4",
        date: "2 days ago",
        icon: "Trophy",
      },
      {
        type: "challenge_accepted",
        title: "Accepted Challenge from Team Ninja",
        challenge: "Speed Puzzle Competition",
        date: "4 days ago",
        icon: "Check",
      },
      {
        type: "team_joined",
        title: "Joined NYC Explorers Team",
        date: "1 week ago",
        icon: "UserPlus",
      },
      {
        type: "collaboration_started",
        title: "Started Collaboration with Team Foodies",
        project: "International Potluck Picnic",
        date: "2 weeks ago",
        icon: "Users",
      },
      {
        type: "badge_earned",
        title: "Earned 'Team Builder' Badge",
        date: "3 weeks ago",
        icon: "Award",
      },
    ],
    upcomingEvents: [
      {
        id: "event-1",
        title: "Escape Room Challenge vs Team Ninja",
        date: "This Saturday, 3 PM",
        location: "Escape Masters NYC",
        team: "Team Sakura",
        teamColor: "#FF69B4",
        type: "challenge",
      },
      {
        id: "event-2",
        title: "Central Park Treasure Hunt",
        date: "Next Tuesday, 5 PM",
        location: "Central Park (North Entrance)",
        team: "NYC Explorers",
        teamColor: "#4169E1",
        type: "exploration",
      },
      {
        id: "event-3",
        title: "International Potluck Picnic",
        date: "Next Sunday, 1 PM",
        location: "Riverside Park",
        team: "Team Sakura + Team Foodies",
        teamColor: "#FF69B4",
        type: "collaboration",
      },
    ],
    suggestions: [
      {
        id: "suggestion-1",
        type: "team",
        name: "Coffee Enthusiasts",
        matchPercentage: 92,
        color: "#8B4513",
        avatar: "/api/placeholder/50/50",
      },
      {
        id: "suggestion-2",
        type: "event",
        name: "DIY Craft Challenge",
        team: "Crafters United",
        matchPercentage: 89,
        date: "In 2 weeks",
      },
      {
        id: "suggestion-3",
        type: "user",
        name: "Alex Rivera",
        matchPercentage: 94,
        interests: ["Board Games", "Puzzles", "Photography"],
        avatar: "/api/placeholder/50/50",
      },
    ],
  };

  // State for modal/dialog controls
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [inviteTeamOpen, setInviteTeamOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Engagement data for charts
  const engagementData = [
    { name: "Jan", challenges: 3, collaborations: 1, explorations: 2 },
    { name: "Feb", challenges: 2, collaborations: 3, explorations: 1 },
    { name: "Mar", challenges: 4, collaborations: 2, explorations: 3 },
    { name: "Apr", challenges: 3, collaborations: 3, explorations: 2 },
    { name: "May", challenges: 5, collaborations: 2, explorations: 4 },
    { name: "Jun", challenges: 4, collaborations: 4, explorations: 3 },
  ];

  const interestDistribution = [
    { name: "Puzzles", value: 32 },
    { name: "Escape Rooms", value: 28 },
    { name: "Hiking", value: 18 },
    { name: "Board Games", value: 12 },
    { name: "Cooking", value: 10 },
  ];

  const COLORS = ["#FF69B4", "#4169E1", "#32CD32", "#FFA500", "#9370DB"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container px-4 sm:px-6 lg:px-8 mx-auto py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div
            className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative"
            style={{
              background: `linear-gradient(to right, ${userData.teams[0].color}, #9370DB)`,
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white"
              onClick={() => setEditProfileOpen(true)}
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div className="px-6 pb-6 relative">
            <div className="flex flex-col sm:flex-row">
              {/* Avatar */}
              <div className="relative -mt-16 mb-4 sm:mb-0 sm:mr-6">
                <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                  <AvatarImage src={userData.avatar} />
                  <AvatarFallback>
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div
                  className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ backgroundColor: userData.teams[0].color }}
                >
                  <Trophy className="h-3 w-3 text-white" />
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 pt-4 sm:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 sm:mb-2">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {userData.name}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Trophy
                        className="h-4 w-4 mr-1"
                        style={{ color: userData.teams[0].color }}
                      />
                      <span className="mr-2">{userData.role}</span>
                      <Separator orientation="vertical" className="h-4 mx-2" />
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{userData.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center mt-3 sm:mt-0 space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="hidden sm:inline">Message</span>
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden sm:inline">Connect</span>
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 mt-2 text-sm">{userData.bio}</p>

                {/* Team badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {userData.teams.map((team) => (
                    <Badge
                      key={team.id}
                      className="flex items-center gap-1 py-1"
                      style={{ backgroundColor: team.color, color: "white" }}
                    >
                      <Users className="h-3 w-3" />
                      {team.name}
                      {team.role === "Lead" && (
                        <Star className="h-3 w-3 ml-1" />
                      )}
                    </Badge>
                  ))}
                </div>

                {/* Interests tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {userData.interests.map((interest, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-gray-100"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full flex justify-start mb-4 bg-white p-1 rounded-lg shadow-sm">
                <TabsTrigger value="overview" className="flex-1 max-w-[120px]">
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="activities"
                  className="flex-1 max-w-[120px]"
                >
                  Activities
                </TabsTrigger>
                <TabsTrigger value="teams" className="flex-1 max-w-[120px]">
                  Teams
                </TabsTrigger>
                <TabsTrigger value="stats" className="flex-1 max-w-[120px]">
                  Stats
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="space-y-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <Trophy className="h-8 w-8 mb-2 text-amber-500" />
                        <p className="text-2xl font-bold">
                          {userData.stats.challengesCompleted}
                        </p>
                        <p className="text-xs text-gray-500">Challenges</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <Users className="h-8 w-8 mb-2 text-blue-500" />
                        <p className="text-2xl font-bold">
                          {userData.stats.collaborationsJoined}
                        </p>
                        <p className="text-xs text-gray-500">Collaborations</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <Activity className="h-8 w-8 mb-2 text-green-500" />
                        <p className="text-2xl font-bold">
                          {userData.stats.eventsAttended}
                        </p>
                        <p className="text-xs text-gray-500">Events</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <Zap className="h-8 w-8 mb-2 text-purple-500" />
                        <p className="text-2xl font-bold">
                          {userData.stats.totalPoints}
                        </p>
                        <p className="text-xs text-gray-500">Points</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Upcoming Events */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>Upcoming Events</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                          onClick={() => setCreateEventOpen(true)}
                        >
                          <PlusCircle className="h-4 w-4 mr-1" />
                          Create Event
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.upcomingEvents.map((event) => (
                          <div
                            key={event.id}
                            className="flex items-start space-x-3"
                          >
                            <div
                              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1"
                              style={{
                                backgroundColor: event.teamColor + "20",
                              }}
                            >
                              {event.type === "challenge" && (
                                <Trophy
                                  className="h-5 w-5"
                                  style={{ color: event.teamColor }}
                                />
                              )}
                              {event.type === "exploration" && (
                                <Search
                                  className="h-5 w-5"
                                  style={{ color: event.teamColor }}
                                />
                              )}
                              {event.type === "collaboration" && (
                                <Users
                                  className="h-5 w-5"
                                  style={{ color: event.teamColor }}
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{event.title}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {event.type}
                                </Badge>
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {event.date}
                                </div>
                                <div className="flex items-center mt-1">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {event.location}
                                </div>
                                <div className="flex items-center mt-1">
                                  <Users className="h-3 w-3 mr-1" />
                                  {event.team}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs"
                      >
                        View All Events
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.activity.slice(0, 3).map((activity, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-purple-100">
                              {activity.type === "challenge_created" && (
                                <Trophy className="h-4 w-4 text-purple-500" />
                              )}
                              {activity.type === "challenge_accepted" && (
                                <Check className="h-4 w-4 text-green-500" />
                              )}
                              {activity.type === "team_joined" && (
                                <UserPlus className="h-4 w-4 text-blue-500" />
                              )}
                              {activity.type === "collaboration_started" && (
                                <Users className="h-4 w-4 text-amber-500" />
                              )}
                              {activity.type === "badge_earned" && (
                                <Award className="h-4 w-4 text-pink-500" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{activity.title}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {activity.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => setActiveTab("activities")}
                      >
                        View All Activities
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity History</CardTitle>
                    <CardDescription>
                      Your recent engagements and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="relative pl-6 border-l border-gray-200 space-y-8">
                        {userData.activity
                          .concat(userData.activity)
                          .map((activity, idx) => (
                            <div key={idx} className="relative">
                              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-white border border-gray-200">
                                {activity.type === "challenge_created" && (
                                  <Trophy className="h-3 w-3 text-purple-500" />
                                )}
                                {activity.type === "challenge_accepted" && (
                                  <Check className="h-3 w-3 text-green-500" />
                                )}
                                {activity.type === "team_joined" && (
                                  <UserPlus className="h-3 w-3 text-blue-500" />
                                )}
                                {activity.type === "collaboration_started" && (
                                  <Users className="h-3 w-3 text-amber-500" />
                                )}
                                {activity.type === "badge_earned" && (
                                  <Award className="h-3 w-3 text-pink-500" />
                                )}
                              </div>

                              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-medium">
                                    {activity.title}
                                  </h3>
                                  <Badge variant="outline" className="text-xs">
                                    {activity.type.split("_").join(" ")}
                                  </Badge>
                                </div>

                                {activity.team && (
                                  <div className="flex items-center text-sm text-gray-500 mt-2">
                                    <Users className="h-4 w-4 mr-1" />
                                    <span>{activity.team}</span>
                                  </div>
                                )}

                                {activity.challenge && (
                                  <div className="flex items-center text-sm text-gray-500 mt-2">
                                    <Trophy className="h-4 w-4 mr-1" />
                                    <span>{activity.challenge}</span>
                                  </div>
                                )}

                                {activity.project && (
                                  <div className="flex items-center text-sm text-gray-500 mt-2">
                                    <Target className="h-4 w-4 mr-1" />
                                    <span>{activity.project}</span>
                                  </div>
                                )}

                                <div className="flex items-center justify-between mt-3">
                                  <span className="text-xs text-gray-400">
                                    {activity.date}
                                  </span>

                                  <div className="flex space-x-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6"
                                    >
                                      <Heart className="h-3 w-3 text-gray-400 hover:text-red-500" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6"
                                    >
                                      <MessageCircle className="h-3 w-3 text-gray-400" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="teams" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Teams */}
                  <Card className="md:col-span-2">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>My Teams</CardTitle>
                        <Button
                          size="sm"
                          onClick={() => setInviteTeamOpen(true)}
                        >
                          <UserPlus className="h-4 w-4 mr-1" />
                          Join Team
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.teams.map((team) => (
                          <div
                            key={team.id}
                            className="flex items-start p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div
                              className="flex-shrink-0 w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                              style={{ backgroundColor: team.color }}
                            >
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium flex items-center">
                                  {team.name}
                                  {team.role === "Lead" && (
                                    <Badge
                                      className="ml-2 text-xs"
                                      style={{
                                        backgroundColor: team.color,
                                        color: "white",
                                      }}
                                    >
                                      Lead
                                    </Badge>
                                  )}
                                </h3>
                                <Button variant="ghost" size="sm">
                                  View Team
                                </Button>
                              </div>
                              <div className="mt-2 grid grid-cols-3 gap-4 text-sm">
                                <div className="flex flex-col items-center bg-gray-50 p-2 rounded">
                                  <Trophy className="h-4 w-4 text-amber-500 mb-1" />
                                  <span className="font-medium">12</span>
                                  <span className="text-xs text-gray-500">
                                    Challenges
                                  </span>
                                </div>
                                <div className="flex flex-col items-center bg-gray-50 p-2 rounded">
                                  <Users className="h-4 w-4 text-blue-500 mb-1" />
                                  <span className="font-medium">8</span>
                                  <span className="text-xs text-gray-500">
                                    Members
                                  </span>
                                </div>
                                <div className="flex flex-col items-center bg-gray-50 p-2 rounded">
                                  <Star className="h-4 w-4 text-purple-500 mb-1" />
                                  <span className="font-medium">75%</span>
                                  <span className="text-xs text-gray-500">
                                    Win Rate
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Create Team Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Create a Team</CardTitle>
                      <CardDescription>
                        Start your own team and invite others
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-6">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        {/* <Plus className="h-8 w-8 text-gray-400" /> */}
                      </div>
                      <p className="text-sm text-gray-500 text-center mb-4">
                        Create a new team to participate in challenges,
                        collaborations, and more!
                      </p>
                      <Button>Create New Team</Button>
                    </CardContent>
                  </Card>

                  {/* Find Teams Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Find Teams</CardTitle>
                      <CardDescription>
                        Discover teams that match your interests
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.suggestions
                          .filter((s) => s.type === "team")
                          .map((team) => (
                            <div
                              key={team.id}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center">
                                <div
                                  className="h-10 w-10 rounded-full mr-3 flex items-center justify-center"
                                  style={{ backgroundColor: team.color }}
                                >
                                  <Users className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">{team.name}</p>
                                  <div className="flex items-center text-xs text-gray-500">
                                    <Users className="h-3 w-3 mr-1" />
                                    <span>12 members</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-600 border-green-200 mb-1"
                                >
                                  {team.matchPercentage}% Match
                                </Badge>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-xs"
                                >
                                  View Team
                                </Button>
                              </div>
                            </div>
                          ))}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-xs"
                        >
                          View More Teams
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;