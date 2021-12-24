import React from 'react';
import { cn } from '@bem-react/classname';

import './Button.scss';
interface IButtonProps {
    onClick: () => void;
    text: string;
}

const CnButton = cn('button');

export const Button: React.FC<IButtonProps> = ({ onClick, text }) => {
    return (
        <button className={CnButton()} onClick={onClick}>
            {text}
        </button>
    );
};
