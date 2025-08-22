import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav
      className={`max-w-[1200px] rounded-[5px] w-[90%] bg-black/20 backdrop-blur-md border-b border-white/10 left-1/2 -translate-x-1/2 z-50 fixed ${isScrolled ? "top-[0px]" : "top-[36px]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            NT
          </Link>

          <div className="hidden md:flex space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button className="text-white hover:text-[#007aff] transition-colors flex items-center">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aboutDropdown && (
                <div className="absolute top-full left-0  w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-[#1b263a] hover:bg-[#007aff] hover:text-[#fff] transition-colors"
                  >
                    Company Overview
                  </Link>
                  <Link
                    to="/leadership"
                    className="block px-4 py-2 text-[#1b263a] hover:bg-gray-100 transition-colors"
                  >
                    Leadership
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/team"
              className="text-white hover:text-[#007aff] transition-colors"
            >
              Our Team
            </Link>
            <Link
              to="/solutions"
              className="text-white hover:text-[#007aff] transition-colors"
            >
              Solutions
            </Link>
            <Link
              to="/case-studies"
              className="text-white hover:text-[#007aff] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              to="/nt-labs"
              className="text-white hover:text-[#007aff] transition-colors"
            >
              NT Labs
            </Link>
            <Link
              to="/nt-learn"
              className="text-white hover:text-[#007aff] transition-colors"
            >
              NT Learn
            </Link>
            <Link
              to="/insight-hub"
              className="text-white hover:text-[#007aff] transition-colors"
            >
              Insight Hub
            </Link>
          </div>

          <Link to="/contact">
            <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
