import axios, { AxiosResponse } from 'axios';

import { host } from 'utils/api';

export interface IProcessor {
    id: number;
    title: string;
    numbCores: number;
    freq: number;
    price: number;
    year: number;
}

export const getProcessors = (): Promise<IProcessor[]> => {
    return axios
        .get<Promise<void>, AxiosResponse<IProcessor[]>>(`${host}/processor`)
        .then((res) => res.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
};

export const getProcessorId = (id: number): Promise<IProcessor> => {
    return axios
        .get<Promise<number>, AxiosResponse<IProcessor>>(`${host}/processor/${id}`)
        .then((res) => res.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
};
