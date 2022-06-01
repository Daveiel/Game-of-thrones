import "../styles.css";
import { Link } from "react-router-dom";
export default function Prva() {
  return (
    <div className="prvi">
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
      <h2 className="tekst111">Glumačka ekipa pamti</h2>
      <p className="tekst112">
        Prvi dani na setu, omiljeni kostimi i scene koje nikada neće zaboraviti:
        glumci se osvrću na snimanje osam sezona Igre prijestolja.
      </p>
      <table>
        <tr>
          <td>
            <a
              href="https://www.youtube.com/watch?v=ABJ-MSGmmUw"
              className="link6"
            >
              <img src="sl1.jpeg" className="slija5" alt="" />
              <p className="text">Emilia Clarke | Daenerys Targeryan</p>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.youtube.com/watch?v=GKxbuU7c8Uo"
              className="link6"
            >
              <img src="sl2.jpeg" className="slija4" alt="" />
              <p className="text">Kit Harigton | John Snow</p>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.youtube.com/watch?v=-cVrYZZ5pKM"
              className="link6"
            >
              <img src="sl3.jpeg" className="slija4" alt="" />
              <p className="text">Lena Headey | Cersi Lanister</p>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.youtube.com/watch?v=x_RgcV-ljGI"
              className="link6"
            >
              <img src="sl4.jpeg" className="slija4" alt="" />
              <p className="text">Peter Dinklage| Tiryion Lanister</p>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.youtube.com/watch?v=vymHe0KSsC8"
              className="link6"
            >
              <img src="sl5.jpeg" className="slija4" alt="" />
              <p className="text">Nikolaj Coaster-Waldu| Jaime Lanister</p>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
