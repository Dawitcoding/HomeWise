import "./Programs.css";
import homeLogo from "../../assets/homeLogo.png";
import fetenan from "../../assets/fetenan.png";
import collage from "../../assets/collage.png";
import computer from "../../assets/computer.png";
import nttk from "../../assets/nttk.png";
import electric from "../../assets/electric (2).png";

const Programs = () => {
  return (
    <div className="services">
      <div className="cards">
        <div className="card">
          <img src={homeLogo} alt="" />
          <h3>ገዛ ን ገዛ ትምህርቲ</h3>
          <p>ብክኢላታት መምህራን ዝተሓገዘ ገዛ ንገዛ ቲምህርቲ</p>
        </div>
        <div className="card">
          <img src={fetenan} alt="" />
          <h3>ተምሃሮ ንፈተና ድልዋት ምግባር</h3>
          <p>ተምሃሮ ብ ክልላዊን ብሐራዊን ዝወሃቦም ፈተና ድልዋት ምግባር</p>
        </div>
        <div className="card">
          <img src={collage} alt="" />
          <h3>ኣሳይመንት ፕሮጀችት ሓገዝ</h3>
          <p>ን ተምሃሮ ዝወሃብ ኣሳይመንትን ፕሮጀችትን ንክሰርሑ ዘክእል ዓቕሚ ምፍጣር</p>
        </div>
        <div className="card">
          <img src={computer} alt="" />
          <h3>መሠረታዊ ናይ ኮምፒውተር ክእለታት</h3>
          <p>ንተማሃሮ ኣገደስቲ፣ ተግባራውን መሰረታውን ክእለት ኮምፒተር ንክህልዎም ምግባር</p>
        </div>
        <div className="card">
          <img src={nttk} alt="" />
          <h3>ኔትዎትክ ኢንስታሌሽን</h3>
          <p>ንድርጅታትን ትካላትን ዘተኣማምን፣ ውሑስን ስሉጥን ኔትዎርክ ዝርግሐ</p>
        </div>
        <div className="card">
          <img src={electric} alt="" />
          <h3>አሌክትሪክ ዝርገሐ</h3>
          <p>ንድርጅታትን ትካላትን ሞያዊ፣ ልክዕን ዘተኣማምንን አሌክትሪክ ዝርገሐ</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
