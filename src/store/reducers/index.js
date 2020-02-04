const INITIAL_STATE = {
  data: ["React", "React Native", "Redux", "Saga"]
};


function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return {...state, data: [...state.data, action.title]};
    default:
      return state;
  }
}

export default course;
