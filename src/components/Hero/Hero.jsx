import "./Hero.css";
import original from "../../assets/original.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={original} alt="" />
      <h2>ንውልቃዊ ድሌታት ዘማልአ ብ ክኢላታት ዝወሃብ ገዛ ንገዛ ትምህርቲ</h2>
      <p>
        ፅረት ዝሓለወ ትምህርቲ ብ ውፉያት መምህራንና ይርኸቡ። ውላድኩም ብ ኣካዳምያዊ ብቕዓት ብዘለዎም መማህራን ተሓጊዞም
        ብሉፃት ኮይኖም ክርከንቡ ንምግባር ዝተዳለወ ፣ ናይ ገዛ ንገዛ ትምህርቲ የመዝግብዎም ።
      </p>
    </div>
  );
};

export default Hero;
