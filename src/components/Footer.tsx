
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-[#1b263a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">Get the latest insights and updates from NT</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NT</h3>
            <p className="text-gray-400 mb-4">
              Premium technology solutions delivered globally with excellence and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/solutions" className="hover:text-[#007aff] transition-colors">Web Development</Link></li>
              <li><Link to="/solutions" className="hover:text-[#007aff] transition-colors">AI Solutions</Link></li>
              <li><Link to="/solutions" className="hover:text-[#007aff] transition-colors">UI/UX Design</Link></li>
              <li><Link to="/solutions" className="hover:text-[#007aff] transition-colors">Branding</Link></li>
              <li><Link to="/solutions" className="hover:text-[#007aff] transition-colors">Digital Marketing</Link></li>
              <li><Link to="/solutions" className="hover:text-[#007aff] transition-colors">Network Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-[#007aff] transition-colors">About</Link></li>
              <li><Link to="/team" className="hover:text-[#007aff] transition-colors">Our Team</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#007aff] transition-colors">Case Studies</Link></li>
              <li><Link to="/nt-labs" className="hover:text-[#007aff] transition-colors">NT Labs</Link></li>
              <li><Link to="/nt-learn" className="hover:text-[#007aff] transition-colors">NT Learn</Link></li>
              <li><Link to="/insight-hub" className="hover:text-[#007aff] transition-colors">Insight Hub</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@nt.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Global Presence</li>
              <li><Link to="/contact" className="hover:text-[#007aff] transition-colors">Let's Talk</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 NT. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-[#007aff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#007aff] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#007aff] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
