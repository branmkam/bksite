import data from "../data/translate.json";

export default function About(props) {
  const { lang } = props;
  let text = data[`${lang}`].about_page.text;
  let texts = text.split('\n');

  return (
    <div>
      {texts.map(t => <p className="my-2">{t}</p>)}
    </div>
  );
}
