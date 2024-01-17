import data from "../data/translate.json";

export default function About(props) {
  const { lang } = props;
  let text = data[`${lang}`].about_page.bio_text;
  let texts = text.split("\n");

  let facts = data[`${lang}`].about_page.fast_facts;
  
  return (
    <div className="z-20 pb-8 mt-2 pt-14 md:py-0">
      <h1 className="my-2 text-xl font-bold md:text-lg">
        {data[`${lang}`].about_page.fast_facts_title}
      </h1>
      <div className="grid justify-between grid-cols-1 gap-2 p-2 text-sm text-black bg-yellow-600 rounded-xl md:grid-cols-2">
        {facts.map((f) => {
          let fs = f.split(":");
          return (
            <div key={fs[0]}>
              <span className="font-bold">{fs[0]}</span><br/>
              <span>{fs[1]}</span>
            </div>
          );
        })}
      </div>

      {/* bio */}
      <h1 className="my-2 text-xl font-bold md:text-lg">
        {data[`${lang}`].about_page.bio_title}
      </h1>

      {texts.map((t) => (
        <p className="my-2">{t}</p>
      ))}
    </div>
  );
}
