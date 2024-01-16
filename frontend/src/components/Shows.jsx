import data from "../data/translate.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faEye } from "@fortawesome/free-solid-svg-icons";
import allshows from "../data/allshows";
import ParseISO from "../data/ParseISO";

export default function Shows(props) {
  const { lang } = props;

  let pastshows = allshows
    .filter((p) => new Date(p.date) < new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date)); //closest first
  let shows = allshows
    .filter((p) => new Date(p.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date)); //most recent first

  return (
    <div className="z-20 flex flex-col pb-8 my-2 pt-14 md:py-0">
      <h1 className="my-2 text-lg font-bold md:text-xl">
        {data[`${lang}`].shows_page.upcoming_title}
      </h1>
      <div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {shows.map((s, i) => (
          <div key={"show" + i} className="flex flex-row items-center justify-between p-2 rounded-lg bg-slate-900">
            <span className="px-2 text-base md:text-lg">
              {s.venue} <br />{" "}
              <a
                className="text-slate-200 hover:text-red-400"
                rel="noreferrer"
                target="_blank"
                href={"https://google.com/maps/search/" + s.city}
              >
                {s.city}
              </a>{" "}
              <br />
              {ParseISO(s.date).toLocaleDateString([lang, "en-US"], {
                month: "short",
                day: "2-digit",
                year: "numeric"
              })}{" "}
              |{" "}
              {ParseISO(s.date).toLocaleTimeString([lang, "en-US"], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span className="px-2">
              <a href={s.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTicket}
                  className="hover:text-yellow-500 size-7"
                />
              </a>
            </span>
          </div>
        ))}
      </div>
      <h1 className="my-2 text-lg font-bold md:text-xl">
        {data[`${lang}`].shows_page.past_title}
      </h1>
      <div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {pastshows.map((s, i) => (
          <div key={"show" + i} className="flex flex-row items-center justify-between p-2 rounded-lg bg-slate-900">
            <span className="px-2 text-base md:text-lg">
              {s.venue} <br />{" "}
              <a
                className="text-slate-200 hover:text-red-400"
                rel="noreferrer"
                target="_blank"
                href={"https://google.com/maps/search/" + s.city}
              >
                {s.city}
              </a>{" "}
              <br />
              {ParseISO(s.date).toLocaleDateString([lang, "en-US"], {
                month: "short",
                day: "2-digit",
                year: "numeric"
              })}{" "}
              |{" "}
              {ParseISO(s.date).toLocaleTimeString([lang, "en-US"], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span className="px-2">
              <a href={s.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faEye}
                  className="hover:text-yellow-500 size-7"
                />
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
