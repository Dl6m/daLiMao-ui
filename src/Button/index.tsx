import React, { useContext } from 'react';
import './index.less';
import classnames from 'classnames';
import { contextProviders } from '../confingProvider';
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
  const btnPrefix = prefix + '-btn';
  const cls = classnames(
    btnPrefix,
    {
      [`${btnPrefix}-highlight`]: type === 'highlight',
      [`${btnPrefix}-disabled`]: disabled,
    },
    className,
  );

  return (
    <div className={cls} onClick={(e)=>{
        if (disabled) return
        onClick && onClick(e)
    }} style={style}>
      {icon}
      {text}
      {children}
    </div>
  );
}
