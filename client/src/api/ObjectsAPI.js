import axios from "axios";

const API_URL = "http://localhost:4000/api/objects";

export const fetchObjectsAPI = async () => {
  try {
    const data = await axios.get(API_URL);
    return data.data;
  } catch (error) {
    return { error };
  }
};

export const addObjectAPI = async (values) => {
  try {
    const data = await axios.post(API_URL + "/new", values);
    return data.data;
  } catch (error) {
    return { error };
  }
};

export const deleteObjectAPI = async (id) => {
  try {
    const response = await axios.post(API_URL + "/delete/" + id);
    return response.data;
  } catch (error) {
    return { error };
  }
};

export const updateObjectAPI = async ({ id, name }) => {
  try {
    const response = await axios.post(API_URL + "/update/" + id, {
      name: name,
    });
    return response.data;
  } catch (error) {
    return { error };
  }
};
