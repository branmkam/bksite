import data from "../data/translate.json";

export default function Contact(props) {
  const { lang } = props;
  return (
    <div className="flex flex-col justify-center h-full w-full my-2 z-20">
      <h1 className="font-bold text-lg md: text-xl">{data[`${lang}`].contact_page.title}
      </h1>
      <input placeholder="Email" type="email" className="w-3/4 text-slate-900 my-2"/>
      <textarea rows="5" placeholder={data[`${lang}`].contact_page.message} className="w-3/4 text-slate-900 resize-vertical my-2"/>
      <button className="my-2 rounded-lg text-slate-900 bg-yellow-500 px-2 transition-colors duration-200 ease-in-out hover:text-yellow-500 hover:bg-slate-800 w-3/4">{data[`${lang}`].contact_page.submit}</button>
    </div>
  );
}