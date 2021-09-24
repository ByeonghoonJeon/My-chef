import story1 from "../assets/story1.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3.jpg";
import story4 from "../assets/story4.jpg";

export let STORIES = [
  {
    id: 0,
    title: "Lovely Family Gathering",
    date: "2021-09-07",
    image: story4,
    featured: true,
    description:
      "They spent wonderful evening with us. Each members had been separated so far and now they are gathered again. Considering there religion, specific ingredients were replaced and all the ingredients are qualified according to their religious requirements. ",
  },
  {
    id: 1,
    title: "Anniversary for a couple",
    date: "2021-09-13",
    image: story3,
    featured: true,
    description:
      "This couple had special night with us for celebrating there 1,000 days anniversary! Considering he's diabetes, we prepared all menu with diabetes-friendly ingredients. ",
  },
  {
    id: 2,
    title: "Family Wedding!",
    date: "2021-09-14",
    image: story2,
    featured: true,
    description:
      "HAPPY WEDDING! I was so excited for their lovely wedding. 20% of guests were vegan, so we served vegan-friendly cuisines.",
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
