// import ParseISO from "./ParseISO";

const catalog = [
  {
    name: "Troppo",
    type: "single",
    release_date: "2024-05-24T00:00:00",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2209533--EDA0FC44-AF5A-4D2F-BF8CF432ABD7E5F8--0--3367815--troppofinal.png?fm=jpg&q=75&w=800&s=31ab52b5e045f9e69e9be1a14f91b3cc",
    collab_artists: [],
    platforms: {
      spotify:
        "https://open.spotify.com/track/44DR7gc2YyBbRyUbsmzErf?si=f8c7cb0a67074ea5",
      youtube: "https://www.youtube.com/watch?v=OWRIj2CjzEs",
      apple: "https://music.apple.com/us/album/troppo-single/1744664485",
    },
  },
  {
    name: "Expectations",
    type: "single",
    release_date: "2023-02-10T00:00:00",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c5/27/70/c5277000-6511-0adb-73dd-cd5f7434cbac/artwork.jpg/316x316bb.webp",
    collab_artists: [],
    platforms: {
      soundcloud: "https://soundcloud.com/linguafranca-music/expectations",
      apple:
        "https://music.apple.com/us/album/expectations/1670519367?i=1670519370",
    },
  },
  // ...(new Date() >= ParseISO("2024-02-12T00:00:00")
  {
    name: "Charlottean",
    type: "single",
    release_date: "2024-02-23T00:00:00",
    image: "./charlotteancover2.jpg",
    collab_artists: [
      {
        name: "Aidan Cundiff",
        link: "https://music.apple.com/ph/artist/aidan-cundiff/1460316882",
      },
    ],
    platforms: {
      spotify:
        "https://open.spotify.com/album/0EzD0TexIW0qhUAnjzbfxp?si=XaCk2SarQLmsQ0tfh04l3w",
      youtube: "https://www.youtube.com/watch?v=vr1utDzB2mQ",
      apple:
        "https://music.apple.com/us/album/charlottean-feat-aidan-cundiff-single/1730290640?uo=4",
      bandcamp: "https://brankam.bandcamp.com/track/charlottean",
    },
  },
];

export default catalog;
