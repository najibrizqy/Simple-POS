const initialState = {
    listUser: [],
    dataUser: [],
    userToken: null,
    errMsg: '',
    successMsg: '',
    errStatus: '',
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'RETRIEVE_TOKEN':
            return{
                ...state,
                userToken: action.token
            }
        case 'SIGNIN':
            return {
                ...state,
                dataUser: action.data,
                userToken: action.token
            };
        case 'REGISTER':
            return {
                ...state,
                listUser: [
                    ...state.listUser,
                    action.data
                ]
            };
        case 'SIGNOUT':
            return {
                ...state,
                dataUser: [],
                userToken: null
            };
        default:
            return state;
    }
}

export default products