import "../styles.css";

export default function Header() {
  return (
    <div className="head">
      <a href="https://www.hbo.com/" className="link1">
        {" "}
        <img src="HBO_logo.svg.png" alt="prva" className="slika1" />{" "}
      </a>

      <h2 className="tekst1"> GAME OF THRONES </h2>
      <p className="par1">Nino David Dukić g2p</p>
    </div>
  );
}
