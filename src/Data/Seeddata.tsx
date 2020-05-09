import { uuidv4 } from "../util/uuid";

interface Resource {
  id: string;
  name: string;
  type: "video" | "article";
  resourceUrl: string;
  tags: Tag[];
}

interface Tag {
  name: string;
  id: string;
}

interface Data {
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
    resourceUrl: "https://www.youtube.com/watch?v=qz9tKlF431k",
    tags: availableTags,
  },
];

export const data: Data = {
  resources: seedResources,
  tags: [],
};
