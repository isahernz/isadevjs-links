import type { SocialMedia } from "@/types/social-media";

import Facebook from "@/assets/icons/facebook.svg";
import Github from "@/assets/icons/github.svg";
import Instagram from "@/assets/icons/instagram.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import X from "@/assets/icons/x.svg";
import Youtube from "@/assets/icons/youtube.svg";

export const SOCIALMEDIA: SocialMedia[] = [
  {
    id: "facebook",
    name: "Facebook",
    image: {
      logo: Facebook,
    },
    url: "https://www.facebook.com/isadevjs",
    backgroundColor: "bg-white",
  },
  {
    id: "github",
    name: "GitHub",
    image: {
      logo: Github,
    },
    url: "https://github.com/isahernz",
    backgroundColor: "bg-zinc-900",
  },
  {
    id: "instagram",
    name: "Instagram",
    image: {
      logo: Instagram,
    },
    url: "https://www.instagram.com/_isaheca",
    backgroundColor:
      "bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    image: {
      logo: LinkedIn,
    },
    url: "https://www.linkedin.com/in/isahir-hernandez",
    backgroundColor: "bg-white",
  },
  {
    id: "x",
    name: "X",
    image: {
      logo: X,
    },
    url: "https://www.x.com/_isahernz",
    backgroundColor: "bg-black",
  },
  {
    id: "youtube",
    name: "YouTube",
    image: {
      logo: Youtube,
    },
    url: "https://www.youtube.com/@isadevjs",
    backgroundColor: "bg-white",
  },
] as const;
