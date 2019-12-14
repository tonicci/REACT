

import lessonReducer from "./lesson-reducer";
import HWReducer from "./HW-reducer";

let store = {
    _state: {
        NLLP: {
            NLL: [
                {Tema: 'Темы за 8 клаererererererereсс', id: 8},
                {Tema: 'Темы за 9 класс', id: 9},
                {Tema: 'Темы за 10 класс', id: 10},
                {Tema: 'Темы за 11 класс', id: 11}],
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
        },
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {
        this._state.NLLP =lessonReducer(this._state.NLLP,action)
        this._state.HPL =HWReducer(this._state.HPL,action)

        this._callSubscriber(this._state)
    }
}


export default store;
