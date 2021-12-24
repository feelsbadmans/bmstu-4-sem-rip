import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getPCDetail, IPc } from 'api/pc';
import { Content } from 'containers/Content';
import { ContentTypeEnum, ModelTypeEnum } from 'containers/Content/Content';

import { Button } from 'components/Button';

import './PcDetail.scss';

export const PcDetail: React.FC = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const handleBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const [pc, setPc] = useState<IPc | undefined>(undefined);

    useEffect(() => {
        void getPCDetail(id).then((data) => setTimeout(() => setPc(data), 500));
    }, [id]);

    return (
        <div className="pc-det">
            {pc ? (
                <>
                    <Button text={'Назад'} onClick={handleBack} />
                    <Content type={ContentTypeEnum.detail} model={ModelTypeEnum.pc} title={pc.title} content={[pc]} />
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};
