import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { IPc } from 'api/pc';
import { IProcessor } from 'api/processor';
import { ContentTypeEnum, ModelTypeEnum } from 'containers/Content/Content';

import { keyValues } from 'utils/keyValues';

import './Table.scss';

interface ITableProps {
    type: ContentTypeEnum;
    model: ModelTypeEnum;
    content: IPc[] | IProcessor[];
}

const CnTable = cn('table');

export const Table: React.FC<ITableProps> = ({ type, model, content }) => {
    const link = useMemo(() => (model === ModelTypeEnum.pc ? 'pc/' : 'processor/'), [model]);
    const detail = useMemo(
        () => (type === ContentTypeEnum.detail ? content[0] || undefined : undefined),
        [content, type],
    );

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
                        <>
                            {detail &&
                                Object.keys(detail).map((key, index) => {
                                    return (
                                        <tr key={`${model}${index}`}>
                                            <td>{keyValues[key as keyof typeof keyValues]}</td>
                                            <td>
                                                {model === ModelTypeEnum.pc && key === 'proc' ? (
                                                    <Link to={`/processor/${(detail as IPc).proc.id}`}>
                                                        {(detail as IPc).proc.title}
                                                    </Link>
                                                ) : (
                                                    <span>{detail[key as keyof typeof detail]}</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
};
