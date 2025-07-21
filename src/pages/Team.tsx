import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Details from "@/components/rotating_card/Details";
import Card from "@/components/team_card/Card";
import joel from "@/assets/team/expert-s-joel.png";
import emman from "@/assets/team/expert-s-Emma-nnadi.png";
import kenile from "@/assets/team/expert-s-Kenile.png";
import obialor from "@/assets/team/expert-s-Obialor.png";
import victor from "@/assets/team/expert-s-Victor.png";

const teamWorkersArray = [
  {
    name: "kenile",
    position: "ceo",
    image: kenile,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "obialor chisom",
    position: "flutter developer",
    image: obialor,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Emmanuel Nnadi",
    position: "cyber security expert",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Jaey",
    position: "senior backend developer",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Victor Eberechi",
    position: "Ai and Embedded system expert",
    image: victor,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Joel Dartey",
    position: "Advancing developer",
    image: joel,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Grace otitoju",
    position: "Graphics designer ",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
  {
    name: "Beboye Emmanuel",
    position: "Technical Writer",
    image: emman,
    desc: "",
    socials: "https://www.linkedin.com/in/",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen ">
      <Navigation />

      <section className="pt-[150px] pb-12 text-white bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make NT's mission possible.
          </p>
        </div>
      </section>

      {/* flipping card */}
      <div className="w-full flex items-center justify-center">
        <Details />
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0c267b] mb-1">
            Meet Our Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-[750px] w-[90%] mx-auto">
            meet the brilliant minds behind our success. crafting creative
            solutions every day. Shaping the future with passion and expertise{" "}
          </p>
        </div>
        <div className="flex justify-center items-center my-[130px]">
          <div
            className="grid gap-x-16 gap-y-24"
            style={{
              width: "80%",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            }}
          >
            {teamWorkersArray.map((item: object, index: number) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
