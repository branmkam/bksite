import data from "../data/translate.json";

export default function Contact(props) {
  const { lang } = props;
  return (
    <div>
      <p>{data[`${lang}`].about_page.text}</p>
    </div>
  );
}