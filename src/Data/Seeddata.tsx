export interface Resource {
  id: string;
  name: string;
  description: string;
  type: "video" | "article";
  resourceUrl: string;
  thumbnail: string;
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
    id: "e8dacacd-7fa8-4c9f-bb18-08d928e257fd",
    name: "Google",
  },
];

const seedResources: Resource[] = [
  {
    id: "716a27e5-e1b0-4954-9fe5-5d7fba21815f",
    name: "Google Coding Interview With A High School Student",
    type: "video",
    resourceUrl: "https://www.youtube.com/embed/qz9tKlF431k",
    tags: availableTags,
    thumbnail: `https://img.youtube.com/vi/qz9tKlF431k/hqdefault.jpg`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "a0d0bdfe-e6d8-41b5-a856-7de8e2d60291",
    name: "Coding Interviews are Broken",
    type: "video",
    resourceUrl: "https://www.youtube.com/embed/bx3--22D4E4",
    tags: availableTags,
    thumbnail: `https://img.youtube.com/vi/bx3--22D4E4/hqdefault.jpg`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "a0d0bdfe-e6d8-41b5-a856-7de8e2d60391",
    name: "All the fundamental React.js concepts",
    type: "article",
    resourceUrl:
      "https://medium.com/edge-coders/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2",
    tags: availableTags,
    thumbnail: `https://img.youtube.com/vi/2gTah9w3sFg/hqdefault.jpg`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const data: Data = {
  resources: seedResources,
  tags: [],
};
