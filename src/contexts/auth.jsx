import { useContext } from "react";
import { createContext } from "react";
import api from "../api/login";

// 接線生
const Context = createContext();

export function useAuth() {
  // 聽電話的另一頭
  return useContext(Context);
}

export function AuthProvider({ children }) {
  function login(arg) {
    return api(arg);
  }

  // 講電話的一頭
  return <Context.Provider value={{ login }}>{children}</Context.Provider>;
}
