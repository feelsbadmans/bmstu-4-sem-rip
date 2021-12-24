import React from 'react';
import { cn } from '@bem-react/classname';

import { HeaderButton } from 'components/HeaderButton';

import { HEADER_LINKS } from './constants';

import './Header.scss';

const CnHeader = cn('header');

export const Header: React.FC = () => {
    return (
        <div className={CnHeader()}>
            {HEADER_LINKS.map((button, index) => (
                <HeaderButton text={button.text} link={button.link} key={`ButtonHeader${index}`} />
            ))}
        </div>
    );
};
