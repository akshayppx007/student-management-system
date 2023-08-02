// departmentActions.js
import axios from 'axios';

const backendUrl = 'http://localhost:8000/api/v1/departments';

export const fetchDepartments = () => async (dispatch) => {
  try {
    const response = await axios.get(backendUrl);
    dispatch({ type: 'FETCH_DEPARTMENTS_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

export const addDepartment = (department) => async (dispatch) => {
    try {
      const response = await axios.post(backendUrl, department);
      dispatch({ type: 'ADD_DEPARTMENT_SUCCESS', payload: response.data });
      return response.data; // Return the newly created department from the API response
    } catch (error) {
      console.error('Error adding department:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

export const updateDepartment = (department) => async (dispatch) => {
  try {
    const response = await axios.put(`${backendUrl}/${department.id}`, department);
    dispatch({ type: 'UPDATE_DEPARTMENT_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error updating department:', error);
  }
};

export const deleteDepartment = (departmentId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/${departmentId}`);
    dispatch({ type: 'DELETE_DEPARTMENT_SUCCESS', payload: departmentId });
  } catch (error) {
    console.error('Error deleting department:', error);
  }
};
