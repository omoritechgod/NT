import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Details from "@/components/rotating_card/Details";
import joel from "@/assets/team/expert-s-joel.png";
import emman from "@/assets/team/expert-s-Emma-nnadi.png";
import kenile from "@/assets/team/expert-s-Kenile.png";
import obialor from "@/assets/team/expert-s-Obialor.png";
import victor from "@/assets/team/expert-s-Victor.png";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Hand } from "lucide-react";

interface TeamWorkersArray {
  name: string;
  position: string;
  image: string;
  desc: string;
  socials: string;
}

const teamWorkersArray: TeamWorkersArray[] = [
  {
    name: "kenile",
    position: "ceo",
    image: kenile,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "obialor chisom",
    position: "flutter developer",
    image: obialor,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Emmanuel Nnadi",
    position: "cyber security expert",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Jaey",
    position: "senior backend developer",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Victor Eberechi",
    position: "Ai and Embedded system expert",
    image: victor,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Joel Ababio Dartey",
    position: "Advancing developer",
    image: joel,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Grace otitoju",
    position: "Graphics designer ",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Beboye Emmanuel",
    position: "Technical Writer",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
];

const Team = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // doubled array for infinite loop
  const doubledArray = [...teamWorkersArray, ...teamWorkersArray];

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 // 🔁 Reset for infinite scroll
  useEffect(() => {
    if (sliderIndex >= doubledArray.length / itemsPerSlide) {
      setTimeout(() => {
        setIsTransitioning(false); // remove transition
        setSliderIndex(0); // reset instantly
      }, 500); // match transition duration
    }
    console.log(sliderIndex >= doubledArray.length / itemsPerSlide)
  }, [sliderIndex, itemsPerSlide, doubledArray.length]);


  return (
    <div className="min-h-screen ">
      <Navigation />

      <section className="pt-[150px] pb-12 text-white bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make NT's mission possible.
          </p>
        </div>
      </section>

      {/* flipping card */}
      <div className="w-full flex items-center justify-center">
        <Details />
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0c267b] mb-1">
            Meet Our Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-[750px] w-[90%] mx-auto">
            meet the brilliant minds behind our success. crafting creative
            solutions every day. Shaping the future with passion and expertise{" "}
          </p>
        </div>
          <div className="w-full overflow-hidden mt-8 py-10 overflow-x-scroll scrollbar-hide">
            <div
              className={`flex gap-6  ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${
                  (sliderIndex * 100) / itemsPerSlide
                }%)`,
              }}
            >
              {doubledArray.map((item, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/4 bg-gradient-to-br from-[#0c267b] to-[#5b75c9]"
                >
                  <CardContent>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full rounded-lg"
                    />
                    <div className="mt-4 text-center capitalize text-lg">
                      <span className="block font-semibold text-gray-300">{item.name}</span>
                      <span className="text-sm text-gray-300">
                        {item.position}
                      </span>
                      <div className="mt-2 flex justify-center">
                        <a
                          href={item.socials}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 flex gap-2 items-center hover:underline"
                        >
                          Connect <Hand width={16} />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
