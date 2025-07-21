import React from "react";
import "./details.css";
import { Group } from "lucide-react";

const Details = () => {
  return (
    <section className="details_container">
      <div className="details_flip_content">
        <div className="details_flip_card">
          {/* front page*/}
          <div className="front_page">
            <span><Group size={35} /></span>
            <h3 className="text-[30px] font-bold">Team spirit</h3>
            <p>
              At Nexa Trux, our strength lies in our shared passion for
              innovation, relentless collaboration, and unwavering commitment to
              making a difference. We operate as a tightly-knit unit, blending
              diverse expertise in software, AI, robotics, and design to deliver
              transformative solutions that drive customer success.
            </p>
          </div>
          <div className="back_page">
            <span></span>
            <h3></h3>
            <p>
              Beyond technology, we champion a culture of empowerment and
              purpose, reflected in our initiatives like NT Bootcamp, where we
              equip the next generation with future-ready skills. Together, we
              don't just build—we inspire progress, foster inclusivity, and
              engineer a sustainable digital future
            </p>
          </div>
        </div>
      </div>
      <div className="details_row">
        {detailsText.map(({ icon, title, description }, index) => (
          <div key={index} className="details_card">
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const detailsText = [
  {
    icon: "",
    title: "Collaborative Excellence",
    description:
      " Seamless teamwork across disciplines to solve complex challenges.",
  },
  {
    icon: "",
    title: "Customer-Centric Drive",
    description:
      " Success measured by the real-world impact we create for clients.",
  },
  {
    icon: "",
    title: "Purpose-Led Innovation",
    description:
      "Technology with a mission, aligned with global sustainability goals.",
  },
  {
    icon: "",
    title: "Empowerment Culture",
    description:
      "Investing in growth, both within our team and in the communities we serve.",
  },
];

export default Details;
