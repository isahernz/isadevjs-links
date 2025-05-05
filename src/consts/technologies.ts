import type { Technology } from "@/types/technologies";

import React from "@/assets/icons/react.svg";
import Astro from "@/assets/icons/astro.svg";
import JavaScript from "@/assets/icons/javascript.svg";
import Laravel from "@/assets/icons/laravel.svg";
import CSS from "@/assets/icons/css.svg";

export const TECHNOLOGIES: Technology[] = [
  {
    id: "react",
    name: "React",
    image: {
      logo: React,
    },
    url: "https://reactjs.org/",
    backgroundColor: "bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-800",
    bentoPosition: {
      cols: 2,
      rows: 1,
    },
  },
  {
    id: "astro",
    name: "Astro",
    image: {
      logo: Astro,
    },
    url: "https://astro.build/",
    backgroundColor:
      "bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800",
    bentoPosition: {
      cols: 1,
      rows: 1,
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    image: {
      logo: JavaScript,
    },
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    backgroundColor:
      "bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800",
    bentoPosition: {
      cols: 1,
      rows: 1,
    },
  },
  {
    id: "laravel",
    name: "Laravel",
    image: {
      logo: Laravel,
    },
    url: "https://laravel.com/",
    backgroundColor: "bg-gradient-to-br from-red-950 via-red-900 to-red-800",
    bentoPosition: {
      cols: 1,
      rows: 1,
    },
  },
  {
    id: "css",
    name: "CSS",
    image: {
      logo: CSS,
    },
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
    backgroundColor: "bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800",
    bentoPosition: {
      cols: 1,
      rows: 1,
    },
  },
];
