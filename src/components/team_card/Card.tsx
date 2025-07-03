import React from "react";
import "./card.css";
import { Linkedin } from "lucide-react";

const Card = ({ item }) => {
  const { name, position, image, socials } = item;
  return (
    <div className="card_container">
      <div className="card_content">
        <span>
          <img src={image} alt="staff image" />
        </span>
        <h3 className="text-red-700">{name}</h3>
        <p>{position}</p>
        <span className="socials">
          <a href={socials} target="_blank">
            <Linkedin />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
