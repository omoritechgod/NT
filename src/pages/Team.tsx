import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Details from "@/components/rotating_card/Details";

const Team = () => {
  return (
    <div className="min-h-screen ">
      <Navigation />

      <section className="pt-20 pb-12 text-white bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make NT's mission possible.
          </p>
        </div>
      </section>

      {/* flipping card */}
      <Details />


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1b263a] mb-1">
            Meet Our Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-[750px] w-[90%] mx-auto">
            meet the brilliant minds behind our success. crafting creative
            solutions every day. Shaping the future with passion and expertise{" "}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
