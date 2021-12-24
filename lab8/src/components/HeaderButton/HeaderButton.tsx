import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import './HeaderButton.scss';

interface IHeaderButtonProps {
    text: string;
    link: string;
}

const CnHeaderButton = cn('header-button');

export const HeaderButton: React.FC<IHeaderButtonProps> = ({ text, link }) => {
    const history = useHistory();

    const handleClick = useCallback(() => {
        history.push(`/${link}`);
    }, [history, link]);

    return (
        <div className={CnHeaderButton()} onClick={handleClick}>
            <span className={CnHeaderButton('text')}>{text}</span>
        </div>
    );
};
