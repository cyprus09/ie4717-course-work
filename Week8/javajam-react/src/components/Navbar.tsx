import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CardTitle } from "@/components/ui/card";
import { CoffeeIcon, MusicIcon, BriefcaseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavigationMenu className="justify-center my-5 mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/HomePage">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[400px] bg-[#F3E8D3]">
                <li className="row-span-3">
                  <CardTitle className="mb-2">Our Specialties</CardTitle>
                  <p className="text-sm">Discover our range of coffees, teas, and snacks.</p>
                </li>
                <li>
                  <Link to="/MenuPage">
                    <Button variant="ghost" className="w-full justify-start text-[#4A362A] hover:bg-[#E4A16B]">
                      <CoffeeIcon className="mr-2 h-4 w-4" />
                      <span>Coffee & Tea</span>
                    </Button>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">
              Music
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[400px] bg-[#F3E8D3]">
                <li>
                  <CardTitle className="mb-2">Live Performances</CardTitle>
                  <p className="text-sm">Check out our upcoming music and poetry events.</p>
                </li>
                <li>
                  <Link to="/MusicPage">
                    <Button variant="ghost" className="w-full justify-start text-[#4A362A] hover:bg-[#E4A16B]">
                      <MusicIcon className="mr-2 h-4 w-4" />
                      <span>Event Calendar</span>
                    </Button>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">
              Jobs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[400px] bg-[#F3E8D3]">
                <li>
                  <CardTitle className="mb-2">Join Our Team</CardTitle>
                  <p className="text-sm">Explore career opportunities at JavaJam.</p>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-[#4A362A] hover:bg-[#E4A16B]">
                    <BriefcaseIcon className="mr-2 h-4 w-4" />
                    <span>Current Openings</span>
                  </Button>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
