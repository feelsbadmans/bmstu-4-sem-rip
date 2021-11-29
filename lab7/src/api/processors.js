import { host } from '../utils/api.js';

export const getProcessors = () => {
    return axios
        .get(`${host}/processor`)
        .then((res) => res.data)
        .catch((msg) => alert(msg))
}

export const getProcessorId = (id) => {
    return axios
        .get(`${host}/processor/${id}`)
        .then((res) => res.data)
        .catch((msg) => alert(msg))
}