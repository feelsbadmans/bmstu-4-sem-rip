import axios, { AxiosResponse } from 'axios';

import { host } from 'utils/api';

import { IProcessor } from './processor';

export interface IPc {
    id: number;
    title: string;
    proc: IProcessor;
    price: number;
}

export const getPC = (): Promise<IPc[]> => {
    return axios
        .get<Promise<void>, AxiosResponse<IPc[]>>(`${host}/pc`)
        .then((res) => res.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
};

export const getPCDetail = (id: string): Promise<IPc> => {
    return axios
        .get<Promise<string>, AxiosResponse<IPc>>(`${host}/pc/${id}`)
        .then((res) => res.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
};
