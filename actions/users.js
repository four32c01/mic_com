import axios from 'axios';

export const getUserRequest = () => {
    const url = `${ROOT}`;
    const request = axios({
        url,
        method: 'get',
    });
    return {
        type: 'USER_REQUEST',
        payload: request,
    };
};
export const getUserSuccess = (users) => {
    return {
        type: 'USER_SUCCESS',
        payload: users,
    };
};
export const getUserFail = (error) => {
    return {
        type: 'USER_FAIL',
        payload: error,
    };
};