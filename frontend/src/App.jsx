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
      <div className="flex flex-row fixed right-2 z-40 justify-top">
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

      {/* side menu */}
      <div className="z-30 tabs text-sm flex flex-col h-full justify-top text-left fixed m-2">
        <p
          className={
            "text-white transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer" +
            (page == 1 && "text-red-400")
          }
          onClick={() => {
            setPage(1);
          }}
        >
          <img
            src="brankambubbleonly.jpg"
            className="h-12 hover:brightness-125"
          />
        </p>
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
      {/* big div */}
      <div className="min-[400px]:ml-20 pt-8 container flex flex-col items-center h-screen">
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
