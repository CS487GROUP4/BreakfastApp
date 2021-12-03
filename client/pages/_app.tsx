import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { createContext, useReducer } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

// React Context
const defaultState: any = {};
export const StoreContext = createContext(defaultState);

// Action Types
export const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  IS_ADMIN: "IS_ADMIN",
};

// Store Reducer
const storeReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      return { ...state, cart: action.payload.cart };
    }
    case ACTION_TYPES.IS_ADMIN: {
      return { ...state, admin: action.payload.admin };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Store Provider
const StoreProvider = ({ children }: any) => {
  const initialState = {
    cart: [],
    admin: false,
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Types for per page layout
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// App Configuration
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
export default MyApp;
