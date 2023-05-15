import {legacy_createStore as createStore} from "redux";

// * 1. Cria o reducer (reducer = (state = INITIAL_STATE, action) => {switch(action.type) case default})

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const randomBtn = document.querySelector('.random');
const INITIAL_STATE = { index: 0 }

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case NEXT_COLOR:
            return {
                ...state,
                index: state.index === state.colors.length -1 ? 0 : state.index + 1,
            }
        
        case PREVIOUS_COLOR:
            return {
                ...state,
                index: state.index === 0 ? state.colors.length - 1 : state.index -1,
            }
        
        case RANDOM_COLOR:  
            return {
                ...state,
                colors: [...state.color, criarCor()],
                index: state.color.length,
            }
        
        default: return state;
    }
}; 




// * 2. Cria a store (createStore{reducer, composeWithDevTools()})
const store = createStore(reducer, composeWithDevTools());




// * 3. Cria a action



// * EXTRA função que cria cor aleatória

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}


// * 4. Dispara a action (store.dispatch({type: })
previousBtn.addEventListener('click', () => store.dispatch({type: PREVIOUS_COLOR}));
nextBtn.addEventListener('click', () => store.dispatch({type: NEXT_COLOR}));
randomBtn.addEventListener('click', () => state.dispatch({tyrpe: RANDOM_COLOR}));


// * 5. Lẽ o Estado Global (store.subscribe(() => {}))
store.subscribe(() => {
    const {color, index} = store.getState();
    const currColor = document.querySelector('.value');

    currColor.innerHTML = color[index];

    console.log(`Estado atualizado para ${ currColor }`)
})
