
import { Link } from 'react-router-dom';
import { Code, Brain, Palette, Smartphone, TrendingUp, Network, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Solutions = () => {
  const solutions = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Complete brand identity solutions with design mockups, visual guidelines, and comprehensive brand strategies that resonate with your target audience.",
      capabilities: [
        "Logo Design & Brand Identity",
        "Brand Strategy & Positioning",
        "Visual Identity Systems",
        "Brand Guidelines & Standards",
        "Rebranding & Brand Evolution",
        "Marketing Collateral Design"
      ],
      projects: [
        "Fortune 500 Tech Company Rebrand",
        "Startup Brand Identity Creation",
        "Healthcare Brand Transformation"
      ],
      testimonial: {
        text: "NexaTrux did an excellent job shaping our brand identity. They captured our vision perfectly and delivered a design that truly represents who we are. We’re proud of the outcome!",
        author: "Peace Kings, Weckeep"
      }
    },
    {
      icon: Smartphone,
      title: "UI/UX & Product Design",
      description: "User-centered design approaches that create intuitive, engaging, and conversion-optimized digital experiences across all platforms.",
      capabilities: [
        "User Experience Research",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Interface Design",
        "Usability Testing & Validation",
        "Design System Development"
      ],
      projects: [
        "Healthcare Dashboard Redesign",
        "E-commerce Mobile App UI",
        "SaaS Platform User Experience"
      ],
      testimonial: {
        text: "The UI/UX redesign NT delivered increased our user engagement by 150% and reduced support tickets by 40%.",
        author: "Prof. Bourdillon Omijeh"
      }
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Bespoke web applications built with cutting-edge technologies, scalable architecture, and modern development practices.",
      capabilities: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "Progressive Web Apps (PWAs)",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud Deployment & Scaling"
      ],
      projects: [
        "Multi-vendor E-commerce Platform",
        "Real-time Collaboration Tool",
        "Financial Services Dashboard"
      ],
      testimonial: {
        text: "NexaTrux knows their work. They delivered built my website. Their ability to listen is topnotch. I would recommend NexaTrux anyway, anytime..",
        author: "Dike Scholar, CEO at SRD Consulting LTD"
      }
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android that deliver exceptional user experiences and robust functionality.",
      capabilities: [
        "Native iOS & Android Development",
        "Cross-platform Development (React Native)",
        "Mobile App UI/UX Design",
        "App Store Optimization",
        "Mobile Backend Development",
        "Push Notifications & Analytics"
      ],
      projects: [
        "FinTech Banking App",
        "Food Delivery Platform",
        "Healthcare Patient Portal"
      ],
      testimonial: {
        text: "I had the privilege of entrusting the EU Erasmus to NITDA and NCC project to TRUSTGOD and his team @ NexaTrux. Their professionalism, technical expertise, and innovative approach ensured the successful delivery of a secure and world-class solution that met and exceeded our objectives",
        author: "Prof. Bourdillon Omijeh, Founder of B.O.F"
      }
    },
    {
      icon: Brain,
      title: "AI Solutions & Model Integration",
      description: "Intelligent automation and machine learning solutions that transform business operations and enable data-driven decision-making.",
      capabilities: [
        "Machine Learning Model Development",
        "AI Strategy & Consulting",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Model Integration & Deployment"
      ],
      projects: [
        "Customer Service Chatbot",
        "Predictive Maintenance System",
        "Document Processing Automation"
      ],
      testimonial: {
        text: "NT's AI solution automated 80% of our customer inquiries and improved response time by 300%.",
        author: "Robert Kim, Operations Director at ServiceCorp"
      }
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Strategy",
      description: "Data-driven marketing strategies that maximize ROI, accelerate business growth, and create meaningful connections with your audience.",
      capabilities: [
        "Digital Marketing Strategy",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Campaigns",
        "Social Media Marketing",
        "Content Strategy & Creation",
        "Marketing Analytics & Reporting"
      ],
      projects: [
        "B2B SaaS Lead Generation",
        "E-commerce Growth Strategy",
        "Brand Awareness Campaign"
      ],
      testimonial: {
        text: "I must say they are skilled at digital marketing, Started working with the CEO even before he went legal and having people that work with him, always on top of his game driving massive sales using creative contents and my Website",
        author: "Mrs Chiamaka Eronini, CEO at Amiable World Boutique"
      }
    },
    {
      icon: Network,
      title: "Network Infrastructure Setup",
      description: "Robust, secure, and scalable network solutions that ensure optimal performance, security, and business continuity.",
      capabilities: [
        "Cloud Infrastructure Design",
        "Network Security Implementation",
        "Server Management & Monitoring",
        "Disaster Recovery Planning",
        "Performance Optimization",
        "24/7 Support & Maintenance"
      ],
      projects: [
        "Enterprise Cloud Migration",
        "Multi-site Network Setup",
        "Security Infrastructure Upgrade"
      ],
      testimonial: {
        text: "NT's infrastructure setup reduced our downtime by 99.9% and improved our system performance significantly.",
        author: "James Wilson, IT Director at TechEnterprise"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">What We Deliver</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and transform your digital presence.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`lg:flex items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <Card className="h-full bg-gradient-to-br from-[#1b263a] to-[#0c267b] text-white">
                    <CardContent className="p-8">
                      <solution.icon className="h-16 w-16 text-[#007aff] mb-6" />
                      <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                      <p className="text-gray-300 text-lg mb-6">{solution.description}</p>
                      
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
                        <p className="text-gray-200 italic">"{solution.testimonial.text}"</p>
                        <p className="text-[#007aff] font-semibold mt-2">- {solution.testimonial.author}</p>
                      </div>
                      
                      <Link to="/contact">
                        <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
                          Let's Build for You
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1b263a] mb-6">Our Capabilities</h3>
                    <div className="grid gap-3">
                      {solution.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#007aff] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1b263a] mb-6">Recent Projects</h3>
                    <div className="space-y-3">
                      {solution.projects.map((project, idx) => (
                        <Card key={idx} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <p className="font-medium text-[#1b263a]">{project}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0c267b] to-[#007aff] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our solutions can transform your business and drive exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#0c267b] hover:bg-gray-100 px-8">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0c267b] px-8">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
