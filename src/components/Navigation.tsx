import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Masterclasses", path: "/masterclass" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-foreground font-bold text-xl">
              Veredian Growth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary-dark text-white" asChild>
                  <Link to="/masterclass">Join Masterclass</Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{user.email?.split('@')[0] || 'Account'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary-dark text-white" asChild>
                  <Link to="/masterclass">Join Masterclass</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                {user ? (
                  <>
                    <Button variant="hero" size="sm" className="w-full" asChild>
                      <Link to="/masterclass" onClick={() => setIsOpen(false)}>
                        Join Masterclass
                      </Link>
                    </Button>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <span className="text-sm text-muted-foreground">
                        {user.email?.split('@')[0]}
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => { signOut(); setIsOpen(false); }}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="w-full mb-2" asChild>
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="hero" size="sm" className="w-full" asChild>
                      <Link to="/masterclass" onClick={() => setIsOpen(false)}>
                        Join Now
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;