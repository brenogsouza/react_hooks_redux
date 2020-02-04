import { createStore } from 'redux';
import course from './reducers'

const store = createStore(course);

export default store;