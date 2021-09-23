import story1 from "../assets/story1.jpg";

export let STORIES = [
  {
    id: 0,
    title: "Bootstrap Outfitters",
    date: "2021-09-07",
    image: story1,
    featured: true,
    description:
      "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat.",
  },
  {
    id: 1,
    title: "Git Out Expeditions",
    date: "2021-09-13",
    image: story1,
    featured: true,
    description:
      "Join Git Out Expeditions to explore new horizons with a group of other adventurers!",
  },
  {
    id: 2,
    title: "Mongo Fly Shop",
    date: "2021-09-14",
    image: story1,
    featured: true,
    description:
      "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.",
  },
  {
    id: 3,
    title: "Last Saturday, Birthday Party",
    date: "2021-09-15",
    image: story1,
    featured: true,
    description:
      "It was a wonderful Saturday. At the Tom's birthday, I introduced my brand new cuisine, wine shrimp burger steak. He noticed us he always craves shrimp and burgers.",
  },
].sort((a, b) => b.date > a.date);
