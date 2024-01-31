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
import Countdown from "./Countdown";

export default function Homepage(props) {
  const { lang } = props;

  return (
    <div
      className={
        "h-[95vh] w-[100%] z-50 mt-2 flex flex-col text-center justify-center items-center animate-[fadein_1s_ease-in-out]"
      }
    >
      <h1 className="z-50 text-lg text-orange-400 transition md:text-2xl font-sigmar">
        {data[`${lang}`].homepage.text.toLowerCase()}
      </h1>

      <div className="w-full m-2 text-center md:m-6 h-1/2">
        <div className="relative w-full h-full">
          <img
            className="absolute z-0 object-contain w-full h-full brightness-[50%]"
            src="globespin-transparent.gif"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <Countdown
              className={"font-afacad font-bold text-4xl sm:text-5xl drop-shadow-[0_20px_10px_rgba(0,0,0,1)] md:text-7xl text-orange-400"}
              time={"2024-02-12T00:00:00:000"}
              seconds
            />
          </div>
        </div>
      </div>

      {/* <img src="globespin-transparent.gif" className="z-0 w-1/2 mb-2 h-1/2" /> */}

      <span className="z-50 text-2xl md:text-4xl">
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500 hover"
          href="https://www.instagram.com/brankam.music"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="contact__social" />
        </a>
        {/* <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://open.spotify.com/artist/16L4qVSdePL6JJKQfNTod1?si=83pz88ZMR3uPJYlqiyHUnA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} className="contact__social" />
        </a> */}
        {/* <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://bit.ly/linguafranca-yt"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="contact__social" />
        </a> */}
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://soundcloud.com/brankam-music"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} className="contact__social" />
        </a>
        {/* <a
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
        </a> */}
      </span>
      <p className="text-[12px] z-50 font-afacad">
        {data[`${lang}`].homepage.coming_soon}
      </p>
    </div>
  );
}
