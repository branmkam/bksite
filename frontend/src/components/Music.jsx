import data from "../data/translate.json";
import symbols from "../data/symbols";
import catalog from "../data/catalog";
import ParseISO from "../data/ParseISO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Music(props) {
  const { lang } = props;

  //top 6 newest releases
  let timeCatalog = catalog
    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    .slice(0, 6);

  return (
    <div className="z-20 flex flex-col justify-center w-full h-full pb-8 my-2 pt-14 md:py-0">
      <p className="my-2 text-lg font-bold md:text-xl">
        {data[`${lang}`].music_page.newest_title}
      </p>
      <div className="grid grid-cols-1 gap-2 pb-8 md:grid-cols-2 lg:grid-cols-3">
        {timeCatalog.length > 0 ? (
          timeCatalog.map((c) => (
            <div
              key={"div" + c.name}
              className={`min-w-[250px] h-[350px] border-yellow-500 m-2 bg-slate-900 p-2 rounded-lg flex flex-col items-center justify-between text-center`}
            >
              <p className="font-semibold text-white md:text-lg">{c.name}</p>
              <img src={c.image} className="h-44" />
              <p>
                {ParseISO(c.release_date).toLocaleDateString([lang, "en-US"], {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
                {" / "}
                {c.type}
              </p>
              <span className="text-sm">
                ft.{" "}
                {c.collab_artists.length > 0 ? (
                  c.collab_artists.map((a, i) => (
                    <span key={c.name + "artist" + a.name}>
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-500 hover:text-yellow-200"
                      >
                        {a.name}
                      </a>
                      {i < c.collab_artists.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <p className="text-sm">Solo release</p>
                )}
              </span>
              <span className="">
                {Object.keys(c.platforms).map((p) => (
                  <a
                    key={c.name + "platform" + p}
                    className="m-2 text-xl transition-colors duration-200 ease-in-out md:text-3xl hover:text-yellow-500"
                    href={c.platforms[p]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={symbols[p]} />
                  </a>
                ))}
              </span>
            </div>
          ))
        ) : (
          <p className="w-full text-lg">{data[`${lang}`].utils.arent_any}</p>
        )}
      </div>
    </div>
  );
}
