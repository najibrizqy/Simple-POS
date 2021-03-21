const postTransaction = (data) => {  
    return {
      type: 'POST_TRANSACTION',
      data
    }
}

export {
    postTransaction
}