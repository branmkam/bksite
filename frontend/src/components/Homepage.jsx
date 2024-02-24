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
import ParseISO from "../data/ParseISO";

export default function Homepage(props) {
  const { lang } = props;
  // const afterTime = new Date() < ParseISO("2024-02-12T00:00:00");

  return (
    <div
      className={
        "h-[95vh] z-50 mt-2 flex flex-col text-center justify-center items-center animate-[fadein_1s_ease-in-out]"
      }
    >
      <h1 className="z-10 text-lg text-orange-400 transition md:text-2xl font-sigmar">
        <a
          className="underline cursor-pointer hover:text-orange-300"
          href="https://distrokid.com/hyperfollow/brankam/charlottean-feat-aidan-cundiff-2?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
          rel="noreferrer"
          target="_blank"
        >
          {data[`${lang}`].homepage.new_music.toLowerCase()}
        </a>
      </h1>

      <div className="m-2 text-center md:m-6 h-1/2">
        <a
          className="underline cursor-pointer hover:text-orange-300"
          href="https://distrokid.com/hyperfollow/brankam/charlottean-feat-aidan-cundiff-2?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="hover:brightness-125 z-0 object-contain h-full brightness-[100%]"
            src="./charlotteangif.gif"
          />
        </a>
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
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://open.spotify.com/artist/65tjsMZHYf3J7nrsb1vTLn?si=mC1l8PAcQ6yxvUE0NFJtIA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://www.youtube.com/channel/UCESV-XJQy_RCjkPuq93j1lg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://soundcloud.com/brankam-music"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://music.apple.com/us/artist/brankam/1729262314"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faApple} className="contact__social" />
        </a>
        <a
          className="m-2 transition-colors duration-200 ease-in-out hover:text-yellow-500"
          href="https://brankam.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faBandcamp} className="contact__social" />
        </a>
        {/* <span className="text-[12px] z-10 font-afacad">
          {data[`${lang}`].homepage.coming_soon}
        </span> */}
      </span>
    </div>
  );
}
