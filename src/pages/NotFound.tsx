// ===== FILE: src/pages/NotFound.tsx =====
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b] flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold text-white/10 leading-none animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center -mt-32">
              <div className="w-32 h-32 bg-[#007aff] rounded-full blur-3xl opacity-50 animate-float"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="relative z-10 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-lg text-gray-400">
              It might have been moved or deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-[#007aff] hover:bg-[#007aff]/80 text-white px-8 w-full sm:w-auto"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#1b263a] px-8 w-full sm:w-auto"
              >
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-[#007aff] transition-colors flex items-center justify-center"
              >
                About Us
              </Link>
              <Link 
                to="/solutions" 
                className="text-gray-300 hover:text-[#007aff] transition-colors flex items-center justify-center"
              >
                Solutions
              </Link>
              <Link 
                to="/case-studies" 
                className="text-gray-300 hover:text-[#007aff] transition-colors flex items-center justify-center"
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-[#007aff] transition-colors flex items-center justify-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;


// ===== FILE: public/_redirects (For Netlify) =====
/*    /index.html   200


// ===== FILE: vercel.json (For Vercel) =====
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}


// ===== FILE: netlify.toml (Alternative for Netlify) =====
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200


// ===== INSTRUCTIONS FOR DEPLOYMENT =====

/**
 * ROUTING FIX IMPLEMENTATION GUIDE
 * 
 * The 404 error on refresh happens because your hosting provider doesn't know 
 * how to handle client-side routing. Here's how to fix it:
 * 
 * 
 * ========================================
 * FOR NETLIFY HOSTING:
 * ========================================
 * 
 * Option 1: Create a _redirects file
 * Location: public/_redirects
 * Content:
 * /*    /index.html   200
 * 
 * Option 2: Create netlify.toml
 * Location: root directory (netlify.toml)
 * Content: (see above)
 * 
 * 
 * ========================================
 * FOR VERCEL HOSTING:
 * ========================================
 * 
 * Create a vercel.json file
 * Location: root directory (vercel.json)
 * Content: (see above)
 * 
 * 
 * ========================================
 * FOR GITHUB PAGES:
 * ========================================
 * 
 * Create a 404.html file that's a copy of index.html
 * Location: public/404.html
 * 
 * Then add this to your package.json build script:
 * "build": "vite build && cp dist/index.html dist/404.html"
 * 
 * 
 * ========================================
 * FOR CUSTOM SERVER (Apache):
 * ========================================
 * 
 * Create .htaccess file
 * Location: root directory (.htaccess)
 * Content:
 * 
 * <IfModule mod_rewrite.c>
 *   RewriteEngine On
 *   RewriteBase /
 *   RewriteRule ^index\.html$ - [L]
 *   RewriteCond %{REQUEST_FILENAME} !-f
 *   RewriteCond %{REQUEST_FILENAME} !-d
 *   RewriteRule . /index.html [L]
 * </IfModule>
 * 
 * 
 * ========================================
 * FOR CUSTOM SERVER (Nginx):
 * ========================================
 * 
 * Add to nginx.conf:
 * 
 * location / {
 *   try_files $uri $uri/ /index.html;
 * }
 * 
 * 
 * ========================================
 * TESTING YOUR FIX:
 * ========================================
 * 
 * 1. Deploy your changes
 * 2. Visit: https://www.nexatrux.com/case-studies
 * 3. Refresh the page (F5 or Ctrl+R)
 * 4. Should load correctly without 404 error
 * 5. Test other routes: /about, /solutions, /contact, etc.
 * 6. Test invalid route: /invalid-page-xyz (should show your custom 404)
 * 
 * 
 * ========================================
 * WHAT PLATFORM ARE YOU USING?
 * ========================================
 * 
 * Please tell me your hosting platform so I can give you 
 * the exact file to create:
 * 
 * - Netlify
 * - Vercel
 * - GitHub Pages
 * - Custom Server (Apache/Nginx)
 * - Other
 * 
 */


// ===== FILE STRUCTURE AFTER FIXES =====
/**
 * Your project should have:
 * 
 * src/
 * ├── pages/
 * │   └── NotFound.tsx  ← Updated custom 404 page
 * 
 * public/
 * └── _redirects  ← Add this (for Netlify)
 * 
 * Root directory:
 * ├── vercel.json  ← Add this (for Vercel)
 * └── netlify.toml  ← Or this (alternative for Netlify)
 * 
 */