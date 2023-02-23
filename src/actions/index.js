export const addToDo = (data) => {
  return {
    type: 'ADD_TODO',
    payload:{
      id: new Date().getTime().toString(),
      data: data
    }
  };
};

export const deleteToDo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const deleteAllToDo = () => {
  return {
    type: 'DELETE_ALL_TODO',
  };
};
