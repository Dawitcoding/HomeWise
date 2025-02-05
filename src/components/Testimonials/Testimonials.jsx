import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import dave from "../../assets/dave.jpg";
import binni from "../../assets/binni.jpg";
import kudus from "../../assets/kudus.jpg";
import semu from "../../assets/semu.jpg";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={dave} alt="" />
                <div>
                  <h3>Dawit </h3>
                  <span> Degree , Mekelle University</span>
                </div>
              </div>
              <p>
                Computer Science and Engineering graduate with over a year of
                experience working as a Network Administrator at DECSI
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={kudus} alt="" />
                <div>
                  <h3>Kudus </h3>
                  <span>Degree,Adigrat University </span>
                </div>
              </div>
              <p>
                hold a degree in IT and have over a year of experience as a
                Network Administrator at DECSI with exprience language teacher.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={semu} alt="" />
                <div>
                  <h3>Semhal </h3>
                  <span>Degree, Adama univertiy of technology</span>
                </div>
              </div>
              <p>
                hold an Electrical Engineering degree from Adama University and
                have over a year of experience working as a Electrician at DECSI
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={binni} alt="" />
                <div>
                  <h3>Binyam </h3>
                  <span>Master, Adigrat University</span>
                </div>
              </div>
              <p>
                I hold a Master's degree in Management and a Bachelor's degree
                in Mechanical Engineering, with over three years of experience
                at DECSI
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
