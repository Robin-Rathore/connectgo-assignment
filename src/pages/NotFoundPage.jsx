import React from "react";
import { Search, Home, ArrowLeft, Users, User, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#fdf2f8" }}>
      <Card className="w-full max-w-lg border-0 shadow-lg overflow-hidden">
        <div className="h-4" style={{ background: `linear-gradient(to right, #ff69b4, #f6339a)` }}></div>
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <div className="text-9xl font-bold" style={{ color: "#ff69b4" }}>404</div>
              <Search className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 h-12 w-12 opacity-70" style={{ color: "#f6339a" }} />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-800">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-600">
                The page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="bg-white rounded-lg p-4 border mt-4" style={{ borderColor: "#ff69b4" }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Info className="h-5 w-5" style={{ color: "#f6339a" }} />
                  <span className="font-medium" style={{ color: "#f6339a" }}>Assignment Notice</span>
                </div>
                <p className="text-gray-700">
                  This website is built for assignment purposes only. 
                  Team profiles and user profiles are available, but other features are limited.
                </p>
                
                <div className="flex justify-center gap-6 mt-4">
                  <Link to={"/team-profile"}> <div className="flex flex-col items-center">
                    <Users className="h-8 w-8" style={{ color: "#ff69b4" }} />
                    <span className="text-sm mt-1">Team Profiles</span>
                  </div>
                  </Link>
                  <Link to={"/user-profile"}>
                  <div className="flex flex-col items-center">
                    <User className="h-8 w-8" style={{ color: "#ff69b4" }} />
                    <span className="text-sm mt-1">User Profiles</span>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <Button 
                className="text-white text-lg py-6 px-8 w-full"
                style={{ backgroundColor: "#ff69b4", ":hover": { backgroundColor: "#f6339a" } }}
                onClick={() => window.location.href = '/'}
              >
                <Home className="mr-2 h-5 w-5" /> 
                Go Home
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;