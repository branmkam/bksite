import {
  faApple,
  faBandcamp,
  faInstagram,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../data/translate.json";

export default function Homepage(props) {
  const { lang } = props;

  return (
    <div
      className={
        "h-[95vh] w-[100%] mt-2 flex flex-col text-center justify-center items-center"
      }
    >
      <h1 className="text-lg text-orange-400 md:text-2xl font-sigmar">
        {data[`${lang}`].homepage.text.toLowerCase()}
      </h1>
      <img src="globespin.gif" className="z-0 mb-2 h-1/2" />
      <span className="text-2xl md:text-4xl">
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://www.instagram.com/linguafrancamusic"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://open.spotify.com/artist/16L4qVSdePL6JJKQfNTod1?si=83pz88ZMR3uPJYlqiyHUnA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://bit.ly/linguafranca-yt"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://soundcloud.com/linguafranca-music"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://music.apple.com/us/artist/linguafranca/1581609961"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faApple} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
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
