
// ===== FILE: src/pages/PrivacyPolicy.tsx =====
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us, including: Personal identification information (name, email address, phone number, company name), Project requirements and specifications, Payment and billing information, Communication preferences, and Technical data from your use of our website (IP address, browser type, device information, cookies).`
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: `We use the collected information to: Provide, maintain, and improve our services, Process transactions and send related information, Send you technical notices, updates, and support messages, Respond to your inquiries and provide customer service, Monitor and analyze trends and usage, Protect against fraudulent, unauthorized, or illegal activity, Comply with legal obligations.`
    },
    {
      icon: Shield,
      title: "3. Information Sharing and Disclosure",
      content: `We do not sell or rent your personal information to third parties. We may share your information with: Service providers who perform services on our behalf (payment processors, hosting providers, analytics providers), Professional advisors (lawyers, accountants), Law enforcement or regulatory authorities when required by law, Business partners with your explicit consent.`
    },
    {
      icon: Lock,
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include: Encryption of data in transit and at rest, Regular security assessments, Access controls and authentication, Secure backup procedures, Employee training on data protection.`
    }
  ];

  const additionalPolicies = [
    {
      title: "5. Data Retention",
      points: [
        "We retain personal information for as long as necessary to fulfill service obligations",
        "Project-related data is retained for 7 years for legal and audit purposes",
        "Marketing communications data is retained until you unsubscribe",
        "You may request deletion of your data at any time (subject to legal requirements)",
        "Anonymized data may be retained indefinitely for analytics"
      ]
    },
    {
      title: "6. Your Rights and Choices",
      points: [
        "Access: Request copies of your personal information",
        "Correction: Request correction of inaccurate information",
        "Deletion: Request deletion of your information (with exceptions)",
        "Objection: Object to processing of your information",
        "Data Portability: Request transfer of your data to another service",
        "Opt-out: Unsubscribe from marketing communications at any time"
      ]
    },
    {
      title: "7. Cookies and Tracking Technologies",
      points: [
        "We use cookies to enhance user experience and analyze site usage",
        "Essential cookies are required for site functionality",
        "Analytics cookies help us understand how visitors use our site",
        "Marketing cookies may be used for targeted advertising",
        "You can control cookies through your browser settings",
        "Third-party services may use their own cookies (Google Analytics, etc.)"
      ]
    },
    {
      title: "8. International Data Transfers",
      points: [
        "Your information may be transferred to servers outside Nigeria",
        "We ensure adequate protection through contractual safeguards",
        "Cloud services may be hosted in multiple jurisdictions",
        "We comply with applicable data protection regulations",
        "Transfers are made only to countries with adequate protection"
      ]
    },
    {
      title: "9. Children's Privacy",
      points: [
        "Our services are not directed to individuals under 18",
        "We do not knowingly collect information from children",
        "If we learn we have collected child data, we will delete it",
        "Parents/guardians can contact us about child privacy concerns",
        "NT Learn educational programs may collect data with parental consent"
      ]
    },
    {
      title: "10. Third-Party Links and Services",
      points: [
        "Our website may contain links to third-party sites",
        "We are not responsible for third-party privacy practices",
        "We recommend reviewing privacy policies of linked sites",
        "Third-party integrations (payment processors, analytics) have their own policies",
        "Use of third-party services is at your own discretion"
      ]
    },
    {
      title: "11. Changes to This Privacy Policy",
      points: [
        "We may update this policy from time to time",
        "Changes will be posted on this page with updated date",
        "Significant changes will be communicated via email",
        "Continued use after changes constitutes acceptance",
        "We encourage periodic review of this policy"
      ]
    },
    {
      title: "12. Contact Us About Privacy",
      points: [
        "Email: info@nexatrux.com",
        "Subject Line: Privacy Inquiry",
        "Response Time: Within 48 hours for privacy requests",
        "Data Protection Officer: Available upon request",
        "Address: Warri, Delta State, Nigeria"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />

      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-[#007aff] mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border-l-4 border-[#007aff]">
            <p className="text-gray-700 leading-relaxed">
              At Nexa Trux Digital Technologies (NT), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully.
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
            {additionalPolicies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#1b263a] mb-4">{policy.title}</h2>
                  <ul className="space-y-3">
                    {policy.points.map((point, idx) => (
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

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-[#1b263a] to-[#0c267b] text-white text-center">
              <CardContent className="p-6">
                <UserCheck className="h-12 w-12 text-[#007aff] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Your Rights</h3>
                <p className="text-gray-300 text-sm">
                  You have full control over your personal data and can exercise your rights at any time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#007aff] to-[#0c267b] text-white text-center">
              <CardContent className="p-6">
                <Lock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Secure Data</h3>
                <p className="text-gray-300 text-sm">
                  We employ industry-standard security measures to protect your information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1b263a] to-[#007aff] text-white text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-[#007aff] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Transparency</h3>
                <p className="text-gray-300 text-sm">
                  We are committed to being transparent about how we use your data.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#1b263a] to-[#0c267b] rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Privacy Questions or Concerns?</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, we're here to help.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-[#007aff]">Email: info@nexatrux.com</p>
              <p className="text-gray-300">Subject: Privacy Inquiry</p>
              <p className="text-gray-300">Response Time: Within 48 hours</p>
            </div>
            <Link to="/contact">
              <button className="px-8 py-3 bg-[#007aff] hover:bg-[#007aff]/80 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              By using NT services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use our services. We reserve the right to update this policy, and continued use after changes constitutes acceptance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;