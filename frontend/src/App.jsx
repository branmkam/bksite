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
    //bg div
    <div className="w-[100vw] animate-[fadein_0.8s_ease-in-out] h-[100vh] bg-scroll bg-center bg-repeat bg-cover bg-[url('bgimage.jpeg')]">
      {/* //app div */}
      <div className="w-full  bg-[#00000088] h-[100vh] fixed top-0 font-afacad text-slate-200">
        {/* languages */}
        <div className="fixed z-40 flex flex-row justify-start p-0 bg-black rounded-lg right-2 animate-[comefromright_1s_ease-in-out_0s]">
          {langs.map((l) => (
            <span
              key={"lang-" + l}
              className={
                "z-0 text-sm transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer m-1 " +
                (lang == l && "text-red-500")
              }
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </span>
          ))}
        </div>

        {/* mobile pseudo top menu */}
        <div className="fixed top-0 w-full h-16 bg-black md:hidden animate-[comefromleft_1s_ease-in-out_0s]"></div>

        {/* side homepage */}
        <p className="fixed z-20 flex flex-col justify-start h-full mt-1 md:mt-0 md:justify-center left-1 animate-[comefromleft_1s_ease-in-out_0s]">
          <img
            src="brankambubbleonlyvector.png"
            className="w-14 md:w-28 hover:brightness-125 hover:cursor-pointer"
            onClick={() => setPage(0)}
          />
        </p>

        {/* side menu */}
        <div className="fixed animate-[fadein_1s_ease-in-out] z-0 grid text-center text-sm justify-between grid-cols-2 mt-1 pl-16 gap-x-2 gap-y-0.5 md:my-2 min-[500px]:flex min-[500px]:mt-4 min-[500px]:gap-4 md:p-0 min-[500px]:flex-row md:flex md:flex-col md:gap-0 md:justify-center md:h-full md:m-1 md:text-right md:text-lg md:right-2">
          <p
            //flex flex-col justify-center h-full m-1 text-sm text-right tabs md:text-lg md:right-2
            //md:flex md:flex-col md:justify-center md:h-full md:m-2 text-sm md:text-right md:text-lg md:right-2
            className={
              "z-0 menuitem md:animate-[comefromright_1s_ease-in-out_1.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
              "z-0 menuitem md:animate-[comefromright_1s_ease-in-out_1.7s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
              "z-0 menuitem md:animate-[comefromright_1s_ease-in-out_2.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
              "z-0 menuitem md:animate-[comefromright_1s_ease-in-out_2.7s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
        <div className="fixed bottom-0 z-40 flex flex-col justify-end w-full h-8 p-2 text-sm text-center bg-slate-900 md:bg-black md:text-right animate-[comefrombottom_1s_ease-in-out_0s] md:animate-[comefromright_1s_ease-in-out_0s]">
          <p>&copy; 2024 brankam</p>
        </div>

        {/* big div */}
        <div className="container z-40 w-screen pl-4 pr-6 md:m-0 md:pl-28 md:pr-28">
          {/* <img src="globespin.gif" className="fixed z-0 brightness-50 h-1/2" /> */}
          {renderSwitch(page)}
        </div>
      </div>
    </div>
  );
}

export default App;
