import React, { useContext ,ReactNode} from 'react';
import './index.less';
import classnames from 'classnames';
import { contextProviders } from '../contextProviders';
interface ButtonProps {
  type?:  'default' | 'primary' | "success" | 'warning'  |"danger";
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  style?: object;
  round?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default function Button(props: ButtonProps) {
  const { round, type, disabled, icon, text, children, className, style, onClick } = props;
  const {prefix} =useContext(contextProviders)
  const btnPrefix = prefix + '-btn';
  const cls = classnames(
    btnPrefix,
    {
      [`${btnPrefix}-primary`]: type === 'primary',
      [`${btnPrefix}-success`]: type === 'success',
      [`${btnPrefix}-warning`]: type === 'warning',
      [`${btnPrefix}-danger`]: type === 'danger',
      [`${btnPrefix}-disabled`]: disabled,
      [`${btnPrefix}-round`]: round,
    },
    className,
  );
  return (
    <button className={cls} disabled onClick={(e)=>{
        onClick && onClick(e)
    }} style={style}>
      {icon}
      <span>{text}</span>
      {children}
    </button>
  );
}
