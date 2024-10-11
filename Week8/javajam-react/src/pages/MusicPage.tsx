import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Disc } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import stevieNicks from "../assets/stevie-nicks.png";
import billyJoel from "../assets/billy-joel.jpg";

const MusicPage = () => {
  return (
    <div className="bg-[#F3E8D3] min-h-screen font-sans text-[#4A362A]">
      <Card className="max-w-6xl mx-auto shadow-lg my-auto bg-white border border-[#B08D57]">
        <Link to="/HomePage">
          <CardHeader className="bg-[#8C4B23] text-white mx-auto my-auto rounded-md">
            <CardTitle className="text-4xl font-bold text-center">JavaJam Coffee House</CardTitle>
            <CardDescription className="text-center text-[#F1D1B5]">Follow the Winding Road to JavaJam</CardDescription>
          </CardHeader>
        </Link>
        <Navbar />

        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Music at JavaJam</h1>
          <p className="text-lg text-gray-600 mb-4">
            The first Friday night each month at JavaJam is a special night. Join us from 8pm to 11pm for some music you
            won't want to miss.
          </p>

          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Music className="text-red-600" /> January
            </h2>
            <div className="flex items-start gap-6">
              <img
                src={stevieNicks}
                alt="Stevie Nicks"
                className="artist-img rounded-md shadow-lg w-40 h-40 object-cover"
              />
              <div className="music-description flex-1">
                <p className="text-gray-600 mb-4">
                  Stevie Nicks entertains with her melodic folk style.
                  <br />
                  <b className="flex items-center mt-3">
                    <Disc className="mx-4" />
                    CDs are now available!
                  </b>
                </p>
                <audio controls className="w-full">
                  <source src="./audio/gypsy.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Music className="text-red-600" /> February
            </h2>
            <div className="flex items-start gap-6">
              <img
                src={billyJoel}
                alt="Billy Joel"
                className="artist-img rounded-md shadow-lg w-40 h-40 object-cover"
              />
              <div className="music-description flex-1">
                <p className="text-gray-600 mb-4">
                  Billy Joel is back from his tour. New songs. New stories.
                  <br />
                  <b className="flex items-center mt-3">
                    <Disc className="mx-4" />
                    CDs are now available!
                  </b>
                </p>
                <audio controls className="w-full">
                  <source src="./audio/piano-man.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
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

export default MusicPage;
