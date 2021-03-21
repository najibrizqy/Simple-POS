const initialState = {
    listTransaction: [],
    errMsg: '',
    successMsg: '',
    errStatus: '',
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_TRANSACTION':
            return {
                ...state,
                listTransaction: [
                    ...state.listTransaction,
                    action.data
                ]
            };
        default:
            return state;
    }
}

export default transactions