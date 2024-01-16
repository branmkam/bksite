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
    <div className="w-full h-full font-afacad text-slate-200">
      {/* languages */}
      <div className="fixed z-40 flex flex-row justify-start p-0 bg-black rounded-lg right-2">
        {langs.map((l) => (
          <span
            key={"lang-" + l}
            className={
              "z-0 text-sm transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer m-1 " +
              (lang == l && "text-red-400")
            }
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </span>
        ))}
      </div>

      {/* mobile pseudo top menu */}
      <div className="fixed top-0 w-full h-16 bg-black md:bg-transparent">

      </div>

      {/* side homepage */}
      <p className="fixed z-20 flex flex-col justify-start h-full mt-1 md:justify-center left-1">
        <img
          src="brankambubbleonlyvector.png"
          className="h-12 md:h-16 hover:brightness-125 hover:cursor-pointer"
          onClick={() => setPage(0)}
        />
      </p>

      {/* side menu */}
      <div className="fixed z-0 grid text-center justify-between grid-cols-2 gap-x-2 m-2 text-sm min-[500px]:flex min-[500px]:mt-4 min-[500px]:gap-4 min-[500px]:flex-row md:gap-2 md:flex md:h-full md:flex-col left-16 md:justify-center md:text-right md:right-2 md:text-lg">
        <p
          className={
            "z-[-1] text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
            "z-0 text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
            "z-0 text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
            "z-0 text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
      <div className="fixed bottom-0 z-40 flex flex-col justify-end w-full h-8 p-2 text-sm text-center bg-black md:bg-transparent md:text-right">
        <p>
          &copy; 2024
          brankam
        </p>
      </div>

      {/* big div */}
      <div className="container z-40 w-screen pl-4 pr-6 md:m-0 md:pl-24 md:pr-24">
        {/* <img src="globespin.gif" className="fixed z-0 brightness-50 h-1/2" /> */}
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
