import { createStore } from 'redux'

function reducer() {
    return [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Aula 1' },
                { id: 2, title: 'Aula 2' }
            ],
        },
        {
            id: 2, title: 'Aprendendo Redux', lessons: [
                { id: 1, title: 'Aula 3' },
                { id: 2, title: 'Aula 4' }
            ]
        }
    ];

}

const store = createStore(reducer);

export default store;