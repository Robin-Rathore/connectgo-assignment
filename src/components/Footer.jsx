// TeamChallengesFooter.jsx
import React from 'react';
import { 
  Heart, 
  Users, 
  Trophy, 
  Calendar, 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
//   GitHub, 
  Youtube, 
  ArrowRight, 
  MessageCircle, 
  Globe 
} from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  // Footer Sections Data
  const aboutLinks = [
    { text: "Our Mission", href: "/about/mission" },
    { text: "Our Team", href: "/team-profile" },
    { text: "Careers", href: "/careers" },
    { text: "Press Kit", href: "/press" },
    { text: "Partners", href: "/partners" },
  ];
  
  const resourceLinks = [
    { text: "Community Guidelines", href: "/guidelines" },
    { text: "Team Formation Guide", href: "/team-formation" },
    { text: "Challenge Ideas", href: "/resources/challenge-ideas" },
    { text: "Success Stories", href: "/stories" },
    { text: "Blog", href: "/blog" },
  ];
  
  const supportLinks = [
    { text: "Help Center", href: "/help" },
    { text: "Safety Tips", href: "/safety" },
    { text: "Contact Support", href: "/support" },
    { text: "Report an Issue", href: "/report" },
    { text: "FAQ", href: "/faq" },
  ];
  
  const featureLinks = [
    { text: "Challenge Creation", href: "/features/create", icon: <Trophy className="h-4 w-4 " /> },
    { text: "Team Management", href: "/team-profile", icon: <Users className="h-4 w-4" /> },
    { text: "Activity Calendar", href: "/features/calendar", icon: <Calendar className="h-4 w-4 " /> },
    { text: "Team Match Finder", href: "/features/match", icon: <Heart className="h-4 w-4" /> },
    { text: "Explore Nearby", href: "/features/explore", icon: <Search className="h-4 w-4" /> },
  ];
  
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    // { icon: <GitHub className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
  ];
  
  const popularChallenges = [
    { name: "Speed Puzzle Challenge", count: "2.3K teams" },
    { name: "Central Park Treasure Hunt", count: "1.8K teams" },
    { name: "Volunteer Beach Cleanup", count: "1.5K teams" },
    { name: "Trivia Night Tournament", count: "1.2K teams" },
  ];
  
  const contactInfo = [
    { icon: <Mail className="h-4 w-4 mr-2" />, text: "hello@connectgo.com" },
    { icon: <Phone className="h-4 w-4 mr-2" />, text: "(800) 123-4567" },
    { icon: <MapPin className="h-4 w-4 mr-2" />, text: "123 Connection St, New York, NY 10001" },
    { icon: <Globe className="h-4 w-4 mr-2" />, text: "Available worldwide" },
    { icon: <MessageCircle className="h-4 w-4 mr-2" />, text: "24/7 Support" },
  ];
  
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Information & Newsletter */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center mr-2">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400">
                  ConnectGo
                </span>
              </div>
              
              <p className="mt-4 text-gray-600 pr-4">
                Building communities through team-based challenges and collaborative activities.
                Connect with others, compete, and create lasting friendships.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Join our newsletter</h4>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-white border-pink-100 focus:border-pink-300" 
                  />
                  <Button className="bg-pink-500 hover:bg-pink-600 shrink-0">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Get weekly updates on new challenges and team events.
                </p>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h4 className="font-semibold text-gray-800 mb-3">Contact Us</h4>
              <ul className="space-y-2">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={"/link.href"} 
                    className="text-gray-600 hover:text-pink-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={"/link.href"} 
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Challenges */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Popular Challenges</h4>
            <ul className="space-y-3">
              {popularChallenges.map((challenge, i) => (
                <li key={i} className="group">
                  <a href="#" className="block">
                    <span className="block text-gray-700 font-medium group-hover:text-pink-500 transition-colors">
                      {challenge.name}
                    </span>
                    <span className="text-xs text-gray-500">{challenge.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Features Highlight */}
        <div className="mt-8 mb-12 bg-white rounded-xl p-6 shadow-sm border border-pink-100">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Key Features</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {featureLinks.map((feature, i) => (
              <a 
                key={i} 
                href={feature.href}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-pink-50 transition-colors text-center"
              >
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </a>
            ))}
          </div>
        </div>
        
        <Separator className="bg-pink-100" />
        
        {/* Social Links & Legal */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                className="h-10 w-10 rounded-full bg-white border border-pink-100 hover:border-pink-300 flex items-center justify-center text-gray-600 hover:text-pink-500 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm text-gray-600">
              © {year} ConnectGo. All rights reserved.
            </div>
            <div className="mt-2 space-x-4 text-sm">
              <Link to={"/privacy"} className="text-gray-600 hover:text-pink-500 transition-colors">Privacy Policy</Link>
              <Link to={"/terms"} className="text-gray-600 hover:text-pink-500 transition-colors">Terms of Service</Link>
              <Link to={"/cookies"} className="text-gray-600 hover:text-pink-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
        
        {/* App Badges */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-3">Download the ConnectGo App</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-black text-white rounded-lg px-4 py-2 flex items-center hover:bg-gray-800 transition-colors">
              <svg className="h-6 w-6 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 10.29c-.06-.23-.17-.46-.3-.67l-8.73-15.22c-.3-.5-.94-.07-.94.47v19.06c0 .53.64.97.94.47l8.73-15.22c.14-.21.25-.44.3-.67v11.78z"/>
                <path d="M3.5 20.92c-1.37 0-2.5-1.12-2.5-2.5v-11.84c0-1.38 1.13-2.5 2.5-2.5h2.98v16.84h-2.98z"/>
              </svg>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="font-semibold text-sm">App Store</div>
              </div>
            </a>
            <a href="#" className="bg-black text-white rounded-lg px-4 py-2 flex items-center hover:bg-gray-800 transition-colors">
              <svg className="h-6 w-6 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.83 10.37l-16.48-9.53c-.33-.2-.75.03-.75.42v20.48c0 .39.42.62.75.42l16.48-9.53c.27-.16.27-.54 0-.7z"/>
              </svg>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="font-semibold text-sm">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Achievement Trust Badges */}
        <div className="mt-8 flex justify-center space-x-6">
          <div className="text-center">
            <div className="text-pink-500 font-bold text-2xl">100K+</div>
            <div className="text-xs text-gray-500">Active Teams</div>
          </div>
          <div className="text-center">
            <div className="text-pink-500 font-bold text-2xl">5M+</div>
            <div className="text-xs text-gray-500">Users</div>
          </div>
          <div className="text-center">
            <div className="text-pink-500 font-bold text-2xl">50K+</div>
            <div className="text-xs text-gray-500">Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-pink-500 font-bold text-2xl">200+</div>
            <div className="text-xs text-gray-500">Cities</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;