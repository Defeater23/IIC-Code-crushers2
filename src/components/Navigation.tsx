import { Wallet, ShoppingCart, Bell, Menu, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavigationProps {
  userRole: 'consumer' | 'industry' | 'farmer';
  walletBalance?: number;
  cartItems?: number;
  userName?: string;
}

const Navigation = ({ 
  userRole, 
  walletBalance = 1250.75, 
  cartItems = 3,
  userName = "John Doe"
}: NavigationProps) => {
  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Wheat className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              AgriConnect
            </span>
            <Badge variant="secondary" className="capitalize">
              {userRole}
            </Badge>
          </div>

          {/* Center - Spacer */}
          <div className="hidden md:block">
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
            </Button>

            {/* Wallet (Not for Consumer) */}
            {userRole !== 'consumer' && (
              <div className="flex items-center space-x-2 bg-accent px-3 py-2 rounded-lg">
                <Wallet className="h-4 w-4 text-accent-foreground" />
                <span className="font-medium text-accent-foreground">
                  ₹{walletBalance.toLocaleString('en-IN')}
                </span>
              </div>
            )}

            {/* Mobile menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;