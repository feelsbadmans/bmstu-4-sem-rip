import React, { useEffect, useState } from 'react';
import { getProcessors, IProcessor } from 'api/processor';
import { Content } from 'containers/Content';
import { ContentTypeEnum, ModelTypeEnum } from 'containers/Content/Content';

export const ProcessorList: React.FC = () => {
    const [processors, setProcessors] = useState<IProcessor[] | undefined>(undefined);

    useEffect(() => {
        void getProcessors().then((data) => setProcessors(data));
    }, []);

    return processors ? (
        <Content type={ContentTypeEnum.list} model={ModelTypeEnum.proc} title="Процессоры" content={processors} />
    ) : (
        <h1>Loading</h1>
    );
};
