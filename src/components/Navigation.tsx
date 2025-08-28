import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Hammer } from "lucide-react";

const Navigation = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburger, setHamburger] = useState(false);

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
      className={`max-w-[1200px] rounded-[5px] w-[90%] bg-black/20 backdrop-blur-md border-b border-white/10 left-1/2 -translate-x-1/2 z-50 fixed ${
        isScrolled ? "top-[0px]" : "top-[36px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            NT
          </Link>

          <div className="hidden md:flex space-x-8 ">
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
          {hamburger ? (
            <div className="block md:hidden absolute top-20 left-0 w-full bg-black/60 backdrop-blur z-50 rounded text-white py-8">
              <ul className="w-full flex flex-col justify-start items-start  capitalize gap-2">
                <li className="w-full flex flex-col items-start gap-2">
                  <span
                    onClick={() => setAboutDropdown(!aboutDropdown)}
                    className="w-full cursor-default flex justify-between items-center px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors"
                  >
                    about
                    <span>
                      <ChevronDown className="h-6 w-6" />
                    </span>
                  </span>
                  {aboutDropdown ? (
                    <span className="w-full block">
                      <Link className="w-full" to="/about">
                        <span className="w-full block rounded px-8 py-2 text-white hover:bg-[#007aff] transition-colors">
                          Company Overview
                        </span>
                      </Link>
                      <Link className="w-full" to="/leadership">
                        <span className="block w-full rounded px-8 py-2 text-white hover:bg-[#007aff] transition-colors">
                          Leadership Overview
                        </span>
                      </Link>
                    </span>
                  ) : (
                    ""
                  )}
                </li>
                <Link className="w-full" to={"/team"}>
                  <li className="px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors">
                    Our Team
                  </li>
                </Link>
                <Link className="w-full" to={"/solutions"}>
                  <li className="px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors">
                    solution
                  </li>
                </Link>
                <Link className="w-full" to={"/case-studies"}>
                  <li className="px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors">
                    case studies
                  </li>
                </Link>
                <Link className="w-full" to={"/nt-learn"}>
                  <li className="px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors">
                    nt learn{" "}
                  </li>
                </Link>
                <Link className="w-full" to={"/nt-labs"}>
                  <li className="px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors">
                    nt lab
                  </li>
                </Link>
                <Link className="w-full" to={"/insight-hub"}>
                  <li className="px-4 py-2 rounded text-white hover:bg-[#007aff] transition-colors">
                    insight Hub
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            ""
          )}

          <div className="flex gap-6 items-center">
            <Link to="/contact">
              <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
                Let's Talk
              </Button>
            </Link>

            <div className="flex flex-col gap-1 md:hidden w-11 cursor-pointer active:bg-white/50" onClick={()=> setHamburger(!hamburger)}>
              <span className="w-full h-1 bg-white/60"></span>
              <span className="w-full h-1 bg-white/60"></span>
              <span className="w-full h-1 bg-white/60"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
