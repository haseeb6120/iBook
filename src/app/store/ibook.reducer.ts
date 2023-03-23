export const ADD_DRAFT = 'ADD_DRAFT';
export const ADD_WORD_DATA = 'ADD_WORD_DATA';

export interface Action {
  type: string;
  payload: {
    draft: string;
    wordData: any;
  };
}

export const draftReducer = (state: string = '', action: any) => {
  switch (action.type) {
    case ADD_DRAFT:
      return action.payload.draft;
    default:
      return state;
  }
};

export const wordDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_WORD_DATA:
      return action.payload.wordData;
    default:
      return state;
  }
};
