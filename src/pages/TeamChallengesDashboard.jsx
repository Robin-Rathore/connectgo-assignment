// TeamChallengesDashboard.jsx
import React, { useState } from 'react';
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
  Info
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { Progress } from '../components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Import the navbar and footer components we created
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TeamChallengesDashboard = () => {
  // State for active challenges tab
  const [activeTab, setActiveTab] = useState('all');
  
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mock data for upcoming challenges
  const upcomingChallenges = [
    {
      id: 1,
      title: "NYC Central Park Treasure Hunt",
      date: "March 15, 2025",
      time: "10:00 AM",
      location: "Central Park, New York",
      teamName: "Team Goku",
      teamColor: "#FF7D00", // Orange for Team Goku
      teamMembers: 7,
      challengingTeam: "The Explorers",
      challengingTeamColor: "#3498DB", // Blue
      category: "outdoor",
      image: "https://watsonadventures.com/wp-content/uploads/2016/03/watson-adventures-best-hunt-photos-central-park-e1597438581530.jpg",
      interested: 34
    },
    {
      id: 2,
      title: "Speed Puzzle Championship",
      date: "March 10, 2025",
      time: "7:00 PM",
      location: "Community Center, Brooklyn",
      teamName: "Mind Benders",
      teamColor: "#9B59B6", // Purple
      teamMembers: 5,
      challengingTeam: "Puzzle Masters",
      challengingTeamColor: "#2ECC71", // Green
      category: "indoor",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3f/58/e6/a-recent-group-from-the.jpg?w=500&h=500&s=1",
      interested: 28
    },
    {
      id: 3,
      title: "Anime Cosplay Challenge",
      date: "March 20, 2025",
      time: "2:00 PM",
      location: "Convention Center, Manhattan",
      teamName: "Otaku Squad",
      teamColor: "#E74C3C", // Red
      teamMembers: 6,
      challengingTeam: "Cosplay Kings",
      challengingTeamColor: "#1ABC9C", // Turquoise
      category: "indoor",
      image: "https://dam.mediacorp.sg/image/upload/s--CvziCEI3--/c_crop,h_960,w_1280,x_0,y_0/c_fill,g_auto,h_523,w_693/f_auto,q_auto/v1/mediacorp/cna/image/2023/12/05/shirumimi_with_cosplayer_friends_anime_festival_asia_2023.jpg?itok=xARQ6b-p",
      interested: 42
    },
    {
      id: 4,
      title: "Beach Volleyball Tournament",
      date: "March 25, 2025",
      time: "11:00 AM",
      location: "Rockaway Beach, Queens",
      teamName: "Sand Strikers",
      teamColor: "#F1C40F", // Yellow
      teamMembers: 8,
      challengingTeam: "Beach Bombers",
      challengingTeamColor: "#34495E", // Dark Blue
      category: "outdoor",
      image: "https://imgs.search.brave.com/IdXnoQmEd_AKvY74R67zY2Q0h4d2dsg9-no8KsljEYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg2/MDEwOTAyL3Bob3Rv/L2ZyaWVuZHMtcGxh/eWluZy12b2xsZXli/YWwuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVRad2doUkRm/UElRVUI4VXJpdlJF/dU5panlXM2ktRTI1/TDkxY0NOeFE1Rk09",
      interested: 39
    }
  ];
  
  // Mock data for team suggestions (based on compatibility)
  const suggestedTeams = [
    {
      id: 1,
      name: "Weekend Warriors",
      color: "#2ECC71", // Green
      matchPercentage: 92,
      activities: ["Hiking", "Board Games", "Trivia"],
      members: 6,
      status: "Open to new members"
    },
    {
      id: 2,
      name: "Urban Explorers",
      color: "#3498DB", // Blue
      matchPercentage: 88,
      activities: ["City Tours", "Photography", "Food Tastings"],
      members: 5,
      status: "Open to new members"
    },
    {
      id: 3,
      name: "Creative Minds",
      color: "#9B59B6", // Purple
      matchPercentage: 85,
      activities: ["Art Workshops", "DIY Crafts", "Escape Rooms"],
      members: 7,
      status: "By invitation"
    }
  ];
  
  // Mock data for top teams leaderboard
  const topTeams = [
    { name: "Team Goku", engagements: 32, wins: 24, color: "#FF7D00" },
    { name: "Brain Busters", engagements: 28, wins: 20, color: "#3498DB" },
    { name: "Adventure Squad", engagements: 25, wins: 18, color: "#2ECC71" },
    { name: "Trivia Kings", engagements: 22, wins: 15, color: "#9B59B6" },
    { name: "Outdoor Explorers", engagements: 20, wins: 14, color: "#E74C3C" }
  ];
  
  // Data for team activity chart
  const activityData = [
    { month: 'Jan', challenges: 4, collaborations: 2, hangouts: 3 },
    { month: 'Feb', challenges: 6, collaborations: 3, hangouts: 4 },
    { month: 'Mar', challenges: 5, collaborations: 4, hangouts: 5 },
    { month: 'Apr', challenges: 8, collaborations: 5, hangouts: 6 },
    { month: 'May', challenges: 10, collaborations: 4, hangouts: 7 },
    { month: 'Jun', challenges: 12, collaborations: 6, hangouts: 8 },
  ];
  
  // Data for challenge types pie chart
  const challengeTypesData = [
    { name: 'Indoor', value: 35, color: '#FF6B9D' },
    { name: 'Outdoor', value: 30, color: '#36A2EB' },
    { name: 'Skills', value: 15, color: '#FFCE56' },
    { name: 'Volunteer', value: 10, color: '#4BC0C0' },
    { name: 'Social', value: 10, color: '#9966FF' }
  ];
  
  // Mock data for trending challenges
  const trendingChallenges = [
    {
      title: "Escape Room Race",
      upvotes: 245,
      comments: 42,
      category: "Indoor",
      description: "Complete the city's top-rated escape room in the fastest time."
    },
    {
      title: "Community Garden Day",
      upvotes: 198,
      comments: 35,
      category: "Volunteer",
      description: "Teams compete to create the most beautiful community garden plot."
    },
    {
      title: "Food Truck Feast",
      upvotes: 176,
      comments: 28,
      category: "Social",
      description: "Visit the most food trucks in one day and rate your experience."
    }
  ];
  
  // Mock data for recent activity feed
  const activityFeed = [
    {
      type: "challenge_accepted",
      team: "Team Goku",
      teamColor: "#FF7D00",
      otherTeam: "Mind Benders",
      otherTeamColor: "#9B59B6",
      challenge: "Trivia Night Showdown",
      time: "2 hours ago"
    },
    {
      type: "new_team_member",
      team: "Urban Explorers",
      teamColor: "#3498DB",
      memberName: "Jessica Chen",
      memberAvatar: "/api/placeholder/40/40",
      time: "3 hours ago"
    },
    {
      type: "collaboration_created",
      team: "Weekend Warriors",
      teamColor: "#2ECC71",
      collaboration: "Neighborhood Cleanup Initiative",
      time: "5 hours ago"
    },
    {
      type: "challenge_completed",
      team: "Adventure Squad",
      teamColor: "#2ECC71",
      challenge: "Manhattan Photo Scavenger Hunt",
      result: "victory",
      time: "1 day ago"
    }
  ];
  
  // Function to handle challenge card carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === upcomingChallenges.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? upcomingChallenges.length - 1 : prev - 1
    );
  };
  
  // Function to render challenge cards based on active tab
  const renderChallengeCards = () => {
    const filteredChallenges = activeTab === 'all' 
      ? upcomingChallenges 
      : upcomingChallenges.filter(challenge => challenge.category === activeTab);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredChallenges.map((challenge) => (
          <Card key={challenge.id} className="overflow-hidden hover:shadow-md transition-shadow py-0">
            <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
            
            <CardHeader className="p-4">
              <div className="flex justify-between items-start">
                <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                  {challenge.category === 'outdoor' ? 'Outdoor' : 'Indoor'}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4 text-gray-400 hover:text-pink-500" />
                </Button>
              </div>
              <CardTitle className="text-lg mt-2">{challenge.title}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Clock className="h-3 w-3 mr-1" /> 
                {challenge.date} at {challenge.time}
              </CardDescription>
              <CardDescription className="flex items-center mt-1">
                <MapPin className="h-3 w-3 mr-1" /> 
                {challenge.location}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div 
                    className="h-3 w-3 rounded-full mr-1" 
                    style={{ backgroundColor: challenge.teamColor }}
                  ></div>
                  <span className="text-sm font-medium">{challenge.teamName}</span>
                </div>
                <span className="text-xs text-gray-500">{challenge.teamMembers} members</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div 
                    className="h-3 w-3 rounded-full mr-1" 
                    style={{ backgroundColor: challenge.challengingTeamColor }}
                  ></div>
                  <span className="text-sm font-medium">{challenge.challengingTeam}</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex justify-between">
              <div className="text-xs text-gray-500">
                {challenge.interested} people interested
              </div>
              <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
                Join
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  // Function to render activity feed items
  const renderActivityFeedItem = (activity) => {
    let icon;
    let content;
    
    switch (activity.type) {
      case 'challenge_accepted':
        icon = <Trophy className="h-4 w-4 text-yellow-500" />;
        content = (
          <span>
            <span className="font-medium" style={{ color: activity.teamColor }}>{activity.team}</span> accepted a challenge from 
            <span className="font-medium" style={{ color: activity.otherTeamColor }}> {activity.otherTeam}</span> for "{activity.challenge}"
          </span>
        );
        break;
      case 'new_team_member':
        icon = <UserPlus className="h-4 w-4 text-green-500" />;
        content = (
          <span>
            <span className="font-medium" style={{ color: activity.teamColor }}>{activity.team}</span> welcomed 
            <span className="font-medium"> {activity.memberName}</span> as a new member
          </span>
        );
        break;
      case 'collaboration_created':
        icon = <Users className="h-4 w-4 text-blue-500" />;
        content = (
          <span>
            <span className="font-medium" style={{ color: activity.teamColor }}>{activity.team}</span> created a new collaboration: 
            <span className="font-medium"> {activity.collaboration}</span>
          </span>
        );
        break;
      case 'challenge_completed':
        icon = <Check className="h-4 w-4 text-green-500" />;
        content = (
          <span>
            <span className="font-medium" style={{ color: activity.teamColor }}>{activity.team}</span> {activity.result === 'victory' ? 'won' : 'completed'} the 
            <span className="font-medium"> {activity.challenge}</span> challenge
          </span>
        );
        break;
      default:
        icon = <Info className="h-4 w-4 text-gray-500" />;
        content = <span>Unknown activity</span>;
    }
    
    return (
      <div className="flex items-start space-x-3 py-3 border-b border-gray-100">
        <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-sm">{content}</div>
          <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-400 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-400 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3f/58/e6/a-recent-group-from-the.jpg?w=1200&h=-1&s=1')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Team. Accept Challenges. Create Connections.</h1>
            <p className="text-xl mb-8">Join thousands of teams competing, collaborating, and creating lasting friendships through fun challenges and activities.</p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-pink-500 hover:bg-gray-100">
                Create a Team
              </Button>
              <Button className="bg-transparent border border-white hover:bg-white/10">
                Find Challenges
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search for teams, challenges, or activities..." 
              className="pl-10 border-pink-100 focus:border-pink-300"
            />
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="border-pink-100 text-gray-600 hover:border-pink-300">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Challenge
            </Button>
          </div>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Welcome and Stats */}
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Welcome back, Sarah!</CardTitle>
                    <CardDescription>Here's what's happening with Team Goku</CardDescription>
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback className="bg-pink-100 text-pink-600">SJ</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">12</div>
                    <div className="text-xs text-gray-500">Active Challenges</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">7</div>
                    <div className="text-xs text-gray-500">Team Members</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">8</div>
                    <div className="text-xs text-gray-500">Victories</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">3rd</div>
                    <div className="text-xs text-gray-500">Leaderboard Rank</div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="text-sm font-medium">Team Match Compatibility</div>
                    <div className="text-sm text-pink-600 font-medium">82%</div>
                  </div>
                  <Progress value={82} className="h-2 bg-pink-100" indicatorClassName="bg-pink-500" />
                  <div className="text-xs text-gray-500 mt-1">Your team has high compatibility with 15 other teams</div>
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Challenges Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Upcoming Challenges</h2>
                <Button variant="ghost" className="text-pink-500 hover:text-pink-600">
                  View all <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
                <TabsList className="bg-pink-50">
                  <TabsTrigger value="all" className="data-[state=active]:bg-white">All</TabsTrigger>
                  <TabsTrigger value="indoor" className="data-[state=active]:bg-white">Indoor</TabsTrigger>
                  <TabsTrigger value="outdoor" className="data-[state=active]:bg-white">Outdoor</TabsTrigger>
                </TabsList>
              </Tabs>
              
              {/* Challenge Cards */}
              {renderChallengeCards()}
            </div>
            
            {/* Team Activity Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Team Activity</CardTitle>
                <CardDescription>Past 6 months participation breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={activityData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="challenges" name="Challenges" fill="#FF6B9D" />
                      <Bar dataKey="collaborations" name="Collaborations" fill="#36A2EB" />
                      <Bar dataKey="hangouts" name="Hangouts" fill="#FFCE56" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Trending Challenge Ideas */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Challenge Ideas</CardTitle>
                <CardDescription>Most popular community suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingChallenges.map((challenge, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-pink-200 transition-colors">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">{challenge.title}</div>
                        <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                          {challenge.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <button className="flex items-center text-xs text-gray-500 hover:text-pink-500">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {challenge.upvotes}
                          </button>
                          <button className="flex items-center text-xs text-gray-500 hover:text-pink-500">
                            <ThumbsDown className="h-3 w-3 mr-1" />
                          </button>
                          <button className="flex items-center text-xs text-gray-500 hover:text-pink-500">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            {challenge.comments}
                          </button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs text-pink-500 hover:text-pink-600">
                          Create Challenge
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-pink-500 hover:text-pink-600 border-pink-100 hover:border-pink-300">
                  View All Trending Ideas
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Team Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle>Suggested Teams</CardTitle>
                <CardDescription>Based on your interests and activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedTeams.map((team) => (
                  <div key={team.id} className="border border-gray-100 rounded-lg p-4 hover:border-pink-200 transition-colors">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div 
                          className="h-3 w-3 rounded-full mr-2" 
                          style={{ backgroundColor: team.color }}
                        ></div>
                        <span className="font-medium">{team.name}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-600">
                        {team.matchPercentage}% Match
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {team.activities.map((activity, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {activity}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <div>{team.members} members</div>
                      <div>{team.status}</div>
                    </div>
                    <Button className="w-full mt-3 bg-pink-500 hover:bg-pink-600 text-white">
                      Request to Join
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-pink-500 hover:text-pink-600 border-pink-100 hover:border-pink-300">
                  View More Teams
                </Button>
              </CardFooter>
            </Card>
            
            {/* Challenge Types Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Challenge Types</CardTitle>
                <CardDescription>Popular categories breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={challengeTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {challengeTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Top Teams Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle>Top Teams</CardTitle>
                <CardDescription>Most active teams this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topTeams.map((team, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 text-center mr-3 font-bold text-gray-400">{index + 1}</div>
                        <div 
                          className="h-2 w-2 rounded-full mr-2" 
                          style={{ backgroundColor: team.color }}
                        ></div>
                        <span>{team.name}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-pink-600">{team.engagements}</span> engagements
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-pink-500 hover:text-pink-600 border-pink-100 hover:border-pink-300">
                  View Full Leaderboard
                </Button>
              </CardFooter>
            </Card>
            
            {/* Recent Activity Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Activity Feed</CardTitle>
                <CardDescription>Recent happenings in your network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {activityFeed.map((activity, index) => (
                    <div key={index}>
                      {renderActivityFeedItem(activity)}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-pink-500 hover:text-pink-600">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamChallengesDashboard;