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
  // const afterTime = new Date() < ParseISO("2024-02-12T00:00:00");

  return (
    <div
      className={
        "h-[95vh] z-50 mt-2 flex flex-col text-center justify-center items-center animate-[fadein_1s_ease-in-out]"
      }
    >
      <h1 className="z-10 text-lg transition text-slate-100 md:text-2xl font-sigmar">
        {/* <a
          className="underline cursor-pointer hover:text-orange-300"
          href="https://distrokid.com/hyperfollow/brankam/charlottean-feat-aidan-cundiff-2?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
          rel="noreferrer"
          target="_blank"
        > */}
        {data[`${lang}`].homepage.text.toLowerCase()}
        {/* </a> */}
      </h1>
      <h2 className="m-1 text-sm text-orange-400 sm:text-base md:text-lg font-sigmar">
        {data[`${lang}`].homepage.reveal.toLowerCase()}
      </h2>

      <div className="relative flex flex-col m-2 text-center md:m-6 h-1/2">
        <a
          className="underline cursor-pointer hover:text-orange-300"
          href="https://distrokid.com/hyperfollow/brankam/charlottean-feat-aidan-cundiff-2?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
          rel="noreferrer"
          target="_blank"
        ></a>

        <img
          className="hover:brightness-125 z-0 object-contain h-full brightness-[60%]"
          src="./globespin-transparent.gif"
        />
        <Countdown
          className="absolute flex items-center justify-center w-full h-full text-4xl font-bold text-orange-400 drop-shadow-[8px_35px_10px_rgba(0,0,0,0.1)] align-center md:text-6xl lg:text-8xl"
          time={"2024-05-11T00:00:00"}
          seconds
        />
      </div>
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
