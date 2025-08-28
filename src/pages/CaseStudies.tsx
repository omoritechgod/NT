import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import offray from "@/assets/projects/offray.png";
import offray_1 from "@/assets/projects/offray.png";
import offray_2 from "@/assets/projects/offray2.png";
import offray_3 from "@/assets/projects/offray3.png";
import offray_4 from "@/assets/projects/offray4.png";
import offray_5 from "@/assets/projects/offray5.png";
import bourd from "@/assets/projects/bourdillonomijehfoundation.png";
import bourd_2 from "@/assets/projects/bourdillonomijehfoundation2.png";
import bourd_3 from "@/assets/projects/bourdillonomijehfoundation3.png";
import fam from "@/assets/projects/famousitsolutionltd.png";
import fam_2 from "@/assets/projects/famousitsolutionltd3.png";
import fam_3 from "@/assets/projects/famousitsolutionltd2.png";
import fam_4 from "@/assets/projects/famousitsolutionltd4.png";
import mc from "@/assets/projects/mc-dee.png";
import mc_3 from "@/assets/projects/mc-dee2.png";
import fran from "@/assets/projects/franclick.png";
import neuro from "@/assets/projects/neuro.png";
import md from "@/assets/projects/3dmodeling.mp4";
import curate from "@/assets/projects/curate.png";
import mc_2 from "@/assets/projects/mc-dee3.png";
import srd from "@/assets/projects/srdconsultingltd.png";
import srd_2 from "@/assets/projects/srdconsultingltd2.png";
import srd_3 from "@/assets/projects/srdconsultingltd3.png";
import ai from "@/assets/projects/ai.png";
import mag from "@/assets/projects/mags.png";
import elect from "@/assets/projects/elect.png";
import buzz from "@/assets/projects/buzz.png";
import brand_one from "@/assets/projects/brand-one.png";
import brand_two from "@/assets/projects/brand-two.png";
import bus_card from "@/assets/projects/BusCard.jpg";
import custom_hoddie from "@/assets/projects/custom-hoodie.jpg";
import bourd_4 from "@/assets/projects/bourdillonomijehfoundation4.png";
import mock from "@/assets/projects/moccck-1.png";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

type ActiveFilter = "All" | "Web" | "Branding" | "AI" | "Mobile";
interface Project {
  id: number;
  title: string;
  image: string[];
  category: string;
  description: string;
  tech: string[];
}

