import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import axios from "axios";
import { set } from "date-fns";

const Contact = () => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/208d2f4e-b6a4-48e1-9811-1e3471041ad0",
        formData
      );

      if (response.status === 200) {
        setStatus(true);
        setTimeout(() => {
          setStatus(false);
        }, 3000);
        setMessage(response.data.message || "Your submit was sucessfull ✅");
      }
    } catch (error) {
      console.log("failed to submit contact form: ", error);
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
      setMessage(error || "Your submit was not sucessfull");
    } finally {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />
      {status ? (
        <div className="fixed bg-blue-950 p-4 bottom-1 right-1 text-white rounded flex gap-4 z-30 shadow-2xl shadow-blue-600">
          {message}
        </div>
      ) : (
        ""
      )}

      {/* Hero Section */}
      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team to
            discuss your project and discover how we can help you achieve your
            goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1b263a] mb-8">
                Start Your Project
              </h2>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007aff] focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="branding">Branding & Identity</option>
                        <option value="uiux">UI/UX & Product Design</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="ai">AI Solutions & Integration</option>
                        <option value="marketing">
                          Digital Marketing & Strategy
                        </option>
                        <option value="infrastructure">
                          Network Infrastructure
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#007aff] hover:bg-[#007aff]/80 text-white py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1b263a] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start">
                    <Mail className="h-6 w-6 text-[#007aff] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1b263a] mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600">info@nexatrux.com</p>
                      <p className="text-gray-600">info@nexatrux.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start">
                    <Phone className="h-6 w-6 text-[#007aff] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1b263a] mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600">+2348105182900</p>
                      <p className="text-gray-600">+2347031337482</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start">
                    <MapPin className="h-6 w-6 text-[#007aff] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1b263a] mb-1">
                        Global Presence
                      </h3>
                      <p className="text-gray-600">
                        North America • Europe • Africa
                      </p>
                      <p className="text-gray-600">
                        Remote-first with global reach
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start">
                    <Clock className="h-6 w-6 text-[#007aff] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1b263a] mb-1">
                        Response Time
                      </h3>
                      <p className="text-gray-600">
                        We respond within 48 hours
                      </p>
                      <p className="text-gray-600">
                        Emergency support available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp/Live Chat Widget Placeholder */}
              <Card className="bg-gradient-to-br from-[#007aff] to-[#0c267b] text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Chat with our team directly for quick answers to your
                    questions.
                  </p>
                  <Button className="bg-white text-[#007aff] hover:bg-gray-100">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
