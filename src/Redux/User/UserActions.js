import { UserActionTypes } from './UserTypes';

export const setCurrentUser = user => {
    return ({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    })
}