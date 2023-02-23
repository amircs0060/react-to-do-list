const intialData = {
  list: [],
};

const todoReducers = (state = intialData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case 'DELETE_TODO':
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case 'DELETE_ALL_TODO':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducers;
