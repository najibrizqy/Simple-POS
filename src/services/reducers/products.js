import dataProducts from './../dummy/products';

const initialState = {
    listProducts: dataProducts,
    errMsg: '',
    successMsg: '',
    errStatus: '',
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default products