import { createStore } from 'redux';
import appReducers from '../components/store/reducers';


const store = createStore(appReducers);

export default store;