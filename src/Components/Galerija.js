import "../styles.css";
import { Link } from "react-router-dom";
export default function Galerija({
  Br1,
  Br2,
  Br3,
  Br4,
  Br5,
  Br6,
  Br7,
  Br8,
  Br9,
  Br10,
  Br11
}) {
  let zbr_S = Br1 / Br2;
  let zbr_E = Br3 + Br4 + Br5 + Br6 + Br7 + Br8 + Br9 + Br10;
  let dj_e = Math.sqrt(Br11);
  return (
    <div className="gale">
      <table className="tab1">
        <tr>
          <td className="stup1">
            <Link to="/" className="pod_L1">
              {" "}
              NASLOVNA
            </Link>
          </td>
          <td className="stup1">
            <Link to="/prva" className="pod_L1">
              {" "}
              GLUMCI
            </Link>
          </td>
          <td className="stup1">
            <Link to="/galerija" className="pod_L1">
              {" "}
              GALERIJA
            </Link>
          </td>
          <td className="stup2">
            <Link to="/druga" className="pod_L1">
              {" "}
              PRIJAVA
            </Link>
          </td>
        </tr>
      </table>
      <div className="props">
        <p className="tekst8">Igra Prijestolja</p>
        <p className="tekst9">8 SEZONA</p>
        <p className="tekst10">73 EPIZODE</p>
      </div>
      <div className="emy">DOBITNIK 59 EMMY-A</div>
      <img src="spoilers.jpg" alt="spolier" className="slija1" />
      <div className="galerija">
        <p className="tekst13">Izaberi Svoju Sezonu</p>
        <p className="tekst12">
          {" "}
          Vaš odabir će prikazati ikoničan trenutak iz odabrane sezone{" "}
        </p>
        <table>
          <tr>
            <td>
              <a
                href="https://www.youtube.com/watch?v=ucB4UrhI-3w"
                className="link6"
              >
                <div className="div2">
                  <img
                    src="naslovna_Slika.jpeg"
                    alt="sez1"
                    className="slija2"
                  />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">1</p>
                </div>
              </a>
            </td>

            <td>
              <a
                href="https://www.youtube.com/watch?v=AlhHGUfCYw4"
                className="link6"
              >
                <div className="div2">
                  <img src="kruna.jpeg" alt="sez2" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">2</p>
                </div>
              </a>
            </td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=wBtkdje5OfY"
                className="link6"
              >
                <div className="div2">
                  <img src="ljudi2.jpeg" alt="sez3" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">3</p>
                </div>
              </a>
            </td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=xZY43QSx3Fk"
                className="link6"
              >
                <div className="div2">
                  <img src="cetvorka.jpeg" alt="sez4" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">4</p>
                </div>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.youtube.com/watch?v=A0pLbTXPHng"
                className="link6"
              >
                <div className="div2">
                  <img src="brod.jpeg" alt="sez5" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">5</p>
                </div>
              </a>
            </td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=yu8eRaq1FUM"
                className="link6"
              >
                <div className="div2">
                  <img src="lica.jpeg" alt="sez6" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">6</p>
                </div>
              </a>
            </td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=giYeaKsXnsI"
                className="link6"
              >
                <div className="div2">
                  <img src="walker.jpeg" alt="sez7" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">7</p>
                </div>
              </a>
            </td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=rlR4PJn8b8I"
                className="link6"
              >
                <div className="div2">
                  <img src="tron.jpeg" alt="sez8" className="slija2" />
                  <p className="tekst11">SEZONA</p>
                  <p className="tekst11">8</p>
                </div>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
