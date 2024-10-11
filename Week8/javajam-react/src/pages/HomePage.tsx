import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CoffeeIcon, MusicIcon, Cookie, MicVocal } from "lucide-react";
import restaurantImage from "../assets/restaurant.jpg";
import mapImage from "../assets/map.png";
import Navbar from "@/components/ui/navbar";

const HomePage = () => {
  return (
    <div className="bg-[#F3E8D3] min-h-screen font-sans text-[#4A362A]">
      <Card className="max-w-6xl mx-auto shadow-lg my-auto bg-white border border-[#B08D57]">
        <CardHeader className="bg-[#8C4B23] text-white mx-auto my-auto rounded-md">
          <CardTitle className="text-4xl font-bold text-center">JavaJam Coffee House</CardTitle>
          <CardDescription className="text-center text-[#F1D1B5]">Follow the Winding Road to JavaJam</CardDescription>
        </CardHeader>

        <Navbar/>

        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <Card className="flex-1 h-80 shadow-md border border-[#B08D57] my-9">
              <CardContent className="p-0">
                <img src={restaurantImage} alt="JavaJam Coffee House" className="w-full h-full rounded" />
              </CardContent>
            </Card>
            <Card className="flex-1 shadow-md border border-[#B08D57]">
              <CardHeader>
                <CardTitle>Welcome to JavaJam</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li className="flex items-center">
                    <CoffeeIcon className="mr-2 h-4 w-4 text-blue-900" />
                    Coffee and Tea
                  </li>
                  <li className="flex items-center">
                    <Cookie className="mr-2 h-4 w-4 text-blue-900" />
                    Bagels, Muffins, and Organic Snacks{" "}
                  </li>
                  <li className="flex items-center">
                    <MusicIcon className="mr-2 h-4 w-4 text-blue-900" />
                    Music and Poetry Readings{" "}
                  </li>
                  <li className="flex items-center">
                    <MicVocal className="mr-2 h-4 w-4 text-blue-900" />
                    Open Mic Night Every Friday{" "}
                  </li>
                </ul>
                <Card className="bg-[#F1D1B5] mt-4 border border-[#B08D57]">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="w-1/2">
                      <p className="font-semibold text-lg mb-2">Visit Us</p>
                      <p>542321 Route 42</p>
                      <p>Ellison Bay, WI 54210</p>
                      <p>888-555-8888</p>
                    </div>
                    <div className="w-1/2">
                      <img
                        src={mapImage}
                        className="w-full h-auto rounded-lg shadow-md"
                        alt="Map showing JavaJam Coffee House"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </CardContent>

        <CardContent className="bg-[#8C4B23] text-white text-center py-4 mt-8 rounded-md">
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
