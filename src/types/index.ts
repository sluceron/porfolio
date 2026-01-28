export interface Project {
  id: number;
  title: string | { key: string };
  description: string | { key: string };
  fullDescription: string | { key: string };
  image: string;
  tags: string[];
  link?: string;
}

export interface NavLink {
  name: string | { key: string };
  path: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}