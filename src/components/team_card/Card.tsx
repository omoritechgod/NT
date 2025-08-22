import React from "react";
import "./card.css";
import { Linkedin, Twitter } from "lucide-react";

const Card = ({ item }) => {
  const { name, position, image, socials } = item;
  return (
    <div className="card_container">
      <div className="card_content">
        <div className="image">
          <img src={image} alt="staff image" />
        </div>
        <div className="w-full px-10 py-8 flex items-start justify-between">
          <div className="max-w-48 capitalize font-bold">
            <h3 className="text-slate-400 ">{name}</h3>
            <p className="text-slate-400 mt-3 text-sm">{position}</p>
          </div>
          <div>
            <h3 className="text-slate-400  capitalize font-bold">
              Connect With:
            </h3>
            <div className="flex justify-center gap-5 mt-3 pb-4">
              <a className="text-slate-400 mt-3 text-sm hover:text-slate-600" href={socials} target="_blank">
                <Linkedin />
              </a>
              <a className="text-slate-400 mt-3 text-sm hover:text-slate-600" href={socials} target="_blank">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
