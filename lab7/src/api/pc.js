import { host } from '../utils/api.js';

export const getPC = () => {
    return axios
        .get(`${host}/pc`)
        .then((res) => res.data)
        .catch((msg) => alert(msg))
}

export const getPCId = (id) => {
    return axios
        .get(`${host}/pc/${id}`)
        .then((res) => res.data)
        .catch((msg) => alert(msg))
}