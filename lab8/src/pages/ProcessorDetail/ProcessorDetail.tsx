import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getProcessorDetail, IProcessor } from 'api/processor';
import { Content } from 'containers/Content';
import { ContentTypeEnum, ModelTypeEnum } from 'containers/Content/Content';

import { Button } from 'components/Button';

import './ProcessorDetail.scss';

export const ProcessorDetail: React.FC = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const handleBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const [processor, setProcessor] = useState<IProcessor | undefined>(undefined);

    useEffect(() => {
        void getProcessorDetail(id).then((data) => setTimeout(() => setProcessor(data), 500));
    }, [id]);

    return (
        <div className="proc-det">
            {processor ? (
                <>
                    <Button text={'Назад'} onClick={handleBack} />
                    <Content
                        type={ContentTypeEnum.detail}
                        model={ModelTypeEnum.proc}
                        title={processor.title}
                        content={[processor]}
                    />
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};
