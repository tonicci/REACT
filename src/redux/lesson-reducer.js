const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    NLLP: {
        NLL: [
            {Tema: 'Темы за 8 класс', id: 8},
            {Tema: 'Темы за 9 класс', id: 9},
            {Tema: 'Темы за 10 класс', id: 10},
            {Tema: 'Темы за 11 класс', id: 11}
        ],
        NLL8: [
            {Tema: 'Какая-то тема', id: 1},
            {Tema: 'Какая-то тема', id: 2},
            {Tema: 'Какая-то тема', id: 3},
            {Tema: 'Какая-то тема', id: 4},
            {Tema: 'Какая-то тема', id: 5},
        ],
        newPostText: 'Введите урок',
        NLL9: [
            {Tema: 'Какая-то тема', id: 1},
            {Tema: 'Какая-то тема', id: 2},
            {Tema: 'Какая-то тема', id: 3},
            {Tema: 'Какая-то тема', id: 4},
            {Tema: 'Какая-то тема', id: 5},

        ],
        NLL10: [
            {Tema: 'Какая-то тема', id: 1},
            {Tema: 'Какая-то тема', id: 2},
            {Tema: 'Какая-то тема', id: 3},
            {Tema: 'Какая-то тема', id: 4},
            {Tema: 'Какая-то тема', id: 5},

        ],
        NLL11: [
            {Tema: 'Какая-то тема', id: 1},
            {Tema: 'Какая-то тема', id: 2},
            {Tema: 'Какая-то тема', id: 3},
            {Tema: 'Какая-то тема', id: 4},
            {Tema: 'Какая-то тема', id: 5},

        ],
    }
};
const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newLesson = {
                id: 6,
                Tema: state.newPostText
            };
            state.NLL8.push(newLesson);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})

export default lessonReducer;

