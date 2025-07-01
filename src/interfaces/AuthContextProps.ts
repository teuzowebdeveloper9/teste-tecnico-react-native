
export interface AuthContextProps {
  token: string | null;
  signin: (token: string) => Promise<void>;
  signout: () => Promise<void>;
}
