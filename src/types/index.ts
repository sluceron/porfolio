export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    link?: string;
  }
  
  export interface NavLink {
    name: string;
    path: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  