export interface data {
  destinations?: DestinationsEntity[] | null;
  crew?: CrewEntity[] | null;
  technology?: TechnologyEntity[] | null;
}
export interface DestinationsEntity {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}
export interface Images {
  png: string;
  webp: string;
}
export interface CrewEntity {
  name: string;
  images: Images;
  role: string;
  bio: string;
}
export interface TechnologyEntity {
  name: string;
  images: Images1;
  description: string;
}
export interface Images1 {
  portrait: string;
  landscape: string;
}