const project: Project[] = [
  {
    id: 1,
    title: "SRD Consulting",
    image: [srd, srd_2, srd_3],
    category: "Web",
    description:
      "SRD Consulting is your trusted partner in achieving communication excellence",
    tech: ["React", "Node.js", "PHP"],
  },
  {
    id: 2,
    title: "bourdillonomijeh Foundation",
    image: [bourd, bourd_2, bourd_3,bourd_4],
    category: "Web",
    description:
      "The Bourdillon Omijeh Foundation (BOF), is a non-profit initiative born from a deep desire to raise Africa's next generation of technology innovators",
    tech: ["React", "Node.js", "PHP"],
  },
  {
    id: 3,
    title: "McDee",
    image: [mc, mc_2, mc_3],
    category: "Web",
    description:
      "McDee is Nigeria's premier multifunctional marketplace and services platform",
    tech: ["Reactjs", "Blockchain", "Security"],
  },

  {
    id: 4,
    title: "MAGs and SEEE",
    image: [mag, elect, mag],
    category: "Web",
    description:
      "A digital platform where customers gets to interact with the services rendered by the company",
    tech: ["React", "Node.js", "PHP"],
  },
  {
    id: 5,
    title: "FAMOS IT Solutions",
    image: [fam, fam_2, fam_3,fam_4 ],
    category: "Web",
    description:
      "FAMOS IT Solutions Limited is a progressive and innovation-driven technology and logistics company",
    tech: ["Figma", "React", "PHP", "Nodejs"],
  },
  {
    id: 6,
    title: "curate",
    image: [curate, curate, curate],
    category: "Web",
    description:
      "A digital plqatform for your on stop hospitality and comfort on a budget",
    tech: ["React", "Node.js", "PHP"],
  },
  {
    id: 7,
    title: "Neuro Data",
    image: [neuro, neuro, neuro],
    category: "Web",
    description:
      "Neuro Data hub is a science for platform for neuro and computational science",
    tech: ["React", "Node.js", "PHP"],
  },

  {
    id: 8,
    title: "offray uk",
    image: [offray, offray_2, offray_1,offray_3,offray_4,offray_5],
    category: "Web",
    description:
      "A Uk based Airport based airport pickup, service apartment, home appliance and nigerian foodb dropshipping platform",
    tech: ["React", "Node.js", "PHP"],
  },
  {
    id: 9,
    title: "FinTech Mobile App",
    image: [buzz, buzz],
    category: "Mobile",
    description:
      "Buzz food and delivery app",
    tech: ["React Native", "Blockchain", "Security"],
  },
  {
    id: 10,
    title: "FinTech Mobile App",
    image: [buzz, buzz],
    category: "Mobile",
    description:
      "Buzz food and delivery app",
    tech: ["React Native", "Blockchain", "Security"],
  },
  {
    id: 11,
    title: "AI Chatbot Platform",
    image: [ai, ai, ai],
    category: "AI",
    description:
      "An ai machine model for emotion music recommender, uses your emotion and suggest songs that compliment it..",
    tech: ["Python", "OpenAI", "Machine Learning"],
  },
  {
    id: 12,
    title: "Brand Identity System",
    image: [fran, brand_one,brand_two],
    category: "Branding",
    description: "Complete rebrand for a Fortune 500 technology company",
    tech: ["Design System", "Brand Guidelines", "Marketing"],
  },
   {
    id: 14,
    title: "Brand Identity System",
    image: [mock,custom_hoddie,bus_card],
    category: "Branding",
    description: "Complete rebrand for a Fortune 500 technology company",
    tech: ["Design System", "Brand Guidelines", "Marketing"],
  },
];
const item_per_page = 4;
const CaseStudies = () => {
  const [isHovered, setIsHovered] = useState<number>(null);
  const [count, setCount] = useState<{ [id: number]: number }>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("All");

  //filter
  const filters: ActiveFilter[] = ["All", "Web", "Mobile", "AI", "Branding"];
  //filter projects
  const filteredProjects =
    activeFilter === "All"
      ? project
      : project.filter((value, _i) => value.category === activeFilter);

  //get the total page
  const totalPages = Math.ceil(filteredProjects.length / item_per_page);
  // Slice current items
  const startIndex = (currentPage - 1) * item_per_page;
  const currentItems = filteredProjects.slice(
    startIndex,
    startIndex + item_per_page
  );

  useEffect(() => {
    if (currentItems.length === 0) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        const update = { ...prev };
        currentItems.forEach((item) => {
          const current = prev[item.id] || 0;

          update[item.id] = current < item.image.length - 1 ? current + 1 : 0;
        });
        return update;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentItems]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0c267b] to-[#007aff]">
      <Navigation />
      {/* bg-[#0e131f] */}
      <section className="pt-[150px] pb-12 text-white h-[65vh] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and the impact we've made for our
            clients.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] w-[98%] py-0 backdrop-blur rounded-xl mb-20 -mt-[95px] mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-full">
            <div className="mb-8">
              <div className="flex gap-4 mb-4">
                {filters.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveFilter(value);
                      setCurrentPage(1);
                    }}
                  >
                    <Button>{value}</Button>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentItems.map((item, index) => (
                  <Card
                    key={index}
                    className="p-0 px-0 border-none overflow-hidden min-h-[300px] rounded-lg flex-shrink-0 backdrop-blur bg-black/10 hover:shadow-[0_2px_15px_rgba(0,0,0,0.3)] transition-all duration-300"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <CardContent className="w-full p-0 m-0">
                      <div className={`relative aspect-[16/9] overflow-hidden`}>
                        <img
                          src={item.image[count[item.id]]}
                          alt={item.title}
                          className={`w-full h-full object-cover ${
                            isHovered === index ? "scale-105" : "scale-100"
                          } transition-transform duration-300`}
                        />
                        <div className="w-full h-full absolute bottom-0 flex bg-black/20 p-2 justify-center gap-3 items-center">
                          {item.image.map((_item, i) => (
                            <span
                              key={i}
                              onClick={() =>
                                setCount((prev) => ({ ...prev, [item.id]: i }))
                              }
                              className={`text-black text-center cursor-pointer rounded-[50%] w-5 h-5 ${
                                count[item.id] === i
                                  ? "bg-white/30"
                                  : "bg-black/45"
                              }`}
                            >
                    
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 pb-4 flex gap-2 flex-col items-start">
                        <h3
                          className={`${
                            isHovered === index
                              ? "text-[#3c74e4]"
                              : "text-[#f4f1f8]"
                          } capitalize text-xl`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <p className="bg-gray-800 font-bold text-[#3c74e4] text-sm rounded-md px-2 py-1 inline-block">
                          {item.category}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="max-w-[400px] w-[95%] mx-auto mt-5 flex flex-row-reverse items-center justify-between gap-4">
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <Button>
                    <SquareChevronRight width={16} height={16} />
                  </Button>
                </button>
                <div className="text-white flex gap-8">
                  <span>{currentPage}</span>
                  <span>of</span>
                  <span>{totalPages}</span>
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <Button>
                    <SquareChevronLeft width={16} height={16} />
                  </Button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
