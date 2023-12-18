"use client";

import { createContext, PropsWithChildren, useState, useContext } from "react";
import { authenticate } from "../api/auth";

interface AuthContextInterface {
  user: string | null;
  token: string | null;
  userProfile: UserType | null;
  selectUserProfile: (profile: UserType) => void;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: (cpf: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export function AuthProvider(props: PropsWithChildren) {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserType | null>(null);

  async function login(cpf: string, password: string): Promise<void> {
    setIsLoading(true);
    await authenticate({ cpf, password })
      .then((res) => {
        console.log("res", res);

        setToken(res.token);
        setUser(cpf);
        setIsLoading(false);
        setUserProfile(res?.userData?.type);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  async function logout(): Promise<void> {
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setToken(null);
      setUserProfile(null);
      setIsLoading(false);
    }, 1500);
  }

  function selectUserProfile(profile: UserType) {
    setUserProfile(profile);
  }

  const value: AuthContextInterface = {
    login,
    logout,
    token,
    user,
    isLoading,
    userProfile,
    selectUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
