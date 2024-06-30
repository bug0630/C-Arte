import { createStore } from 'redux';

// 초기 상태
const initialState = {
  searchQuery: '',
};

// 리듀서 함수
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(searchReducer);

export default store;
