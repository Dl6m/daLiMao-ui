import React, { createContext } from 'react';
interface Config {
  prefix?: string;
}
const defaultConfig: Config = {
  prefix: 'da-li-mao-ui',
};
export const contextProviders = createContext(defaultConfig);

