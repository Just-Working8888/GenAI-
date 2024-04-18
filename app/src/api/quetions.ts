import { CancelToken } from 'axios';
import { instance } from './index'

const getQuetions = (sourceToken?: CancelToken) =>
    instance.get(`quetions`, { cancelToken: sourceToken });

const getQuetionById = (id: number, sourceToken?: CancelToken) =>
    instance.get(`quetions/${id}`, { cancelToken: sourceToken });

const endpoints = {
    getQuetions,
    getQuetionById
};
export default endpoints;
