const STATUS = 'bookstore/categories/statusChecked';


const initialState = {
    categories: [],
};

export default booksReducer = (state = 0, action) => {
    switch (action.type) {
      case STATUS:
        return "under construction";

      default:
        return state;
    }
  };

  export const statusChecked = ()=>({
    type: STATUS,
  })