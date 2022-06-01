import "../styles.css";

export default function Footer() {
  return (
    <div className="foot">
      <p className="FOTt">ZAPRATI GAME OF THRONES</p>
      <div className="fot1">
        <a href="https://www.instagram.com/gameofthrones/" className="ikone">
          <img src="Insta.webp" alt="ikona1" className="slija" />
        </a>
        <a href="https://twitter.com/gameofthrones" className="ikone">
          <img src="twiter.jpg" alt="ikona1" className="slija" />
        </a>
        <a
          href="https://www.tiktok.com/discover/Game-of-Thrones"
          className="ikone"
        >
          <img src="tiktok.jpg" alt="ikona1" className="slija" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQzdMyuz0Lf4zo4uGcEujFw"
          className="ikone"
        >
          <img src="you.png" alt="ikona1" className="slija" />
        </a>
        <p className="FOTt">
          © 2022.Home Box Office, Inc. Sva prava pridržana. Ova web stranica
          može sadržavati sadržaj za odrasle.
        </p>
      </div>
    </div>
  );
}
