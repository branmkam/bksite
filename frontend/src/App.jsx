import { useEffect, useState } from "react";
import "./index.css";
import data from "./data/translate.json";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Music from "./components/Music";
import Shows from "./components/Shows";
import Contact from "./components/Contact";

function App() {
  const langs = ["en", "es", "it"];
  const [page, setPage] = useState(0);
  const [lang, setLang] = useState(langs[0]);

  function renderSwitch(param) {
    switch (param) {
      case 1:
        return <About lang={lang} />;
      case 2:
        return <Music lang={lang} />;
      case 3:
        return <Shows lang={lang} />;
      case 4:
        return <Contact lang={lang} setPage={setPage} />;
      default:
        return <Homepage lang={lang} />;
    }
  }

  return (
    <div className="font-afacad text-slate-200">
      {/* languages */}
      <div className="fixed z-40 flex flex-row justify-start right-2">
        {langs.map((l) => (
          <span
            key={"lang-" + l}
            className={
              "text-sm transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer m-1 " +
              (lang == l && "text-red-400")
            }
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </span>
        ))}
      </div>

      {/* side homepage */}
      <p className="fixed z-30 flex flex-col justify-center h-full left-1">
        <img
          src="brankambubbleonlyvector.png"
          className="h-12 md:h-16 hover:brightness-125 hover:cursor-pointer"
          onClick={() => setPage(0)}
        />
      </p>

      {/* side menu */}
      <div className="fixed z-30 flex flex-col justify-center h-full m-1 text-sm text-right tabs md:text-lg right-2">
        <p
          className={
            "text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
            (page == 1 && "text-red-500")
          }
          onClick={() => {
            setPage(1);
          }}
        >
          {data[`${lang}`].sidebar.about}
        </p>
        <p
          className={
            "text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
            (page == 2 && "text-red-500")
          }
          onClick={() => {
            setPage(2);
          }}
        >
          {data[`${lang}`].sidebar.music}
        </p>
        <p
          className={
            "text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
            (page == 3 && "text-red-500")
          }
          onClick={() => {
            setPage(3);
          }}
        >
          {data[`${lang}`].sidebar.shows}
        </p>
        <p
          className={
            "text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
            (page == 4 && "text-red-500")
          }
          onClick={() => {
            setPage(4);
          }}
        >
          {data[`${lang}`].sidebar.contact}
        </p>
      </div>

      {/* footer */}
      <div className="fixed bottom-0 z-40 flex flex-col justify-end w-full h-8 p-2 text-sm text-right md:text-lg">
        <p>
          &copy; 2024
          <br />
          brankam
        </p>
      </div>

      {/* big div */}
      <div className="container w-screen pl-24 pr-24">
        {/* <img src="globespin.gif" className="fixed z-0 brightness-50 h-1/2" /> */}
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
