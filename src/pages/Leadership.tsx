import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import trustGod from "@/assets/Administrators-leadership/expert-TG-1.png";
import emmanuel from "@/assets/Administrators-leadership/expert-s-Emma-om-.png";
import edidiong from "@/assets/Administrators-leadership/edit pic_113022.png";


const Leadership = () => {
  const leaders = [
    {
      name: 'TrustGod',
      role: 'CEO & Co-founder',
      image: trustGod,
      bio: 'TrustGod founded NT with a vision to democratize access to cutting-edge technology solutions. With over 15 years of experience in enterprise software and AI, he has led the company from a startup to a global technology partner.',
      quote: 'Innovation is not just about technology—it\'s about transforming how businesses connect with their customers and create value in an increasingly digital world.',
      achievements: [
        'Led 300% company growth over 5 years',
        'Featured in TechCrunch Top 40 Under 40',
        'Published author on AI and Business Transformation',
        'Keynote speaker at 50+ international conferences'
      ],
      education: 'MIT - Computer Science, Stanford - MBA',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@nt.com'
      }
    },
    {
      name: 'Edidiong Umoh',
      role: 'Co-founder',
      image: edidiong,
      bio: 'edidiong leads NT\'s technical vision and innovation strategy. Her expertise in cloud architecture, AI/ML, and scalable systems has been instrumental in delivering world-class solutions to Fortune 500 clients.',
      quote: 'The best technology is invisible—it seamlessly enhances human capability without getting in the way.',
      achievements: [
        'Architected systems serving 100M+ users',
        'AWS Community Hero and Google Cloud Champion',
        'Patent holder for 3 AI-related innovations',
        'Former Principal Engineer at Google'
      ],
      education: "Mechanical Enginering - UNIPORT, BSC's",
      social: {
        linkedin: 'https://ng.linkedin.com/in/edidiong-umoh',
        twitter: '#', 
        email: 'sarah@nt.com'
      }
    },
    {
      name: 'Emmanuel Omanoye',
      role: 'Co-founder',
      image: emmanuel,
      bio: 'Emmanuel brings a unique blend of creative vision and strategic thinking to NT\'s design philosophy. His work has been recognized internationally and has helped brands achieve breakthrough digital experiences.',
      quote: 'Great design is not just about how it looks—it\'s about how it works, how it feels, and how it transforms the user\'s relationship with the brand.',
      achievements: [
        'Winner of 15+ international design awards',
        'Featured in Design Museum London',
        'Led rebrands for 3 Fortune 100 companies',
        'Former Creative Director at IDEO'
      ],
      education: 'Royal College of Art - Design, Parsons - MFA',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emmanuel@nt.com'
      }
    },
    // {
    //   name: 'Dr. Amara Okafor',
    //   role: 'Chief Strategy Officer',
    //   image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face',
    //   bio: 'Amara drives NT\'s global expansion and strategic partnerships. Her deep understanding of emerging markets and digital transformation has positioned NT as a leader in the African tech ecosystem.',
    //   quote: 'Strategy is about making choices—choosing where to compete, how to win, and what capabilities to build for sustainable competitive advantage.',
    //   achievements: [
    //     'Led expansion into 15+ African markets',
    //     'Former McKinsey & Company Partner',
    //     'Board member of 3 tech startups',
    //     'TEDx speaker on African Innovation'
    //   ],
    //   education: 'Oxford - PPE, Harvard Business School - MBA',
    //   social: {
    //     linkedin: '#',
    //     twitter: '#',
    //     email: 'amara@nt.com'
    //   }
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Leadership</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving NT's mission to transform businesses through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* CEO Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1b263a] mb-8">A Message from Our CEO</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-[#007aff]/10 to-[#0c267b]/10 rounded-xl p-8 mb-8">
                <p className="text-lg text-gray-700 italic mb-6">
                  "At NT, we believe that technology should be a force for positive transformation. Our mission goes beyond delivering exceptional solutions—we're building bridges between what is and what could be, empowering businesses to achieve their most ambitious goals."
                </p>
                <p className="text-lg text-gray-700 italic">
                  "Every day, our team wakes up with the opportunity to make a difference. Whether we're helping a startup scale globally or assisting an enterprise modernize their operations, we're not just writing code or designing interfaces—we're crafting the digital future."
                </p>
              </div>
              <p className="text-right text-[#007aff] font-semibold">- Alexander Thompson, CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b263a] mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders with diverse backgrounds and a shared commitment to excellence
            </p>
          </div>

          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-2xl transition-shadow ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <CardContent className="p-0">
                  <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/3 bg-[#f2f8ff] flex justify-center items-center">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-[100%] object-cover"
                      />
                    </div>
                    <div className="lg:w-2/3 p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-[#1b263a] mb-2">{leader.name}</h3>
                        <p className="text-xl text-[#007aff] font-semibold mb-4">{leader.role}</p>
                        <p className="text-gray-600 mb-6">{leader.bio}</p>
                      </div>

                      <div className="bg-[#007aff]/5 rounded-lg p-6 mb-6">
                        <p className="text-lg text-gray-700 italic">"{leader.quote}"</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-[#1b263a] mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {leader.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-[#007aff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[#1b263a] mb-3">Education</h4>
                          <p className="text-gray-600 text-sm mb-6">{leader.education}</p>
                          
                          <h4 className="font-semibold text-[#1b263a] mb-3">Connect</h4>
                          <div className="flex space-x-3">
                            <Button size="sm" variant="outline" className="p-2">
                              <LinkedinIcon className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2">
                              <TwitterIcon className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2">
                              <MailIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gradient-to-r from-[#1b263a] to-[#0c267b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our leadership approach and decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Servant Leadership</h3>
                <p className="text-gray-300">
                  We lead by serving our team, clients, and community. Success is measured not just by what we achieve, but by how we empower others to achieve their potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                <p className="text-gray-300">
                  We embrace bold ideas and calculated risks. Our leaders create environments where creativity thrives and breakthrough innovations emerge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Sustainable Growth</h3>
                <p className="text-gray-300">
                  We build for the long term, making decisions that benefit all stakeholders while creating positive impact for future generations.
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

export default Leadership;
