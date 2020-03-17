import * as Actions from '../actions';

const INITIAL_STATE = {
  data: ["React", "React Native", "Redux", "Saga"]
};


export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.ADD_COURSE:
      return {
        ...state, 
        data: [...state.data, action.title]
      };
    default:
      return state;
  }
}

