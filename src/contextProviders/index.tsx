import React, { createContext } from 'react';
interface Config {
  prefix?: string;
}
const defaultConfig: Config = {
  prefix: 'daLiMao-ui',
};
export const contextProviders = createContext(defaultConfig);

