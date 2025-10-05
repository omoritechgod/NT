// ===== FILE: src/pages/Solutions.tsx =====
import { Link } from 'react-router-dom';
import { Code, Brain, Palette, Smartphone, TrendingUp, Network, ArrowRight, CheckCircle, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const Solutions = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  // Testimonials extracted from solutions
  const testimonials = [
    {
      text: "NexaTrux did an excellent job shaping our brand identity. They captured our vision perfectly and delivered a design that truly represents who we are. We're proud of the outcome!",
      author: "Peace Kings",
      company: "Weckeep",
      role: "Founder",
      category: "Branding",
      rating: 5
    },
    {
      text: "The UI/UX redesign NT delivered increased our user engagement by 150% and reduced support tickets by 40%.",
      author: "Prof. Bourdillon Omijeh",
      company: "B.O.F",
      role: "Founder",
      category: "UI/UX Design",
      rating: 5
    },
    {
      text: "NexaTrux knows their work. They delivered my brand's logo and built my website. Their ability to listen is topnotch. I would recommend NexaTrux anyway, anytime.",
      author: "Dike Scholar",
      company: "SRD Consulting LTD",
      role: "CEO",
      category: "Web Development",
      rating: 5
    },
    {
      text: "I had the privilege of entrusting the EU Erasmus to NITDA and NCC project to TRUSTGOD and his team @ NexaTrux. Their professionalism, technical expertise, and innovative approach ensured the successful delivery of a secure and world-class solution that met and exceeded our objectives.",
      author: "Prof. Bourdillon Omijeh",
      company: "B.O.F",
      role: "Founder",
      category: "Mobile Development",
      rating: 5
    },
    {
      text: "NT's AI solution automated 80% of our customer inquiries and improved response time by 300%.",
      author: "Robert Kim",
      company: "ServiceCorp",
      role: "Operations Director",
      category: "AI Solutions",
      rating: 5
    },
    {
      text: "I must say they are skilled at digital marketing. Started working with the CEO even before he went legal and having people that work with him, always on top of his game driving massive sales using creative contents and my Website.",
      author: "Mrs Chiamaka Eronini",
      company: "Amiable World Boutique",
      role: "CEO",
      category: "Digital Marketing",
      rating: 5
    },
    {
      text: "NT's infrastructure setup reduced our downtime by 99.9% and improved our system performance significantly.",
      author: "James Wilson",
      company: "TechEnterprise",
      role: "IT Director",
      category: "Network Infrastructure",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

      {/* Solutions Grid - Without Testimonials */}
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

      {/* NEW: Dedicated Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from clients who have experienced the NT difference across our various solutions
            </p>
          </div>

          {/* Featured Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-[#1b263a] to-[#0c267b] text-white overflow-hidden">
              <CardContent className="p-12 relative">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-[#007aff]/30" />
                <Quote className="absolute bottom-6 right-6 h-12 w-12 text-[#007aff]/30 rotate-180" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl mb-8 italic text-center leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div className="text-center">
                    <p className="font-bold text-xl text-white mb-1">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-gray-300 mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-[#007aff] font-semibold">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <span className="inline-block mt-3 px-4 py-1 bg-[#007aff]/20 text-[#007aff] rounded-full text-sm">
                      {testimonials[currentTestimonial].category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-[#007aff] w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <span className="inline-block mb-3 px-3 py-1 bg-[#007aff]/10 text-[#007aff] rounded-full text-xs font-medium">
                    {testimonial.category}
                  </span>
                  
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#1b263a]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#007aff] font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
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