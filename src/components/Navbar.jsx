// TeamProfilePage.jsx
import React, { useState } from "react";
import {
  Trophy,
  Users,
  Search,
  Award,
  PlusCircle,
  Bell,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

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

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTab, setCurrentTab] = useState("overview");
    const [notifications, setNotifications] = useState(3);
  
    // Calculate color variations based on team color
    const mainColor = teamData.color; // Pink
    const lightColor = "#FFEBF4"; // Light pink
    const secondaryColor = "#FF9DCE"; // Medium pink
  return (
    <header
            className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm"
            style={{ borderBottomColor: mainColor }}
          >
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="flex h-16 items-center justify-between">
                {/* Logo and Brand */}
                <div className="flex items-center">
                  <a href="/" className="flex items-center">
                    <div
                      className="h-8 w-8 rounded-full mr-2 flex items-center justify-center"
                      style={{ backgroundColor: mainColor }}
                    >
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-xl hidden sm:inline">
                      ConnectGo
                    </span>
                  </a>
                </div>
    
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                  <Link
                    to={"/team-profile"}
                    className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Teams
                  </Link>
                  <a
                    href="/challenges"
                    className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Challenges
                  </a>
                  <a
                    href="/leaderboard"
                    className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Leaderboard
                  </a>
                  <a
                    href="/explore"
                    className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Explore
                  </a>
                  <Button
                    style={{ backgroundColor: mainColor }}
                    className="text-white"
                  >
                    Create Challenge
                  </Button>
                </nav>
    
                {/* User and Mobile Menu Controls */}
                <div className="flex items-center space-x-2">
                  {/* Notification Bell */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        {notifications > 0 && (
                          <span
                            className="absolute top-1 right-1 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white"
                            style={{ backgroundColor: mainColor }}
                          >
                            {notifications}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64">
                      <div className="p-2 font-medium">Notifications</div>
                      <Separator />
                      <div className="p-2 text-sm">
                        Team Ninja challenged you to Escape Room!
                      </div>
                      <div className="p-2 text-sm">
                        New collaboration request from Team Foodies.
                      </div>
                      <div className="p-2 text-sm">
                        You have a new team match suggestion.
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
    
                  {/* User Avatar */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-8 w-8 rounded-full"
                      >
                         <Avatar className="h-8 w-8">
                          <AvatarImage src="/api/placeholder/32/32" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <div className="flex items-center justify-start gap-2 p-2">
                      <Link to={"./user-profile"} >
                        <div className="flex flex-col space-y-1 leading-none">
                          <p className="font-medium">Mia Chen</p>
                          <p className="text-sm text-gray-500">mia@example.com</p>
                        </div>

                        </Link>
                      </div>
                      <Separator />
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
    
                  {/* Mobile Menu Toggle */}
                  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 sm:w-72">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center">
                            <div
                              className="h-8 w-8 rounded-full mr-2 flex items-center justify-center"
                              style={{ backgroundColor: mainColor }}
                            >
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-lg">ConnectGo</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <Separator />
                        <nav className="flex flex-col space-y-4 mt-4">
                          <a
                            href="/team-profile"
                            className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <Users className="mr-2 h-4 w-4" />
                            Teams
                          </a>
                          <a
                            href="/challenges"
                            className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <Trophy className="mr-2 h-4 w-4" />
                            Challenges
                          </a>
                          <a
                            href="/leaderboard"
                            className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <Award className="mr-2 h-4 w-4" />
                            Leaderboard
                          </a>
                          <a
                            href="/explore"
                            className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <Search className="mr-2 h-4 w-4" />
                            Explore
                          </a>
                          <Button
                            className="w-full justify-center text-white"
                            style={{ backgroundColor: mainColor }}
                          >
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Create Challenge
                          </Button>
                        </nav>
                        <div className="mt-auto pb-4">
                          <Separator className="my-4" />
                          <div className="flex items-center px-2">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/api/placeholder/32/32" />
                              <AvatarFallback>MC</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Mia Chen</p>
                              <p className="text-xs text-gray-500">Team Lead</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            className="w-full justify-start mt-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </header>
  );
};

export default Navbar;