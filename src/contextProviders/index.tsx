import React, { createContext } from 'react';
interface Config {
  prefix?: string;
}
const defaultConfig: Config = {
  prefix: 'dalimao-ui',
};
export const contextProviders = createContext(defaultConfig);

