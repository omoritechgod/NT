
import { Rocket, Cpu, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NTLabs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#007aff] rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#0c267b] rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#007aff] rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <Rocket className="h-24 w-24 text-[#007aff] mx-auto animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">NT Labs</h1>
            <h2 className="text-2xl md:text-3xl text-[#007aff] font-medium">Innovation in Progress</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our internal innovation arm where we experiment with cutting-edge technologies 
              and develop the solutions of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">We're Building What's Next</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary projects in AI, quantum computing, and next-generation web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Cpu className="h-16 w-16 text-[#007aff] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#1b263a] mb-4">AI-Powered Automation</h3>
                <p className="text-gray-600">
                  Next-generation AI systems that can understand, learn, and adapt to complex business processes.
                </p>
                <div className="mt-6 bg-[#007aff]/10 rounded-lg p-4">
                  <div className="text-sm text-[#007aff] font-medium">Coming Q2 2025</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Lightbulb className="h-16 w-16 text-[#007aff] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#1b263a] mb-4">Quantum Computing Solutions</h3>
                <p className="text-gray-600">
                  Exploring quantum algorithms for optimization problems in logistics, finance, and healthcare.
                </p>
                <div className="mt-6 bg-[#007aff]/10 rounded-lg p-4">
                  <div className="text-sm text-[#007aff] font-medium">Research Phase</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Rocket className="h-16 w-16 text-[#007aff] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#1b263a] mb-4">Web3 Infrastructure</h3>
                <p className="text-gray-600">
                  Decentralized applications and blockchain solutions for secure, transparent business operations.
                </p>
                <div className="mt-6 bg-[#007aff]/10 rounded-lg p-4">
                  <div className="text-sm text-[#007aff] font-medium">Beta Testing</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blurred Mockups Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1b263a] mb-12">Sneak Peek</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#1b263a] to-[#0c267b] rounded-xl p-8 h-64 flex items-center justify-center filter blur-sm group-hover:blur-none transition-all duration-300">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-[#007aff] rounded-lg mx-auto mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-semibold">AI Dashboard Interface</div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-[#007aff] to-[#0c267b] rounded-xl p-8 h-64 flex items-center justify-center filter blur-sm group-hover:blur-none transition-all duration-300">
                <div className="text-white text-center">
                  <div className="w-20 h-20 border-4 border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3 mx-auto"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-semibold">Quantum Computing Platform</div>
              </div>
            </div>
          </div>

          <p className="text-gray-500 italic">
            * These are conceptual mockups. Actual products may vary.
          </p>
        </div>
      </section>

      {/* Be the First to Know */}
      <section className="py-20 bg-gradient-to-r from-[#0c267b] to-[#007aff] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be the First to Know</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get exclusive early access to NT Labs innovations and be part of the future of technology
          </p>
          
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-[#1b263a] placeholder:text-gray-500"
                />
                <Button className="w-full bg-white text-[#0c267b] hover:bg-gray-100">
                  Get Early Access
                </Button>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                No spam, just groundbreaking innovations
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NTLabs;
