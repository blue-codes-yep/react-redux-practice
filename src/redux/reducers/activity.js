import { ACTION_SET_ACTIVITY, ACTION_SET_NAME } from '../actionTypes';

const initialState = {
    name: 'Guster',
    activity: 'meowing'
}



export const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_ACTIVITY: {
            const { activity } = action.payload;
            return {
                ...state,
                activity
            }
        }
        default:
            return state;

        case ACTION_SET_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name
            }
        }
            return state;
    }


}

export default activityReducer;

