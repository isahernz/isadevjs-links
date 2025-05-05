type TechnologyId =
  | "react"
  | "astro"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "laravel"
  | "css"
  | "javascript";

type TechnologyName =
  | "React"
  | "Astro"
  | "TypeScript"
  | "Tailwind"
  | "Node.js"
  | "Laravel"
  | "CSS"
  | "JavaScript";

export interface Technology {
  id: TechnologyId;
  name: TechnologyName;
  image: {
    logo: any;
  };
  url: string;
  backgroundColor?: string;
  bentoPosition?: {
    cols: number;
    rows: number;
  };
}
