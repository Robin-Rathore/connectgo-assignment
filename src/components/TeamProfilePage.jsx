// TeamProfilePage.jsx
import React, { useState } from "react";
import {
  Trophy,
  Users,
  Calendar,
  Search,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  MessageCircle,
  Heart,
  Award,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
  ChevronLeft,
  Filter,
  TrendingUp,
  UserPlus,
  Check,
  PlusCircle,
  Bell,
  Info,
  Settings,
  Menu,
  X,
  Edit,
  Plus,
  LogOut,
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
import { Input } from "./ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Progress } from "./ui/progress";
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

// Sample team data
const teamData = {
  id: "team-1",
  name: "Team Sakura",
  color: "#FF69B4", // Pink
  members: 8,
  ranking: 3,
  totalEngagements: 14,
  competitions: 9,
  collaborations: 5,
  winRate: 75,
  description:
    "A passionate team focused on creative challenges and community building. We love trying new experiences and meeting other teams!",
  upcomingEvents: 3,
  matchPercentage: 87,
  avatar: "/api/placeholder/50/50",
  createdAt: "June 2024",
  location: "New York, NY",
};

// Sample team members
const teamMembers = [
  {
    id: 1,
    name: "Mia Chen",
    role: "Team Lead",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 95,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Events Coordinator",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 92,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Member",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 88,
  },
  {
    id: 4,
    name: "Alex Kim",
    role: "Member",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 85,
  },
  {
    id: 5,
    name: "Sophia Patel",
    role: "Member",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 83,
  },
  {
    id: 6,
    name: "Liam Johnson",
    role: "Member",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 81,
  },
  {
    id: 7,
    name: "Olivia Martinez",
    role: "Member",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 79,
  },
  {
    id: 8,
    name: "Noah Thompson",
    role: "Member",
    avatar: "/api/placeholder/40/40",
    matchPercentage: 76,
  },
];

// Sample upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Escape Room Challenge",
    type: "Competition",
    date: "Mar 15, 2025",
    time: "3:00 PM",
    location: "Escape Masters NYC",
    opponent: "Team Ninja",
    status: "Confirmed",
  },
  {
    id: 2,
    title: "International Potluck Picnic",
    type: "Collaboration",
    date: "Mar 22, 2025",
    time: "12:00 PM",
    location: "Central Park",
    opponent: "Team Foodies",
    status: "Pending",
  },
  {
    id: 3,
    title: "Anime Cosplay Challenge",
    type: "Team Hangout",
    date: "Apr 5, 2025",
    time: "5:00 PM",
    location: "AnimeNYC Convention",
    opponent: null,
    status: "Planning",
  },
];

// Sample past events
const pastEvents = [
  {
    id: 4,
    title: "Speed Puzzle Solving",
    type: "Competition",
    date: "Feb 28, 2025",
    result: "Won",
    opponent: "Team Brainiacs",
  },
  {
    id: 5,
    title: "Volleyball Tournament",
    type: "Competition",
    date: "Feb 14, 2025",
    result: "Won",
    opponent: "Team Spikers",
  },
  {
    id: 6,
    title: "Team Movie Night",
    type: "Team Hangout",
    date: "Feb 7, 2025",
    result: null,
    opponent: null,
  },
  {
    id: 7,
    title: "Volunteer for Animal Shelter",
    type: "Collaboration",
    date: "Jan 25, 2025",
    result: null,
    opponent: "Team Paws",
  },
];

// Sample engagement chart data
const engagementData = [
  { name: "Jan", competitions: 2, collaborations: 1, hangouts: 1 },
  { name: "Feb", competitions: 3, collaborations: 1, hangouts: 2 },
  { name: "Mar", competitions: 4, collaborations: 3, hangouts: 0 },
];

// Sample suggested events
const suggestedEvents = [
  {
    id: 101,
    title: "Trivia Night Challenge",
    type: "Competition",
    votes: 24,
    suggestedBy: "Team Brainiac",
    comments: 5,
  },
  {
    id: 102,
    title: "Photography Walk",
    type: "Exploration",
    votes: 18,
    suggestedBy: "Team Pixel",
    comments: 3,
  },
  {
    id: 103,
    title: "Boardgame Marathon",
    type: "Hangout",
    votes: 15,
    suggestedBy: "Team Strategy",
    comments: 2,
  },
];

const TeamProfilePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("overview");
  const [notifications, setNotifications] = useState(3);

  // Calculate color variations based on team color
  const mainColor = teamData.color; // Pink
  const lightColor = "#FFEBF4"; // Light pink
  const secondaryColor = "#FF9DCE"; // Medium pink

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar - Mobile First Design */}
      

      {/* Team Profile Content */}
      <main className="flex-1 container px-4 sm:px-6 lg:px-8 mx-auto py-8">
        {/* Team Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <div
                className="h-16 w-16 rounded-full mr-4 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: mainColor }}
              >
                {teamData.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold">{teamData.name}</h1>
                  <Badge
                    className="ml-2"
                    style={{ backgroundColor: lightColor, color: mainColor }}
                  >
                    Rank #{teamData.ranking}
                  </Badge>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {teamData.location}
                  <span className="mx-2">•</span>
                  <Users className="h-4 w-4 mr-1" />
                  {teamData.members} members
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  Created {teamData.createdAt}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Message {teamData.name}</DialogTitle>
                    <DialogDescription>
                      Send a direct message to coordinate events or discuss
                      collaborations.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <textarea
                      className="min-h-[100px] rounded-md border border-gray-300 p-2 resize-none"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      style={{ backgroundColor: mainColor }}
                    >
                      Send Message
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    style={{ backgroundColor: mainColor }}
                    className="text-white"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Challenge Team
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Challenge {teamData.name}</DialogTitle>
                    <DialogDescription>
                      Set up a friendly competition with this team.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <label className="text-sm font-medium">
                        Challenge Type
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2 mt-1">
                        <option>Speed Puzzle Solving</option>
                        <option>Trivia Night</option>
                        <option>Escape Room Challenge</option>
                        <option>Capture the Flag</option>
                        <option>Volleyball Match</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Suggested Date
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-md border border-gray-300 p-2 mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        className="min-h-[80px] w-full rounded-md border border-gray-300 p-2 mt-1 resize-none"
                        placeholder="Add details about your challenge proposal..."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      style={{ backgroundColor: mainColor }}
                    >
                      Send Challenge
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700">{teamData.description}</p>
          </div>
        </div>

        {/* Team Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">
                Total Engagements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {teamData.totalEngagements}
              </div>
              <div className="flex items-center text-sm mt-2">
                <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{teamData.competitions} Competitions</span>
                <span className="mx-2">•</span>
                <Users className="h-4 w-4 mr-1 text-blue-500" />
                <span>{teamData.collaborations} Collaborations</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Win Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{teamData.winRate}%</div>
              <Progress
                value={teamData.winRate}
                className="h-2 mt-2"
                indicatorClassName="bg-gradient-to-r"
                style={{
                  background: lightColor,
                  "--tw-gradient-from": secondaryColor,
                  "--tw-gradient-to": mainColor,
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {teamData.upcomingEvents}
              </div>
              <div className="flex items-center text-sm mt-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Next event in 12 days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" onValueChange={setCurrentTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Team Engagement Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Team Engagement</CardTitle>
                  <CardDescription>
                    Activity over the last 3 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={engagementData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="competitions" fill={mainColor} />
                        <Bar dataKey="collaborations" fill={secondaryColor} />
                        <Bar dataKey="hangouts" fill={lightColor} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Next scheduled activities</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white"
                          style={{
                            backgroundColor:
                              event.type === "Competition"
                                ? mainColor
                                : event.type === "Collaboration"
                                ? secondaryColor
                                : lightColor,
                          }}
                        >
                          {event.type === "Competition" ? (
                            <Trophy className="h-5 w-5" />
                          ) : event.type === "Collaboration" ? (
                            <Users className="h-5 w-5" />
                          ) : (
                            <Calendar className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{event.title}</h4>
                            <Badge
                              variant={
                                event.status === "Confirmed"
                                  ? "default"
                                  : event.status === "Pending"
                                  ? "outline"
                                  : "secondary"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            {event.date} • {event.time}
                          </p>
                          <div className="flex items-center text-sm mt-1">
                            <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                            <span className="text-gray-600">
                              {event.location}
                            </span>
                            {event.opponent && (
                              <>
                                <span className="mx-2">•</span>
                                <span className="text-gray-600">
                                  vs {event.opponent}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>
                  Past events and accomplishments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline Container */}
                  <div className="border-l-2 border-gray-200 ml-4 pl-8 space-y-6">
                    {pastEvents.map((event, index) => (
                      <div key={event.id} className="relative pb-1">
                        {/* Timeline Dot */}
                        <div
                          className="absolute -left-12 h-8 w-8 rounded-full flex items-center justify-center text-white"
                          style={{
                            backgroundColor:
                              event.type === "Competition"
                                ? mainColor
                                : event.type === "Collaboration"
                                ? secondaryColor
                                : lightColor,
                          }}
                        >
                          {event.type === "Competition" ? (
                            <Trophy className="h-4 w-4" />
                          ) : event.type === "Collaboration" ? (
                            <Users className="h-4 w-4" />
                          ) : (
                            <Calendar className="h-4 w-4" />
                          )}
                        </div>

                        {/* Event Content */}
                        <div>
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-gray-500">
                              {event.date}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {event.type}
                            {event.opponent && (
                              <span> vs {event.opponent}</span>
                            )}
                          </p>
                          {event.result && (
                            <Badge
                              className="mt-2"
                              style={{
                                backgroundColor:
                                  event.result === "Won"
                                    ? "#ECFDF5"
                                    : "#FEF2F2",
                                color:
                                  event.result === "Won"
                                    ? "#059669"
                                    : "#DC2626",
                              }}
                            >
                              {event.result}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Load More Activities
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Current members and match percentages
                  </CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button style={{ backgroundColor: mainColor }}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Invite Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Invite New Member</DialogTitle>
                      <DialogDescription>
                        Search for users and see their match percentage with
                        your team.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search users..." className="pl-8" />
                      </div>
                      <div className="max-h-[300px] overflow-y-auto">
                        {/* Suggested users */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src="/api/placeholder/40/40" />
                                <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">Jason Doe</p>
                                <p className="text-sm text-gray-500">
                                  Joined May 2024
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Badge
                                style={{
                                  backgroundColor: lightColor,
                                  color: mainColor,
                                }}
                              >
                                94% Match
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-2"
                              >
                                <UserPlus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src="/api/placeholder/40/40" />
                                <AvatarFallback>LS</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">Laura Smith</p>
                                <p className="text-sm text-gray-500">
                                  Joined Jun 2024
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Badge
                                style={{
                                  backgroundColor: lightColor,
                                  color: mainColor,
                                }}
                              >
                                89% Match
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-2"
                              >
                                <UserPlus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src="/api/placeholder/40/40" />
                                <AvatarFallback>RJ</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">Robert Johnson</p>
                                <p className="text-sm text-gray-500">
                                  Joined Aug 2024
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Badge
                                style={{
                                  backgroundColor: lightColor,
                                  color: mainColor,
                                }}
                              >
                                83% Match
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-2"
                              >
                                <UserPlus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          Custom Invitation
                        </label>
                        <Input
                          placeholder="Enter email address"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Message</label>
                        <textarea
                          className="min-h-[80px] w-full rounded-md border border-gray-300 p-2 mt-1 resize-none"
                          placeholder="Add a personal message to your invitation..."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        style={{ backgroundColor: mainColor }}
                      >
                        Send Invitations
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Member
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Match %
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="bg-white border-b hover:bg-gray-50"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback>
                                  {member.name.charAt(0)}
                                  {member.name.split(" ")[1].charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="font-medium">{member.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">{member.role}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div
                                className="h-2 w-16 rounded-full mr-2 overflow-hidden"
                                style={{ backgroundColor: lightColor }}
                              >
                                <div
                                  className="h-full rounded-full"
                                  style={{
                                    width: `${member.matchPercentage}%`,
                                    backgroundColor: mainColor,
                                  }}
                                ></div>
                              </div>
                              <span>{member.matchPercentage}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <MessageCircle className="h-4 w-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    {/* <MoreVertical className="h-4 w-4" /> */}
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Change Role</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    {/* <UserMinus className="mr-2 h-4 w-4" /> */}
                                    <span>Remove from Team</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Match Analysis</CardTitle>
                <CardDescription>
                  How well your team members fit together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Overall Team Chemistry
                    </h3>
                    <div className="flex items-center justify-center">
                      <div
                        className="relative h-40 w-40 rounded-full flex items-center justify-center"
                        style={{
                          background: `conic-gradient(${mainColor} ${
                            teamData.matchPercentage * 3.6
                          }deg, ${lightColor} 0deg)`,
                        }}
                      >
                        <div className="absolute h-32 w-32 rounded-full bg-white flex items-center justify-center flex-col">
                          <span className="text-3xl font-bold">
                            {teamData.matchPercentage}%
                          </span>
                          <span className="text-sm text-gray-500">
                            Team Match
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Skill Distribution
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Creative Skills</span>
                          <span>85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2"
                          style={{
                            backgroundColor: lightColor,
                            "--tw-gradient-from": mainColor,
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Technical Skills</span>
                          <span>78%</span>
                        </div>
                        <Progress
                          value={78}
                          className="h-2"
                          style={{
                            backgroundColor: lightColor,
                            "--tw-gradient-from": mainColor,
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Strategic Thinking</span>
                          <span>92%</span>
                        </div>
                        <Progress
                          value={92}
                          className="h-2"
                          style={{
                            backgroundColor: lightColor,
                            "--tw-gradient-from": mainColor,
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Team Cooperation</span>
                          <span>90%</span>
                        </div>
                        <Progress
                          value={90}
                          className="h-2"
                          style={{
                            backgroundColor: lightColor,
                            "--tw-gradient-from": mainColor,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">Team Events</h2>
                <p className="text-gray-500">
                  Manage your team's activities and challenges
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button style={{ backgroundColor: mainColor }}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Create Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Create New Event</DialogTitle>
                      <DialogDescription>
                        Set up a new event for your team or challenge another
                        team
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4">
                          <label className="text-sm font-medium">
                            Event Type
                          </label>
                          <select className="w-full rounded-md border border-gray-300 p-2 mt-1">
                            <option>Competition</option>
                            <option>Collaboration</option>
                            <option>Team Hangout</option>
                            <option>Exploration</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          Event Title
                        </label>
                        <Input
                          placeholder="Enter event title"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Date</label>
                          <Input type="date" className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Time</label>
                          <Input type="time" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Location</label>
                        <Input placeholder="Enter location" className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          Description
                        </label>
                        <textarea
                          className="min-h-[80px] w-full rounded-md border border-gray-300 p-2 mt-1 resize-none"
                          placeholder="Describe your event..."
                        />
                      </div>
                      <div>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Challenge another team
                        </label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        style={{ backgroundColor: mainColor }}
                      >
                        Create Event
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="upcoming">
              <TabsList className="mb-6">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardHeader
                        className="pb-2"
                        style={{
                          borderBottom: `4px solid ${
                            event.type === "Competition"
                              ? mainColor
                              : event.type === "Collaboration"
                              ? secondaryColor
                              : lightColor
                          }`,
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">
                              {event.title}
                            </CardTitle>
                            <CardDescription>{event.type}</CardDescription>
                          </div>
                          <Badge
                            variant={
                              event.status === "Confirmed"
                                ? "default"
                                : event.status === "Pending"
                                ? "outline"
                                : "secondary"
                            }
                          >
                            {event.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{event.date}</span>
                            <span className="mx-1">•</span>
                            <Clock className="h-4 w-4 mr-1 text-gray-400" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{event.location}</span>
                          </div>
                          {event.opponent && (
                            <div className="flex items-center text-sm">
                              <Users className="h-4 w-4 mr-2 text-gray-400" />
                              <span>vs {event.opponent}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 flex justify-between">
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Discuss
                        </Button>
                        <Button
                          style={{ backgroundColor: mainColor }}
                          className="text-white"
                          size="sm"
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}

                  {/* Create New Event Card */}
                  <Card className="border-dashed border-2 bg-gray-50 flex flex-col items-center justify-center p-6">
                    <PlusCircle className="h-10 w-10 mb-2 text-gray-400" />
                    <p className="text-lg font-medium text-gray-600 mb-1">
                      Create New Event
                    </p>
                    <p className="text-sm text-gray-500 text-center mb-4">
                      Plan team activities or challenge others
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button style={{ backgroundColor: mainColor }}>
                          <Calendar className="h-4 w-4 mr-2" />
                          Create Event
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        {/* Same dialog content as above */}
                      </DialogContent>
                    </Dialog>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="space-y-4">
                  {pastEvents.map((event) => (
                    <Card key={event.id}>
                      <div className="md:flex">
                        <div
                          className="md:w-2 h-full"
                          style={{
                            backgroundColor:
                              event.type === "Competition"
                                ? mainColor
                                : event.type === "Collaboration"
                                ? secondaryColor
                                : lightColor,
                          }}
                        ></div>
                        <div className="flex-1 p-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="text-lg font-medium">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {event.type} • {event.date}
                              </p>
                            </div>
                            {event.result && (
                              <Badge
                                className="mt-2 md:mt-0"
                                style={{
                                  backgroundColor:
                                    event.result === "Won"
                                      ? "#ECFDF5"
                                      : "#FEF2F2",
                                  color:
                                    event.result === "Won"
                                      ? "#059669"
                                      : "#DC2626",
                                }}
                              >
                                {event.result}
                              </Badge>
                            )}
                          </div>
                          {event.opponent && (
                            <div className="flex items-center text-sm mt-2">
                              <Users className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-gray-600">
                                vs {event.opponent}
                              </span>
                            </div>
                          )}
                          <div className="flex justify-end mt-4 space-x-2">
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Feedback
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              style={{
                                color: mainColor,
                                borderColor: mainColor,
                              }}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="challenges">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Received Challenges</CardTitle>
                      <CardDescription>
                        Teams that want to compete with you
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between bg-gray-50 p-3 rounded-md">
                          <div className="flex items-start">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src="/api/placeholder/40/40" />
                              <AvatarFallback>TN</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Team Ninja</p>
                              <p className="text-sm">Escape Room Challenge</p>
                              <p className="text-xs text-gray-500">
                                Mar 15, 2025 • 3:00 PM
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              style={{ backgroundColor: mainColor }}
                              className="text-white"
                            >
                              Accept
                            </Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start justify-between bg-gray-50 p-3 rounded-md">
                          <div className="flex items-start">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src="/api/placeholder/40/40" />
                              <AvatarFallback>TG</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Team Gadget</p>
                              <p className="text-sm">
                                Trivia Night Competition
                              </p>
                              <p className="text-xs text-gray-500">
                                Mar 28, 2025 • 7:00 PM
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              style={{ backgroundColor: mainColor }}
                              className="text-white"
                            >
                              Accept
                            </Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Sent Challenges</CardTitle>
                      <CardDescription>
                        Teams you have challenged
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between bg-gray-50 p-3 rounded-md">
                          <div className="flex items-start">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src="/api/placeholder/40/40" />
                              <AvatarFallback>TF</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Team Foodies</p>
                              <p className="text-sm">
                                International Potluck Picnic
                              </p>
                              <p className="text-xs text-gray-500">
                                Mar 22, 2025 • 12:00 PM
                              </p>
                            </div>
                          </div>
                          <Badge>Pending</Badge>
                        </div>

                        <div className="flex items-start justify-between bg-gray-50 p-3 rounded-md">
                          <div className="flex items-start">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src="/api/placeholder/40/40" />
                              <AvatarFallback>TS</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Team Spark</p>
                              <p className="text-sm">DIY Craft Challenge</p>
                              <p className="text-xs text-gray-500">
                                Apr 12, 2025 • 2:00 PM
                              </p>
                            </div>
                          </div>
                          <Badge variant="outline">Canceled</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Find Teams to Challenge</CardTitle>
                      <CardDescription>
                        Discover teams with similar interests
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-4">
                        <Input placeholder="Search teams..." className="mr-2" />
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-4">
                          <div className="flex items-center">
                            <div
                              className="h-10 w-10 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold"
                              style={{ backgroundColor: "#5C6BC0" }}
                            >
                              TB
                            </div>
                            <div>
                              <p className="font-medium">Team Brainiac</p>
                              <p className="text-xs text-gray-500">
                                6 members • NYC
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm">92% Match</span>
                          </div>
                          <div className="mt-2 text-xs">
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Trivia
                            </span>
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Puzzles
                            </span>
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Strategy
                            </span>
                          </div>
                          <Button
                            className="w-full mt-3"
                            style={{ backgroundColor: mainColor }}
                          >
                            Challenge
                          </Button>
                        </div>

                        <div className="border rounded-md p-4">
                          <div className="flex items-center">
                            <div
                              className="h-10 w-10 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold"
                              style={{ backgroundColor: "#66BB6A" }}
                            >
                              TE
                            </div>
                            <div>
                              <p className="font-medium">Team Explorer</p>
                              <p className="text-xs text-gray-500">
                                8 members • NYC
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm">87% Match</span>
                          </div>
                          <div className="mt-2 text-xs">
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Outdoors
                            </span>
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Treasure Hunt
                            </span>
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Photography
                            </span>
                          </div>
                          <Button
                            className="w-full mt-3"
                            style={{ backgroundColor: mainColor }}
                          >
                            Challenge
                          </Button>
                        </div>

                        <div className="border rounded-md p-4">
                          <div className="flex items-center">
                            <div
                              className="h-10 w-10 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold"
                              style={{ backgroundColor: "#FF7043" }}
                            >
                              TF
                            </div>
                            <div>
                              <p className="font-medium">Team Flame</p>
                              <p className="text-xs text-gray-500">
                                5 members • NYC
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm">83% Match</span>
                          </div>
                          <div className="mt-2 text-xs">
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Sports
                            </span>
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Volleyball
                            </span>
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded mr-1 mb-1">
                              Flag Football
                            </span>
                          </div>
                          <Button
                            className="w-full mt-3"
                            style={{ backgroundColor: mainColor }}
                          >
                            Challenge
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};


export default TeamProfilePage;