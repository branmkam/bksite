import data from "../data/translate.json";
import { useState } from "react";

export default function Contact(props) {
  const { lang, setPage } = props;
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const legalEmail = subject.trim().length > 0 && message.trim().length > 0;

  const link = data[`${lang}`].contact_page.link.split("|");

  return (
    <div className="z-20 flex flex-col justify-center w-full h-full pb-8 my-2 pt-14 md:py-0">
      <h1 className="mt-2 text-lg font-bold md:text-xl">
        {data[`${lang}`].contact_page.title}
      </h1>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder={data[`${lang}`].contact_page.subject}
        className={
          "w-full md:w-3/4 p-1 mt-2 rounded-xl text-slate-200 bg-slate-900 border-2 " +
          (!subject.trim() ? "border-red-500" : "border-slate-600")
        }
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="5"
        placeholder={data[`${lang}`].contact_page.message}
        className={
          "w-full md:w-3/4 p-1 mt-2 rounded-xl resize-vertical text-slate-200 bg-slate-900 border-2 " +
          (!message.trim() ? "border-red-500" : "border-slate-600")
        }
      />
      <a
        href={
          legalEmail
            ? `mailto:linguafrancamusic1@gmail.com?subject=${subject}&body=${message}`
            : "#"
        }
        className="w-full px-2 my-2 text-center transition-colors duration-200 ease-in-out bg-yellow-500 rounded-lg md:w-3/4 hover:cursor-pointer text-slate-900 hover:text-yellow-500 hover:bg-slate-800"
      >
        {data[`${lang}`].contact_page.submit}
      </a>
      <p className="">
        {link[0]}
        <a
          className={
            "text-yellow-500 hover:text-yellow-200 hover:cursor-pointer"
          }
          onClick={() => setPage(0)}
        >
          {link[1]}
        </a>
        {link[2]}
      </p>
    </div>
  );
}
