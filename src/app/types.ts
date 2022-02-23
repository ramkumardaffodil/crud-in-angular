export interface User {
  email: string;
  password: string;
  gender: string;
  rating: string;
  knowJs: boolean;
  knowAngular: boolean;
}

export interface Blog {
  id: number;
  blogTitle: string;
  blogBody: string;
}
