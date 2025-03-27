import React from "react";
import "./testimonial.css";
import { BiPlanet, BiSolidQuoteLeft } from "react-icons/bi";

const Testimonial = () => {
  const clients = [
    {
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      profile: "/assets/profile1.png",
      name: "Oberon Shaw, MCH",
      designation: "Head of Talent Acquisition, North America",
    },
    {
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      profile: "/assets/profile2.png",
      name: "Oberon Shaw, MCH",
      designation: "Head of Talent Acquisition, North America",
    },
    {
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      profile: "/assets/profile3.png",
      name: "Oberon Shaw, MCH",
      designation: "Head of Talent Acquisition, North America",
    },
  ];
  return (
    <div className="testimonial">
      <h1>What Our Clients Says</h1>
      <div className="testimonial-container">
        {clients.map((client, index) => (
          <div key={index}>
            <BiSolidQuoteLeft />
            <p>{client.comment}</p>
            <hr />
            <div className="client-details">
              <img src={client.profile} alt={client.name} />
              <div>
                <h5>{client.name}</h5>
                <p>{client.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {}
    </div>
  );
};

export default Testimonial;
