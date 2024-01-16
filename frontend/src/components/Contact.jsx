import data from "../data/translate.json";

export default function Contact(props) {

  const { lang, setPage } = props;

  const link = data[`${lang}`].contact_page.link.split("|");
  
  return (
    <div className="z-20 flex flex-col justify-center w-full h-full py-12 my-2 md:py-0">
      <h1 className="text-lg font-bold md:text-xl">
        {data[`${lang}`].contact_page.title}
      </h1>
      <input
        placeholder="Email"
        type="email"
        className="w-full my-2 text-slate-900"
      />
      <textarea
        rows="5"
        placeholder={data[`${lang}`].contact_page.message}
        className="w-full my-2 text-slate-900 resize-vertical"
      />
      <button className="w-full px-2 my-2 transition-colors duration-200 ease-in-out bg-yellow-500 rounded-lg text-slate-900 hover:text-yellow-500 hover:bg-slate-800">
        {data[`${lang}`].contact_page.submit}
      </button>
      <p className="">
        {link[0]}
        <a className={"text-yellow-500 hover:text-yellow-200 hover:cursor-pointer"} onClick={() => setPage(0)}>{link[1]}</a>
        {link[2]}
      </p>
    </div>
  );
}
