import { ACTION_ADD_CAT } from '../actionTypes';

const initialState = {
    cats: {

        1001: {

            name: 'Beans',

            activity: 'meowing'

        },

        1002: {

            name: 'Bandit',

            activity: 'playing'

        }

    }

}


const catReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTION_ADD_CAT: {
            const { cat } = action.payload;
            return cat

        }
        default:
            return state;
    }
}

export default catReducer;

