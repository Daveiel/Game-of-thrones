import "../styles.css";
import Brojevi from "./Galerija.js";
import Glumci from "./Prva.js";
export default function Prva() {
  const glumci = {
    prvi: "Emilia Clarke | Daenerys Targeryan",
    drugi: "Kit Harigton | John Snow",
    treci: "Lena Headey | Cersi Lanister",
    cetvrti: "Peter Dinklage| Tiryion Lanister",
    peti: "Nikolaj Coaster-Waldu| Jaime Lanister"
  };
  let sez = 64;
  let pod = 8;
  let sez1 = 10;
  let sez2 = 10;
  let sez3 = 10;
  let sez4 = 10;
  let sez5 = 10;
  let sez6 = 10;
  let sez7 = 7;
  let sez8 = 6;
  let emy = 3481;
  return (
    <div className="prvi">
      <div className="div1">
        <Glumci Posalji={glumci} />
        <br />
        <Brojevi
          Br1={sez}
          Br2={pod}
          Br3={sez1}
          Br4={sez2}
          Br5={sez3}
          Br6={sez4}
          Br7={sez5}
          Br8={sez6}
          Br9={sez7}
          Br10={sez8}
          Br11={emy}
        />
      </div>
    </div>
  );
}
