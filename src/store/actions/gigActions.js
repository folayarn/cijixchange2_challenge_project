import * as actionType from "./actionType";

export const add_gig = (content) => {
  return {
    type: actionType.ADD_GIG,
    payload: content,
  };
};

export const on_track = (content) => {
  return {
    type: actionType.ON_TRACK,
    payload: content,
  };
};

export const search_result = (content) => {
  return {
    type: actionType.SEARCH_RESULT,
    payload: content,
  };
};

export const add_text = (content) => {
  return {
    type: actionType.EDITOR_TEXT,
    payload: content,
  };
};
