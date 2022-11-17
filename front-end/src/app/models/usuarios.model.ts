export interface Usuario {
  id: number;
  email: string;
  name: string;
  role: string;
  password: string;
  access_token?: string;
  token_type?: string;
}

export interface LoginData {
  access_token: string;
  token_type: string;
}
