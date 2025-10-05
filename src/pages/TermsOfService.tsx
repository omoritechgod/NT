// ===== FILE: src/pages/TermsOfService.tsx =====
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, AlertCircle, Scale } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: `By accessing and using the Nexa Trux Digital Technologies (NT) website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.`
    },
    {
      icon: Shield,
      title: "2. Services Description",
      content: `NT provides premium technology solutions including but not limited to: Web Development, Mobile App Development, AI Solutions & Model Integration, UI/UX & Product Design, Branding & Identity, Digital Marketing & Strategy, and Network Infrastructure Setup. All services are subject to the specific terms outlined in individual service agreements and proposals.`
    },
    {
      icon: Scale,
      title: "3. User Responsibilities",
      content: `You agree to: (a) Provide accurate, current, and complete information when engaging our services; (b) Maintain the security and confidentiality of any login credentials; (c) Not use our services for any illegal or unauthorized purpose; (d) Comply with all applicable laws and regulations; (e) Respect intellectual property rights; (f) Not interfere with or disrupt our services or servers.`
    },
    {
      icon: AlertCircle,
      title: "4. Intellectual Property Rights",
      content: `All content, materials, and deliverables created by NT remain our intellectual property until full payment is received, at which point agreed-upon rights are transferred as specified in the project agreement. You retain ownership of any materials you provide to us. NT retains the right to showcase completed projects in our portfolio unless otherwise specified in writing.`
    }
  ];

  const additionalTerms = [
    {
      title: "5. Payment Terms",
      points: [
        "Payment schedules are outlined in individual project proposals",
        "Standard terms: 50% upfront, 50% upon project completion",
        "Late payments may incur interest charges as specified in agreements",
        "All fees are non-refundable unless otherwise stated in writing",
        "Currency: All payments in USD, NGN, or as agreed upon"
      ]
    },
    {
      title: "6. Project Delivery & Timelines",
      points: [
        "Timelines are estimates and may vary based on project complexity",
        "Delays caused by client feedback or material provision may extend timelines",
        "NT will make reasonable efforts to meet agreed deadlines",
        "Force majeure events may affect delivery schedules",
        "Changes to project scope may result in timeline adjustments"
      ]
    },
    {
      title: "7. Warranties & Disclaimers",
      points: [
        "Services are provided 'as is' without warranties of any kind",
        "We warrant that services will be performed in a professional manner",
        "We do not guarantee specific business results or outcomes",
        "Third-party services and integrations are subject to their own terms",
        "We are not liable for losses resulting from service interruptions"
      ]
    },
    {
      title: "8. Limitation of Liability",
      points: [
        "Our liability is limited to the amount paid for the specific service",
        "We are not liable for indirect, incidental, or consequential damages",
        "This includes loss of profits, data, or business opportunities",
        "Some jurisdictions do not allow liability limitations",
        "Client is responsible for backing up their own data and materials"
      ]
    },
    {
      title: "9. Confidentiality",
      points: [
        "Both parties agree to protect confidential information",
        "Confidential information excludes publicly available information",
        "Obligations continue for 2 years after project completion",
        "We may disclose information if required by law",
        "NDAs may be executed for highly sensitive projects"
      ]
    },
    {
      title: "10. Termination",
      points: [
        "Either party may terminate services with written notice",
        "Client remains liable for services rendered up to termination",
        "Termination does not affect payment obligations for completed work",
        "Materials and deliverables up to termination point will be provided",
        "Refund policies (if any) are specified in individual agreements"
      ]
    },
    {
      title: "11. Dispute Resolution",
      points: [
        "Disputes will first be addressed through good-faith negotiation",
        "If unresolved, parties agree to mediation before litigation",
        "Governing law: Federal Republic of Nigeria",
        "Venue for legal proceedings: Delta State, Nigeria",
        "Each party bears their own legal costs unless otherwise awarded"
      ]
    },
    {
      title: "12. General Provisions",
      points: [
        "These terms constitute the entire agreement between parties",
        "Any modifications must be made in writing",
        "If any provision is found invalid, others remain in effect",
        "Failure to enforce any right does not constitute a waiver",
        "These terms are binding on successors and assigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />

      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 text-[#007aff] mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border-l-4 border-[#007aff]">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Nexa Trux Digital Technologies (NT). These Terms of Service govern your use of our website, services, and products. By engaging with NT, you agree to comply with and be bound by these terms. We are committed to transparency and building lasting relationships based on trust and mutual understanding.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#007aff]/10 rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-[#007aff]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[#1b263a] mb-4">{section.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            {additionalTerms.map((term, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#1b263a] mb-4">{term.title}</h2>
                  <ul className="space-y-3">
                    {term.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-[#007aff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#1b263a] to-[#0c267b] rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions or concerns about our Terms of Service, please don't hesitate to reach out.
            </p>
            <div className="space-y-2">
              <p className="text-[#007aff]">Email: info@nexatrux.com</p>
              <p className="text-gray-300">Location: Warri, Delta State, Nigeria</p>
            </div>
            <Link to="/contact">
              <button className="mt-6 px-8 py-3 bg-[#007aff] hover:bg-[#007aff]/80 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              By using NT services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. NT reserves the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;

