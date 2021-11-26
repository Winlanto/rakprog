export const POST_ADD = "POST_ADD"
export const POST_REMOVE = "POST_REMOVE"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const POSTS_UPDATE = "POSTS_UPDATE"



export const addPost = post => ({
    type: POST_ADD,
    payload: post
})

export const removePost = id => ({
    type: POST_REMOVE,
    payload: id
})

export const updatePosts = array => ({
    type: POSTS_UPDATE,
    payload: array
})

export const loginUser = user => ({
    Type: USER_LOGIN,
    payload: user
})

export const logoutUser = user => ({
    type: USER_LOGOUT
})