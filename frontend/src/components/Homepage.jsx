import {
  faBandcamp,
  faInstagram,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import data from "../data/translate.json";

export default function Homepage(props) {
  const { lang } = props;

  return (
    <div
      className={"h-screen w-[100%] flex flex-col text-center justify-center items-center"}
    >
      <h1 className="text-2xl text-orange-400 font-sigmar">
        {data[`${lang}`].homepage.text.toLowerCase()}
      </h1>
      <img src="globespin.gif" className="z-0 mb-2 h-1/2" />
      <span>
        <a
          className="m-2 text-xl transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="mailto:linguafrancamusic1@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} className="contact__social" />
        </a>
        <a
          className="m-2 text-xl transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://www.instagram.com/linguafrancamusic"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="contact__social" />
        </a>
        <a
          className="m-2 text-xl transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://open.spotify.com/artist/16L4qVSdePL6JJKQfNTod1?si=83pz88ZMR3uPJYlqiyHUnA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} className="contact__social" />
        </a>
        <a
          className="m-2 text-xl transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://bit.ly/linguafranca-yt"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="contact__social" />
        </a>
        <a
          className="m-2 text-xl transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://soundcloud.com/linguafranca-music"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} className="contact__social" />
        </a>
        <a
          className="m-2 text-xl transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://linguafranca1.bandcamp.com/album/waiting-for-you"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faBandcamp} className="contact__social" />
        </a>
      </span>
    </div>
  );
}
