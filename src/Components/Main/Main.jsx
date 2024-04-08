import React, { useEffect } from "react";
import "./main.css";
import img1 from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";
import img5 from "../../Assets/5.jpg";
import img6 from "../../Assets/6.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/8.jpg";
import img9 from "../../Assets/9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
const data = [
  {
    id: 1,
    srcImg: img1,
    destTitle: "Tokyo, Japan",
    location: "Asia",
    grade: "A+",
    fees: 1800,
    description:
      "Tokyo, the bustling capital of Japan, known for its futuristic cityscape, vibrant street life, and historic temples.",
  },
  {
    id: 2,
    srcImg: img2,
    destTitle: "Rome, Italy",
    location: "Europe",
    grade: "A",
    fees: 1600,
    description:
      "Rome, the Eternal City, famous for its ancient ruins such as the Colosseum, Roman Forum, and iconic Trevi Fountain.",
  },
  {
    id: 3,
    srcImg: img3,
    destTitle: "Bali, Indonesia",
    location: "Asia",
    grade: "A",
    fees: 2000,
    description:
      "Bali, known as the Island of the Gods, renowned for its stunning beaches, lush rice terraces, and vibrant culture.",
  },
  {
    id: 4,
    srcImg: img4,
    destTitle: "New York City, USA",
    location: "North America",
    grade: "A-",
    fees: 2500,
    description:
      "New York City, the city that never sleeps, famous for its iconic landmarks like Times Square, Central Park, and Statue of Liberty.",
  },
  {
    id: 5,
    srcImg: img5,
    destTitle: "Cairo, Egypt",
    location: "Africa",
    grade: "B+",
    fees: 1700,
    description:
      "Cairo, the capital of Egypt, known for its ancient pyramids, Sphinx, and vibrant bazaars filled with spices and textiles.",
  },
  {
    id: 6,
    srcImg: img6,
    destTitle: "Rio de Janeiro, Brazil",
    location: "South America",
    grade: "A",
    fees: 2200,
    description:
      "Rio de Janeiro, known for its stunning beaches, vibrant Carnival festival, and iconic Christ the Redeemer statue.",
  },
  {
    id: 7,
    srcImg: img7,
    destTitle: "Barcelona, Spain",
    location: "Europe",
    grade: "A-",
    fees: 1900,
    description:
      "Barcelona, famous for its unique architecture by Antoni Gaudí, including Sagrada Família and Park Güell, as well as its lively nightlife.",
  },
  {
    id: 8,
    srcImg: img8,
    destTitle: "Cape Town, South Africa",
    location: "Africa",
    grade: "B",
    fees: 2100,
    description:
      "Cape Town, famous for its breathtaking landscapes, including Table Mountain, beautiful beaches, and diverse wildlife.",
  },
  {
    id: 9,
    srcImg: img9,
    destTitle: "Bangkok, Thailand",
    location: "Asia",
    grade: "B",
    fees: 1500,
    description:
      "Bangkok, the vibrant capital of Thailand, known for its ornate temples, bustling street markets, and delicious cuisine.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, srcImg, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDescination">
                <div className="imageDiv">
                  <img src={srcImg} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>{" "}
                      </span>
                    </div>
                    <div className="price">
                      <h5>${fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
