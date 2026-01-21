export interface Colors {
    name: string;
    hex: string;
  }
  
  export interface Fonts {
    titles: string;
    body: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    palette: string[];
    colors: Colors[];
    concept: string;
    mission: string;
    typography: string;
    fonts: Fonts;
  }
  