const users = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case 'USER_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'USER_SUCCESS':
            return {
                ...state,
                users: action.payload.data.results,
                loading: false,
            };
        case 'USER_FAIL':
        {
            return {
                ...state,
                errorMsg: 'Error fetching data',
                loading: false,
            };
        }
        default:
            return {
                ...state,
            };
    }
};
export default users;
