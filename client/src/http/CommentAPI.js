import {$host} from './index'

export const createComment = async (comment) => {
    const {data} = await $host.post('/', comment);
    return data;
}

export const fetchComments = async () => {
    const {data} = await $host.get('/');
    return data;
}

export const fetchOneComment = async (id) => {
    const {data} = await $host.get('/' + id);
    return data;
}