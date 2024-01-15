import data from "../data/translate.json";

export default function Music(props) {
  const { lang } = props;
  return (
    <div>
      <p>{data[`${lang}`].about_page.text}</p>
    </div>
  );
}