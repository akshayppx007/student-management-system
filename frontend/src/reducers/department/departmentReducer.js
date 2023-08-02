// departmentReducer.js
const initialState = [];

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DEPARTMENTS_SUCCESS':
      return action.payload;
    case 'ADD_DEPARTMENT_SUCCESS':
      return [...state, action.payload];
    case 'UPDATE_DEPARTMENT_SUCCESS':
      return state.map((department) => (department.id === action.payload.id ? action.payload : department));
    case 'DELETE_DEPARTMENT_SUCCESS':
      return state.filter((department) => department.id !== action.payload);
    default:
      return state;
  }
};

export default departmentReducer;
