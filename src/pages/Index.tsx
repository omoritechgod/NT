import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Brain,
  Palette,
  Smartphone,
  TrendingUp,
  Network,
  Star,
  ExternalLink,
  Globe,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bg_img from "@/assets/hero-vid/hero-vid.gif";

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const heroSlides = [
    {
      title: "Powering Business Through Innovation",
      subtitle: "Cutting-Edge Tech Solutions",
      description:
        "Premium technology services that transform businesses and drive digital excellence.",
    },
    {
      title: "Excellence Beyond Borders",
      subtitle: "Global Delivery, Local Excellence",
      description:
        "Delivering world-class solutions to clients across continents with unmatched precision.",
    },
    {
      title: "Building Tomorrow's Digital Landscape",
      subtitle: "AI-Powered Innovation",
      description:
        "Harness the power of artificial intelligence to revolutionize your business operations.",
    },
  ];

  const solutions = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description:
        "Complete brand identity solutions with design mockups and comprehensive strategies.",
      link: "/solutions",
    },
    {
      icon: Smartphone,
      title: "UI/UX & Product Design",
      description:
        "User-centered design approaches that create intuitive, engaging experiences.",
      link: "/solutions",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Bespoke web applications built with cutting-edge technologies.",
      link: "/solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile solutions for iOS and Android.",
      link: "/solutions",
    },
    {
      icon: Brain,
      title: "AI Solutions & Model Integration",
      description: "Intelligent automation and machine learning solutions.",
      link: "/solutions",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Strategy",
      description: "Data-driven marketing strategies that maximize ROI.",
      link: "/solutions",
    },
    {
      icon: Network,
      title: "Network Infrastructure Setup",
      description: "Robust, secure, and scalable network solutions.",
      link: "/solutions",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Global",
      role: "CTO",
      content:
        "NT delivered exceptional results on our AI integration project. Their expertise and professionalism exceeded all expectations.",
      rating: 5,
      industry: "Technology",
    },
    {
      name: "Michael Chen",
      company: "InnovateNow",
      role: "CEO",
      content:
        "The custom software solution NT built for us transformed our operations. Outstanding quality and support throughout.",
      rating: 5,
      industry: "Healthcare",
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Dynamics",
      role: "Head of Product",
      content:
        "NT's UI/UX design work elevated our product to new heights. Incredible attention to detail and user experience.",
      rating: 5,
      industry: "Finance",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web",
      description:
        "Modern, scalable e-commerce solution with AI-powered recommendations",
      tech: ["React", "Node.js", "AI/ML"],
    },
    {
      title: "Healthcare Dashboard",
      category: "Design",
      description:
        "Intuitive medical data visualization platform for healthcare providers",
      tech: ["Figma", "React", "D3.js"],
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile",
      description:
        "Secure financial management app with biometric authentication",
      tech: ["React Native", "Blockchain", "Security"],
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete rebrand for a Fortune 500 technology company",
      tech: ["Design System", "Brand Guidelines", "Marketing"],
    },
    {
      title: "AI Chatbot Platform",
      category: "AI",
      description:
        "Intelligent customer service automation with natural language processing",
      tech: ["Python", "OpenAI", "Machine Learning"],
    },
  ];

  // const teamMembers = [
  //   {
  //     name: "Alex Thompson",
  //     role: "CEO & Founder",
  //     quote:
  //       "Innovation is not just about technology—it's about transforming how businesses connect with their customers.",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  //   },
  //   {
  //     name: "Sarah Kim",
  //     role: "Head of Design",
  //     quote: "Great design is invisible—it just works.",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612ed6d?w=300&h=300&fit=crop&crop=face",
  //   },
  //   {
  //     name: "Marcus Johnson",
  //     role: "Lead Developer",
  //     quote: "Code is poetry written in logic.",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  //   },
  // ];

  const filters = ["All", "Web", "Mobile", "Design", "AI", "Branding"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      {/* NT Learn Banner */}
      <div className="bg-gradient-to-r from-[#007aff] to-[#0c267b] text-white py-2 px-4 text-center">
        <p className="text-sm">
          🎓 Empowering Africa's Next Digital Leaders with{" "}
          <span className="font-semibold">NT Learn</span>
          <Link to="/nt-learn" className="ml-2 underline hover:no-underline">
            Explore NT Learn
          </Link>
        </p>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute w-full h-full">
          <img src={bg_img} alt="background" width={"100%"} height={"100%"} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/90 z-10"></div>

        {/* Animated Background */}
        <div className="absolute  z-20 inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#007aff] rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#0c267b] rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#007aff] rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {heroSlides[currentHero].title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#007aff] font-medium">
              {heroSlides[currentHero].subtitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {heroSlides[currentHero].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions">
                <Button
                  size="lg"
                  className="bg-[#007aff] hover:bg-[#007aff]/80 text-white px-8"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-[#1b263a] hover:bg-white hover:text-[#007aff] px-8"
                >
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentHero === index ? "bg-[#007aff]" : "bg-white/30"
              }`}
              onClick={() => setCurrentHero(index)}
            />
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            NT is a premium technology company that delivers cutting-edge
            solutions to businesses worldwide. We combine innovation, expertise,
            and excellence to transform digital landscapes and drive business
            success.
          </p>
          <Link to="/about">
            <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
              Company Overview
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your
              business growth
            </p>
            <Link to="/solutions">
              <Button
                variant="outline"
                className="border-[#007aff] text-[#007aff] hover:bg-[#007aff] hover:text-white"
              >
                View All Solutions
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.slice(0, 6).map((solution, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <solution.icon className="h-12 w-12 text-[#007aff] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-[#1b263a] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Link to={solution.link}>
                    <Button className="w-full bg-[#007aff] hover:bg-[#007aff]/80 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="py-20 bg-gradient-to-r from-[#1b263a] to-[#0c267b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-20 w-20 text-[#007aff] mx-auto mb-8 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Excellence Beyond Borders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Wherever You Are
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Our global delivery model ensures seamless collaboration across time
            zones, bringing world-class expertise directly to your doorstep.
            From concept to deployment, we work as an extension of your team.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with NT across different
              industries
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#1b263a] to-[#0c267b] text-white">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <p className="text-xl mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p>{testimonials[currentTestimonial].role}</p>
                  <p className="text-[#007aff]">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentTestimonial].industry}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "bg-[#007aff]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">
              Project Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Showcasing our latest work and innovative solutions
            </p>

            {/* Filter Toggle */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === filter
                      ? "bg-[#007aff] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.category}-${index}`}
                className="group relative bg-gradient-to-br from-[#1b263a] to-[#0c267b] rounded-xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#007aff]/20 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-[#007aff]/20 text-[#007aff] rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The brilliant minds behind NT's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[#1b263a] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#007aff] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 italic">"{member.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/team">
              <Button className="bg-[#007aff] hover:bg-[#007aff]/80 text-white">
                See Full Team
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Blog/Insights Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends and insights from our experts
            </p>
            <Link to="/insight-hub">
              <Button
                variant="outline"
                className="border-[#007aff] text-[#007aff] hover:bg-[#007aff] hover:text-white"
              >
                Visit Insight Hub
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI in Business Operations",
                category: "AI",
                readTime: "5 min read",
                date: "Dec 10, 2024",
              },
              {
                title: "Modern Web Development Best Practices",
                category: "Web Dev",
                readTime: "7 min read",
                date: "Dec 8, 2024",
              },
              {
                title: "Building Successful Brand Identities",
                category: "Branding",
                readTime: "4 min read",
                date: "Dec 5, 2024",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-[#007aff]/10 text-[#007aff] rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1b263a] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0c267b] to-[#007aff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Remarkable
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology
            solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0c267b] hover:bg-gray-100 px-8"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[#0c267b] text-white bg-[#0c267b] hover:bg-white hover:text-[#0c267b] px-8"
              >
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
