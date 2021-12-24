import React from 'react';
import { cn } from '@bem-react/classname';
import { IPc } from 'api/pc';
import { IProcessor } from 'api/processor';

import { Table } from 'components/Table';

import './Content.scss';

export enum ContentTypeEnum {
    list = 'list',
    detail = 'detail',
}

export enum ModelTypeEnum {
    proc = 'proc',
    pc = 'pc',
}

interface IContentProps {
    type: ContentTypeEnum;
    model: ModelTypeEnum;
    title: string;
    content: IPc[] | IProcessor[];
}

const CnContent = cn('content-container');

export const Content: React.FC<IContentProps> = ({ type, model, title, content }) => {
    return (
        <div className={CnContent()}>
            <h1 className={CnContent('header')}>{title}</h1>
            <Table type={type} model={model} content={content}/>
        </div>
    );
};
