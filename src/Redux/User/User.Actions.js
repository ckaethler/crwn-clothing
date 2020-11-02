import { UserActionTypes } from './User.Types';

export const setCurrentUser = user => {
    return ({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    })
}