
import { Award, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const milestones = [
    { year: '2019', event: 'NT Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2020', event: 'First Major Client', description: 'Delivered breakthrough AI solution for Fortune 500 company' },
    { year: '2021', event: 'Global Expansion', description: 'Extended services across 3 continents' },
    { year: '2022', event: '100+ Projects', description: 'Successfully completed over 100 client projects' },
    { year: '2023', event: 'NT Labs Launch', description: 'Established internal innovation arm for R&D' },
    { year: '2024', event: 'NT Learn Launch', description: 'Launched education platform to empower digital leaders' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'We measure success by the positive transformation we bring to our clients\' businesses.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Born from a passion for innovation and a commitment to excellence, 
            Nexa Trux has grown from a bold idea to a global technology partner,Empowering the Future, One Digital Solution at a Time.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1b263a] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
               At Nexa Trux Digital Technologies (NT), we’re not just building products — we’re engineering the future. Our mission is simple but bold: to revolutionize how businesses operate and how individuals thrive using the power of technology. We are a multi-dimensional tech powerhouse driving innovation across various sectors with a unified goal — digital transformation for sustainable impact.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                    Our structure is designed to serve holistically, with specialized arms focusing on key areas of today’s digital economy. From custom software development (web apps, mobile apps, AI model development, cloud computing, and cybersecurity) to digital design and branding, UI/UX, 3D modeling, embedded systems, robotics, and even network infrastructure for homes and offices — we’re building solutions that connect ideas to execution seamlessly.
    But that’s not all.
              </p>
              <p className="text-lg text-gray-600">
                  We're also laying the foundation for the next generation through our Digital Academy, aligning with the United Nations Sustainable Development Goals (SDGs). Through initiatives like the NT Bootcamp, we offer free and accessible tech training for youths, students, and aspiring professionals — empowering them with the skills they need to live sustainably and compete globally.
                  We’re not just a company.
                  We’re a movement.
                  A vision.
                  A next-generation catalyst for digital change.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#007aff] to-[#0c267b] rounded-xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#007aff] mb-2">150+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#007aff] mb-2">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#007aff] mb-2">25+</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#007aff] mb-2">99%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-[#1b263a] to-[#0c267b] text-white">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-[#007aff] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg">
                  To be the world's most trusted technology partner, empowering businesses 
                  to achieve extraordinary growth through innovative digital solutions that 
                  shape the future of industry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#007aff] to-[#0c267b] text-white">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-200 text-lg">
                  To deliver exceptional technology solutions that transform businesses, 
                  exceed client expectations, and create lasting value through innovation, 
                  expertise, and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped NT's growth and success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#007aff] hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#007aff] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-[#1b263a] mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:flex w-4 h-4 bg-[#007aff] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-[#007aff] mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-[#1b263a] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-r from-[#1b263a] to-[#0c267b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Beyond technology, we're committed to creating positive change in the communities we serve
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Sustainable Development</h3>
                <p className="text-gray-300">
                  Aligned with UN SDGs, we promote sustainable technology practices and responsible innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Digital Inclusion</h3>
                <p className="text-gray-300">
                  Through NT Learn, we're empowering the next generation of African digital leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Innovation Ecosystem</h3>
                <p className="text-gray-300">
                  NT Labs drives breakthrough innovations that benefit entire industries and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
