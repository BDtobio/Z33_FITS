import { IUser } from "./IUser";

/* ---------- LOGIN ---------- */
export interface ILoginRequest {
  email: string;
  password: string;
}

/* ---------- REGISTER ---------- */
export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  birthdate: string; 
}

/* ---------- AUTH CONTEXT ---------- */
export interface IAuthContext {
  user: IUser | null;
  token: string | null;
  login: (credentials: ILoginRequest) => Promise<void>;
  register: (data: IRegisterRequest) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAdmin: boolean;   // ⭐ AGREGADO
}
