const STATUS = 'bookstore/categories/statusChecked';

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS:
      return 'under construction';

    default:
      return state;
  }
}

export const statusChecked = () => ({
  type: STATUS,
});
