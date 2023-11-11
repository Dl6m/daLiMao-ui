import React, { useContext } from 'react';
import './index.less';
import classnames from 'classnames';
import { contextProviders } from "../contextProviders";
interface ButtonProps {
  type?: 'highlight' | 'default';
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default function Button(props: ButtonProps) {
  const { type, disabled, icon, text, children, className, style, onClick } = props;
  const {prefix} =useContext(contextProviders)

  const confingProviderPrefix = `${prefix}-configProvider`;
  const cls = classnames(
    confingProviderPrefix,
  )

   const onChange =(event)=>{
    const newColor = event.target.value;
    console.log(newColor ,'颜色');
    const root =  document.querySelector(':root')
    root?.style?.setProperty('--light-bg' ,newColor)
    root?.style?.setProperty('--border' ,newColor)

   }

  return (
    <div className={cls}   style={style}>
        <div onClick={onClick} className={`${confingProviderPrefix}-title`}>
         一键换色
         <input type="color" onChange={onChange}/>
        </div>
        <div className={`${confingProviderPrefix}-example`}>
             实例区域
        </div>
      {icon}
      {text}
      {children}
    </div>
  );
}
