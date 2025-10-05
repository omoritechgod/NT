import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [message, setMessage] = useState<string>(null);
  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://api.sheetbest.com/sheets/39e353e7-19e2-4711-81a2-4f152ba8e55d",
        {
          id: `nt-${crypto.randomUUID()}`,
          email: emailInput,
        }
      );

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
      setMessage("Your subscription was successful ✅");
      setEmailInput("");
    } catch (error) {
      console.log("failed to submit contact form: ", error);
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
      setMessage(error || "Your submit was not sucessfull ");
    }
  };

  // Handler for scrolling to testimonials section
  const handleTestimonialsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're already on the solutions page
    if (window.location.pathname === '/solutions') {
      // If on solutions page, just scroll to the section
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to solutions page with hash
      navigate('/solutions#testimonials');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#1b263a] text-white py-12">
      {status ? (
        <div className="fixed bg-blue-950 p-4 bottom-1 right-1 text-white rounded flex gap-4 z-30 shadow-2xl shadow-blue-600">
          {message}
        </div>
      ) : (
        ""
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Get the latest insights and updates from NT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <Input
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NT</h3>
            <p className="text-gray-400 mb-4">
              Pioneering Tech For A Smarter Tomorrow
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#007aff] transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#007aff] transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Network Infrastructure
                </Link>
              </li>
              <li>
                <a
                  href="/solutions#testimonials"
                  onClick={handleTestimonialsClick}
                  className="hover:text-[#007aff] transition-colors cursor-pointer"
                >
                  Client Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#007aff] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/nt-labs"
                  className="hover:text-[#007aff] transition-colors"
                >
                  NT Labs
                </Link>
              </li>
              <li>
                <Link
                  to="/nt-learn"
                  className="hover:text-[#007aff] transition-colors"
                >
                  NT Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/insight-hub"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Insight Hub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:info@nexatrux.com">info@nexatrux.com</a>
              </li>
              <li>Global Presence</li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#007aff] transition-colors"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 NT. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <Link to="/privacy-policy" className="hover:text-[#007aff] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#007aff] transition-colors">
              Terms of Service
            </Link>
            <a href="#" className="hover:text-[#007aff] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;