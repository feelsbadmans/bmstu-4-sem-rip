import React, { useEffect, useState } from 'react';
import { getPC, IPc } from 'api/pc';
import { Content } from 'containers/Content';
import { ContentTypeEnum, ModelTypeEnum } from 'containers/Content/Content';

export const PcList:React.FC = () => {
    const [pcs, setPcs] = useState<IPc[] | undefined>(undefined);

    useEffect(() => {
        void getPC().then((data) => setTimeout(() => setPcs(data), 500));
    }, []);

    return pcs ? (
        <Content type={ContentTypeEnum.list} model={ModelTypeEnum.pc} title="Компьютеры" content={pcs} />
    ) : (
        <h1>Loading</h1>
    );
};
