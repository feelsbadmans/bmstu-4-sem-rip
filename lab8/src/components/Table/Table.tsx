import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { IPc } from 'api/pc';
import { IProcessor } from 'api/processor';
import { ContentTypeEnum, ModelTypeEnum } from 'containers/Content/Content';

import './Table.scss';

interface ITableProps {
    type: ContentTypeEnum;
    model: ModelTypeEnum;
    content: IPc[] | IProcessor[];
}

const CnTable = cn('table');

export const Table: React.FC<ITableProps> = ({ type, model, content }) => {
    const link = useMemo(() => (model === ModelTypeEnum.pc ? 'pc/' : 'processor/'), [model]);

    return (
        <div className={CnTable()}>
            <table>
                <tbody>
                    {type === ContentTypeEnum.list ? (
                        <>
                            <tr>
                                <td>ID</td>
                                <td>Название</td>
                            </tr>
                            {content.map((obj) => (
                                <tr key={`${model}${obj.id}`}>
                                    <td>{obj.id}</td>
                                    <td>
                                        <Link to={`${link}${obj.id}`}>{obj.title}</Link>
                                    </td>
                                </tr>
                            ))}
                        </>
                    ) : (
                        <div></div>
                    )}
                </tbody>
            </table>
        </div>
    );
};
