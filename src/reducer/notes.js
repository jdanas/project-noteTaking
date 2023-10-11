import { GET, FETCH, ADD, EDIT, DELETE } from "./notesActionTypes";

// Sample Initial State
export const initialState = [
  {
    id: 1,
    title: "This is my first Note",
    date: new Date(),
    content: "I will put stuff into here as my first note",
  },
  {
    id: 2,
    title: "This is my second Note",
    date: new Date(),
    content: "I will put stuff into here as my second note",
  },
];

// The reducer function to be used to manipulate the shared state
export function notesReducer(state, action) {
  switch (action.type) {
    case GET:
      return state;
    case FETCH:
      return state;
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map(note => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      
    case DELETE:
      return state;
    default:
      return state;
  }
}

// the following actions are to help set up our data easily to be easily used with our reducer function above
export function getAction() {
  return {
    type: GET,
    payload: {},
  };
}

export function fetchAction() {
  return {
    type: FETCH,
    payload: {},
  };
}

export const addAction = (note) => {
  note.id = Math.floor(Math.random() * 1000);
  
  return {
    type: ADD,
    payload: note,
  };
};

export function editAction(note) {
  return {
    type: EDIT,
    payload: note,
  };
}

export function deleteAction() {
  return {
    type: DELETE,
    payload: {},
  };
}
