import { uuidv4 } from "../util/uuid";

export interface Resource {
  id: string;
  name: string;
  description: string;
  type: "video" | "article";
  resourceUrl: string;
  tags: Tag[];
}

export interface Tag {
  name: string;
  id: string;
}

export interface Data {
  resources: Resource[];
  tags: Tag[];
}

const availableTags: Tag[] = [
  {
    id: uuidv4(),
    name: "Google",
  },
];

const seedResources: Resource[] = [
  {
    id: uuidv4(),
    name: "Google Coding Interview With A High School Student",
    type: "video",
    resourceUrl: "https://www.youtube.com/embed/qz9tKlF431k",
    tags: availableTags,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: uuidv4(),
    name: "Coding Interviews are Broken",
    type: "video",
    resourceUrl: "https://www.youtube.com/embed/bx3--22D4E4",
    tags: availableTags,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];

export const data: Data = {
  resources: seedResources,
  tags: [],
};
