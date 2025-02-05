import "./About.css";
import about_img from "../../assets/aboutt.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>እንኻዕ ናብ መርበብ ሓበሬታና ብደሓን መፁ</h3>
        <h2>ሆም ዋይዝ ቲቶር</h2>
        <p>
          እንኻዕ ናብ ሆም ዋይዝ ብደሓን መጻእኩም ንሕና ንተማሃሮ ጽሬቱ ዝሓለወ ትምህርቲ ኣገልግሎትን ገዛ ንገዛን ብ
          ኦንላይን ንምሃብ ዝተጣየሽና ትካል ኢና።
        </p>
        <p>
          ተልእኾና ፅሬቱ ዘሓለወ ትምህርቲ ንኹሉ ተበፃሒ ምግባር እዩ። ኣካዳሚያዊ ደገፍ፡ ምዕባይ ክእለት፡ን ደቆም ናይ
          ትምህርቲ መፍትሒታት እንትደልዩ ሆም ዋይዝ ምርጭኦም ይገበሩ
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default About;
