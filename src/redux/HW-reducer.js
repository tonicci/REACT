const ADD_HW = 'ADD-HW';
const UPDATE_NEW_HW_TEXT = 'UPDATE-NEW-HW-TEXT';

let initialState = {
    HPL: {
        HomList: [
            {klass: 7},
            {klass: 8},
            {klass: 9},
            {klass: 10},
            {klass: 11}
        ],
        HPL7: [
            {Tema: 'какая - то', id: 1},
            {Tema: 'какая - то', id: 2},
            {Tema: 'какая - то', id: 3},
            {Tema: 'какая - то', id: 4},
            {Tema: 'какая - то', id: 5},
        ],
        newPostHWText: 'Введите тему для домашнего задания'
    }
};

const HWReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HW:
            let newHW = {
                id: 5,
                Tema: state.newPostHWText
            };
            state.HPL7.push(newHW);
            state.newPostHWText = '';
            return state;
        case UPDATE_NEW_HW_TEXT:
            state.newPostHWText = action.newHWText;
            return state;
        default:
            return state;
    }
    return state;
}
export const addHWActionCreator = () => ({type: ADD_HW})
export const updateNewHWAction = (text) => (
    {type: UPDATE_NEW_HW_TEXT, newHWText: text})
export default HWReducer;