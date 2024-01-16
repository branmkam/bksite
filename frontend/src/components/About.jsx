import data from "../data/translate.json";

export default function About(props) {
  const { lang } = props;
  let text = data[`${lang}`].about_page.bio_text;
  let texts = text.split("\n");

  let facts = data[`${lang}`].about_page.fast_facts;
  console.log(facts);

  return (
    <div className="my-2 z-20">
      <h1 className="md:text-lg text-xl font-bold my-2">
        {data[`${lang}`].about_page.fast_facts_title}
      </h1>
      <div className="grid text-sm grid-cols-1 md:grid-cols-2 gap-2 justify-between">
        {facts.map((f) => {
          let fs = f.split(":");
          return (
            <div>
              <span class="font-bold">{fs[0]}</span><br/>
              <span>{fs[1]}</span>
            </div>
          );
        })}
      </div>

      {/* bio */}
      <h1 className="md:text-lg text-xl font-bold my-2">
        {data[`${lang}`].about_page.bio_title}
      </h1>

      {texts.map((t) => (
        <p className="my-2">{t}</p>
      ))}
    </div>
  );
}
