import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c2609d0-9912-4d08-b954-a99fb49dad89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          ንውላድኩም ብኸመይ ክንሕግዘልኩም ከም እንኽእል ንምዝታይንን ንትደልይዎ ሓበረታ ንምርካብ ብኢመይል ኣድራሻና ወይ
          ድማ ይደውሉልና::
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Homewise@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            251 978 23 34 56
          </li>
          <li>
            <img src={location_icon} alt="" />
            Romanat ,Mekelle <br />
            Tigray
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Yuor Phone Number"
            required
          />
          <label>Write Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
