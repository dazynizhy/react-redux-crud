import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { createStore } from 'redux'
import Reducer from './reducers/Reducer'
import { Provider } from 'react-redux'

import { loadState, saveState } from './localStorage'
const persistStore = loadState()
const store = createStore(Reducer, persistStore)
//const store = createStore(Reducer)

store.subscribe(() => {
    saveState(store.getState())
})
  

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root')
)

