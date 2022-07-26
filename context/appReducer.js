import {
    TOMAR_PROYECTO
} from './../types/index';

export default (state, action) => {

    switch (action.type) {
        case TOMAR_PROYECTO: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }

}