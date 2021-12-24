import React from 'react';
import { cn } from '@bem-react/classname';
import vojak from 'assets/images/vojak.png';

import './Main.scss';

const CnMain = cn('main');

export const Main: React.FC = () => {
    return (
        <div className={CnMain('container')}>
            <h1 className={CnMain('header')}>Лабораторная работа 8</h1>
            <span className={CnMain('text')}>React</span>
            <img src={vojak} className={CnMain('image')} alt="Avg React Enjoyers"></img>
        </div>
    );
};
