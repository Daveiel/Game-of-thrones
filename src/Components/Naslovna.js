import "../styles.css";
import { Link } from "react-router-dom";
export default function Naslovna() {
  return (
    <div className="naslov">
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
      <div className="pozadina">
        <p>i</p>
      </div>
      <a href="https://www.youtube.com/watch?v=KPLWWIOCOOQ" className="link2  ">
        <img src="naslovna_Slika.jpeg" alt="druga" className="slika2" />
        <img src="play-icon.jpg" alt="treca" className="slika3" />
        <p className="NaslovniT">
          03:13
          <br />
          Pogledajte trailer serije
        </p>
      </a>
      <p className="tekst2">
        Ljeta traju desetljećima. Zime mogu trajati cijeli život.
        <br /> I počinje borba za željezno prijestolje. Temeljeno na seriji
        bestselera Georgea RR Martina, a kreirali su je David Benioff i DB
        Weiss.
      </p>
      <h2 className="tekst3">Vaš vodič kroz Igru Prijestolja</h2>
      <a href="https://www.hbo.com/game-of-thrones/for-the-throne/reasons-to-start">
        <img src="lord1.jpeg" alt="cetvrta" className="slikee1" />
      </a>
      <p className="tekst4">AKO STE: POČETNIK</p>
      <a
        href="https://www.hbo.com/game-of-thrones/for-the-throne/reasons-to-start"
        className="link3"
      >
        5 razloga da počnete odmah
      </a>
      <p className="tekst5">
        Kakva je to gužva oko dolaska zime? Budući da je <br />
        cijela serija dostupna, sada je savršeno vrijeme
        <br /> da konačno započnete Game of Thrones . Evo pet razloga <br />
        zašto.
      </p>
      <a href="https://www.hbo.com/game-of-thrones/for-the-throne/reasons-to-start">
        <img src="ljudi.jpeg" alt="cetvrta" className="slikee2" />
      </a>
      <p className="tekst6">AKO: TRAŽITE VIŠE</p>
      <a
        href="https://www.makinggameofthrones.com/?_ga=2.240799617.324734085.1653924995-1095642719.1653924995"
        className="link4"
      >
        Posjetite službeni blog
      </a>
      <p className="tekst7">
        Opskrbljeni intervjuima, storyboardima,
        <br /> fotografijama rekvizita i činjenicama iz prošlih <br />
        sezona, upotrijebite Making Game of Thrones da uđete
        <br /> dublje u epsku seriju.
      </p>
    </div>
  );
}
