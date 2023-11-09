import React, { createContext } from 'react';
interface Config {
  prefix?: string;
}
const defaultConfig: Config = {
  prefix: 'daLiMao-ui',
};
export const contextProviders = createContext(defaultConfig);

const ConfingProvider = () => {
  return <div>组件1</div>;
};

export default ConfingProvider;
