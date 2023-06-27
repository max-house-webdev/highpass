export type TSections = Array<{ heading: string; id: string }>;

export type TContacts = {
  phoneNumber: number;
};

export type TBanner = {
  bgImage: string;
  heading: string;
  subHeading?: string;
  description: string;
  hashtag: string;
};

export type TSectionContent = {
  sectionHeading: string;
  banner?: TBanner;
};

export interface IContent {
  sections: TSections;
  contacts: TContacts;
  hero: TSectionContent | null;
}

export interface IContentState {
  sections: TSections;
  contacts: TContacts;
  hero: TSectionContent | null;

  getHero: () => void;
}
