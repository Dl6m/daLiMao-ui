import React, { useContext, ReactNode, CSSProperties, useMemo } from 'react';
import './index.less';
import classnames from 'classnames';
import { contextProviders } from '../contextProviders';
import { Size } from '../types/common';
import toArray from 'rc-util/lib/Children/toArray';
import { SpaceProvider } from './context';
interface SpaceProps {
  align?: 'start' | 'end' | 'center' | 'baseline';
  direction?: 'vertical' | 'horizontal';
  size?: Size | Size[];
  split?: ReactNode;
  /**是否自动换行，仅在 horizontal 时有效 */
  wrap?: boolean;
  className: string;
  children?: ReactNode;
  style: CSSProperties;
  classNames?: { item: string };
}

export default function Space(props: SpaceProps) {
  const { align, direction='horizontal',  size = 'small', split, wrap, children,  style, className ,classNames:customClassNames,...ages } = props;
  const { prefix } = useContext(contextProviders);
  const spacePrefix = prefix + '-space';
  const childNodeList = toArray(children, { keepEmpty: true });
  
  const childClassName = classnames(customClassNames?.item);
//TODO 未完成
 const childnodes =  childNodeList.map((child:ReactNode ,i)=>{
    if (child !== undefined && child !== null) {
        console.log('1');
    }
    const key = (child && child.key) || `${childClassName}-${i}`;
    return <div className={childClassName} key={key}>
        {child}
    </div>

  })
  const cls = classnames(
    spacePrefix,
    {
      [`${spacePrefix}-start`]: align === 'start',
      [`${spacePrefix}-end`]: align === 'end',
      [`${spacePrefix}-baseline`]: align === 'baseline',
      [`${spacePrefix}-center`]: align === 'center',
      [`${spacePrefix}-wrap`]: direction ==='horizontal' && wrap,
      [`${spacePrefix}-small`]: !Array.isArray(size) && size === 'small',
      [`${spacePrefix}-middle`]: !Array.isArray(size) && size === 'middle',
      [`${spacePrefix}-large`]: !Array.isArray(size) && size === 'large',
    },
    className,
  );
 const sizeStyle = useMemo(() =>{
    if (!Array.isArray(size)) return
    if (size.length ===1) return {  gap:`${size[0]}px`}
    if (size.length ===2) return {  gap:`${size[0]}px ${size[1]}px`}
 },[size])
  return (
    <div className={cls} style={{...sizeStyle ,...style }} {...ages}>
      {childnodes}
    </div>
  );
}
