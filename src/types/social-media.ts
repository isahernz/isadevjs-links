type SocialMediaId =
  | "github"
  | "x"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "facebook";

type SocialName =
  | "GitHub"
  | "X"
  | "LinkedIn"
  | "Instagram"
  | "YouTube"
  | "Facebook";

export interface SocialMedia {
  id: SocialMediaId;
  name: SocialName;
  image: {
    logo: any;
  };
  url: string;
  backgroundColor?: string;
}
