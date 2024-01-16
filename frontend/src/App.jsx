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
        return <Contact lang={lang} />;
      default:
        return <Homepage />;
    }
  }

  return (
    <div className="font-afacad text-slate-200">
      {/* languages */}
      <div className="flex flex-row fixed right-2 z-40 justify-start">
        {langs.map((l) => (
          <span
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
      <p className="z-30 fixed left-1 justify-center flex flex-col h-full">
        <img
          src="brankambubbleonlyvector.png"
          className="h-12 md:h-16 hover:brightness-125 hover:cursor-pointer"
          onClick={() => setPage(0)}
        />
      </p>

      {/* side menu */}
      <div className="z-30 tabs text-sm md:text-lg flex flex-col h-full justify-center right-2 text-right fixed m-1">
        <p
          className={
            "text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
            (page == 1 && "text-red-400")
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
            (page == 2 && "text-red-400")
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
            (page == 3 && "text-red-400")
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
            (page == 4 && "text-red-400")
          }
          onClick={() => {
            setPage(4);
          }}
        >
          {data[`${lang}`].sidebar.contact}
        </p>
      </div>

      {/* footer */}
      <div className="z-40 text-sm md:text-lg w-full flex flex-col fixed justify-end bottom-0 h-8 p-2 text-right">
        <p>&copy; 2024 brankam</p>
      </div>

      {/* big div */}
      <div className="container flex flex-col justify-center items-center pr-24 pl-24">
        {/* <img src="globespin.gif" className="fixed brightness-50 z-0 h-1/2" /> */}
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
