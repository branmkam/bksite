import data from "../data/translate.json";

export default function FilmScoring(props) {
  const { lang } = props;
  return (
    <div className="z-20 pb-16 mt-2 about pt-14 md:pt-0">
      <h1 className="my-2 text-xl font-bold md:mt-4">
        {data[`${lang}`].film_page.title}
      </h1>
      <p className="mb-8 text-lg">{data[`${lang}`].film_page.text}</p>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-bold text-center md:text-2xl">
          {data[`${lang}`].film_page.view}
        </h2>
        <div className="flex flex-col gap-8 md:justify-center md:items-center md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/4">
            <span className="text-xl font-bold md:text-2xl text-start md:text-end grow">
              The Glass Canvas
            </span>
            <div className="flex flex-row flex-wrap items-end md:text-right md:gap-2 md:flex-col">
              <span className="text-lg grow">Dir. Jack Gentry</span>
              <span className="text-lg grow">
                {data[`${lang}`].film_page.genre_1}
              </span>
              <span className="text-lg grow">2023</span>
            </div>
          </div>
          <iframe
            className="aspect-video md:w-3/5 md:max-w-[850px]"
            src="https://www.youtube.com/embed/oxBLW7-3Hh4?si=axUSssOjHi_LF4zZ"
            title="Glass Canvas video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-8 md:justify-center md:items-center md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/4">
            <span className="items-end text-xl font-bold text-start md:text-end md:text-2xl grow">
              Pool
            </span>
            <div className="flex flex-row flex-wrap items-end md:text-right md:gap-2 md:flex-col">
              <span className="text-lg grow">Dir. Kolby Oglesby</span>
              <span className="text-lg grow">
                {data[`${lang}`].film_page.genre_2}
              </span>
              <span className="text-lg grow">2022</span>
            </div>
          </div>
          <iframe
            className="aspect-video md:w-3/5 md:max-w-[850px]"
            src="https://www.youtube.com/embed/Lu3-j0PGOV8?si=yCInFNNWL3DZFl4W"
            title="Glass Canvas video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-8 md:justify-center md:items-center md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/4">
            <span className="text-xl font-bold md:text-2xl text-start md:text-end grow">
              Internalized Friend
            </span>
            <div className="flex flex-row flex-wrap items-end md:text-right md:gap-2 md:flex-col">
              <span className="text-lg grow">Dir. Bailey Johnson</span>
              <span className="text-lg grow">
                {data[`${lang}`].film_page.genre_3}
              </span>
              <span className="text-lg grow">2022</span>
            </div>
          </div>
          <iframe
            className="aspect-video md:w-3/5 md:max-w-[850px]"
            src="https://www.youtube.com/embed/jEZ-Cu9aNpU?si=7cMoCWEK4h5Gugyq"
            title="Glass Canvas video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
