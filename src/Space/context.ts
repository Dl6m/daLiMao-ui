import { createContext } from "react";
export interface SpaceContextType {
    latestIndex: number;
  }
export const  SpaceContext = createContext({
    latestIndex: 0,
})

export  SpaceProvider  = SpaceContext.Provider