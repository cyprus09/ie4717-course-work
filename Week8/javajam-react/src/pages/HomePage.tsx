import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { CoffeeIcon, MusicIcon, BriefcaseIcon, MenuIcon } from 'lucide-react';
import restaurantImage from "../assets/restaurant.jpg";

const HomePage = () => {
  return (
    <div className="bg-[#F3E8D3] min-h-screen font-sans text-[#4A362A]">
      <Card className="max-w-6xl mx-auto shadow-lg my-8 bg-white border border-[#B08D57]">
        <CardHeader className="bg-[#8C4B23] text-white">
          <CardTitle className="text-4xl font-bold text-center">
            JavaJam Coffee House
          </CardTitle>
          <CardDescription className="text-center text-[#F1D1B5]">
            Follow the Winding Road to JavaJam
          </CardDescription>
        </CardHeader>

        <NavigationMenu className="justify-center my-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] bg-[#F3E8D3]">
                  <li className="row-span-3">
                    <CardTitle className="mb-2">Our Specialties</CardTitle>
                    <p className="text-sm">Discover our range of coffees, teas, and snacks.</p>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-[#4A362A] hover:bg-[#E4A16B]">
                      <CoffeeIcon className="mr-2 h-4 w-4" />
                      <span>Coffee & Tea</span>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-[#4A362A] hover:bg-[#E4A16B]">
                      <MenuIcon className="mr-2 h-4 w-4" />
                      <span>Food Menu</span>
                    </Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">Music</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] bg-[#F3E8D3]">
                  <li>
                    <CardTitle className="mb-2">Live Performances</CardTitle>
                    <p className="text-sm">Check out our upcoming music and poetry events.</p>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-[#4A362A] hover:bg-[#E4A16B]">
                      <MusicIcon className="mr-2 h-4 w-4" />
                      <span>Event Calendar</span>
                    </Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">Jobs</NavigationMenuTrigger>
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

        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <Card className="flex-1 shadow-md border border-[#B08D57]">
              <CardContent className="p-0">
                <img src={restaurantImage} alt="JavaJam Coffee House" className="w-full h-64 object-cover" />
              </CardContent>
            </Card>
            <Card className="flex-1 shadow-md border border-[#B08D57]">
              <CardHeader>
                <CardTitle>Welcome to JavaJam</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Specialty Coffee and Tea</li>
                  <li>Bagels, Muffins, and Organic Snacks</li>
                  <li>Music and Poetry Readings</li>
                  <li>Open Mic Night Every Friday</li>
                </ul>
                <Card className="bg-[#F1D1B5] mt-4 border border-[#B08D57]">
                  <CardContent className="p-4">
                    <p className="font-semibold">Visit Us</p>
                    <p>542321 Route 42</p>
                    <p>Ellison Bay, WI 54210</p>
                    <p>888-555-8888</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </CardContent>

        <CardContent className="bg-[#8C4B23] text-white text-center py-4 mt-8">
          <p className="mb-2">Copyright © 2024 JavaJam Coffee House</p>
          <Button variant="link" className="text-white hover:text-[#F1D1B5] p-0 h-auto">
            mayank@pallai.com
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;