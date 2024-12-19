export interface User {
  email: string;
  password: string;
  role: string;
  name: string;
  surname: string;
  accessToken: string; // facultatif, au cas où vous souhaitez le stocker
}