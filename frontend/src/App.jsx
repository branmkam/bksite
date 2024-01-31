import { useEffect, useState } from "react";
import "./index.css";
import data from "./data/translate.json";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Music from "./components/Music";
import Shows from "./components/Shows";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const langs = ["en", "es", "it"];
  const [page, setPage] = useState(0);
  const [lang, setLang] = useState(langs[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); //set mobile based on pixel width
      setMenu(window.innerWidth >= 768); //disable menu on back to mobile
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="w-screen z-0 fixed top-0 animate-[fadein_0.8s_ease-in-out] h-[95%] md:h-[100vh] bg-center bg-repeat bg-cover bg-[url('bgimage.jpeg')]">
      {/* //app div */}
      <div className="w-screen bg-[#000000b4] h-[100vh] overflow-y-scroll fixed top-0 font-afacad text-slate-200 ">
        {/* languages */}
        <div className="fixed z-50 bg-[#00000099] m-1 flex flex-row justify-start p-0 rounded-lg right-2 animate-[comefromright_1s_ease-in-out_0s]">
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

        {/* mobile menu */}
        {isMobile && menu && (
          <div className="fixed top-0 z-20 w-36 h-full md:z-0 bg-[#000000e0] md:hidden animate-[comefromleft_1s_ease-in-out_0s] pl-2 pt-2">
            {/* side menu */}
            <div className="md:animate-[fadein_1s_ease-in-out] md:z-0 z-40 text-start mt-16 ml-2 text-base flex flex-col gap-2">
              <p
                //flex flex-col justify-center h-full m-1 text-sm text-right tabs md:text-lg md:right-2
                //md:flex md:flex-col md:justify-center md:h-full md:m-2 text-sm md:text-right md:text-lg md:right-2
                className={
                  "menuitem md:animate-[comefromright_1s_ease-in-out_1.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
                  (page == 0 && "text-red-500")
                }
                onClick={() => {
                  setPage(0);
                  setMenu(false);
                }}
              >
                {data[`${lang}`].sidebar.home}
              </p>
              <p
                //flex flex-col justify-center h-full m-1 text-sm text-right tabs md:text-lg md:right-2
                //md:flex md:flex-col md:justify-center md:h-full md:m-2 text-sm md:text-right md:text-lg md:right-2
                className={
                  "menuitem md:animate-[comefromright_1s_ease-in-out_1.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
                  (page == 1 && "text-red-500")
                }
                onClick={() => {
                  setPage(1);
                  setMenu(false);
                }}
              >
                {data[`${lang}`].sidebar.about}
              </p>
              <p
                className={
                  "z-50 menuitem md:animate-[comefromright_1s_ease-in-out_1.7s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
                  (page == 2 && "text-red-500")
                }
                onClick={() => {
                  setPage(2);
                  setMenu(false);
                }}
              >
                {data[`${lang}`].sidebar.music}
              </p>
              <p
                className={
                  "menuitem md:animate-[comefromright_1s_ease-in-out_2.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
                  (page == 3 && "text-red-500")
                }
                onClick={() => {
                  setPage(3);
                  setMenu(false);
                }}
              >
                {data[`${lang}`].sidebar.shows}
              </p>
              <p
                className={
                  "z-50 menuitem md:animate-[comefromright_1s_ease-in-out_2.7s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
                  (page == 4 && "text-red-500")
                }
                onClick={() => {
                  setPage(4);
                  setMenu(false);
                }}
              >
                {data[`${lang}`].sidebar.contact}
              </p>
            </div>
          </div>
        )}

        {/* bars for mobile menu toggle */}
        {isMobile && (
          <div
            onClick={() => setMenu((m) => !m)}
            className="fixed z-50 items-center justify-center m-1 text-center rounded-lg top-2 left-2"
          >
            {/* side homepage */}
            <p className="z-50 animate-[comefromleft_1s_ease-in-out_0s]">
              <img
                src="brankambubbleonlyvector.png"
                className="w-14 md:w-28 hover:brightness-125 hover:cursor-pointer"
              />
            </p>
          </div>
        )}

        {!isMobile && (
          <>
            {/* side homepage */}
            <p className="fixed z-50 flex-col justify-start h-full hidden md:flex mt-8 md:mt-0 md:justify-center left-1 animate-[comefromleft_1s_ease-in-out_0s]">
              <img
                src="brankambubbleonlyvector.png"
                className="w-14 md:w-28 hover:brightness-125 hover:cursor-pointer"
                onClick={() => setPage(0)}
              />
            </p>

            {/* side menu */}
            <div className="fixed md:animate-[fadein_1s_ease-in-out] z-0 text-start mt-20 left-2 text-sm justify-between hidden md:flex md:flex-col md:gap-0 md:justify-center md:h-full md:m-1 md:text-right md:text-lg md:right-2">
              <p
                //flex flex-col justify-center h-full m-1 text-sm text-right tabs md:text-lg md:right-2
                //md:flex md:flex-col md:justify-center md:h-full md:m-2 text-sm md:text-right md:text-lg md:right-2
                className={
                  "z-50 menuitem md:animate-[comefromright_1s_ease-in-out_1.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
                  "z-50 menuitem md:animate-[comefromright_1s_ease-in-out_1.7s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
                  "menuitem md:animate-[comefromright_1s_ease-in-out_2.2s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
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
                  "z-50 menuitem md:animate-[comefromright_1s_ease-in-out_2.7s] transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:cursor-pointer " +
                  (page == 4 && "text-red-500")
                }
                onClick={() => {
                  setPage(4);
                }}
              >
                {data[`${lang}`].sidebar.contact}
              </p>
            </div>
          </>
        )}

        {/* footer */}
        <div className="fixed bottom-0 z-40 flex flex-col justify-end w-full h-8 p-2 text-sm text-center bg-slate-900 md:bg-black md:text-right animate-[comefrombottom_1s_ease-in-out_0s] md:animate-[comefromright_1s_ease-in-out_0s]">
          <p>&copy; 2024 brankam</p>
        </div>

        {/* big div */}
        <div className="z-40 w-screen pl-4 pr-6 md:m-0 md:pl-28 md:pr-28">
          {/* <img src="globespin.gif" className="fixed z-0 brightness-50 h-1/2" /> */}
          {renderSwitch(page)}
        </div>
      </div>
    </div>
  );
}

export default App;
