import React, { ReactNode } from 'react';
import './index.less';
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
export default function Button(props: ButtonProps): React.JSX.Element;
export {};
