const signin = (data, token) => {  
    return {
      type: 'SIGNIN',
      data,
      token
    }
}

const retrieveToken = (token) => {  
    return {
      type: 'RETRIEVE_TOKEN',
      token
    }
}

const register = (data) => {  
    return {
      type: 'REGISTER',
      data
    }
}

const signout = () => {  
    return {
      type: 'SIGNOUT',
    }
}

export {
    signin,
    retrieveToken,
    register,
    signout
}