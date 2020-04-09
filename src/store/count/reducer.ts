import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchAsync } from "./action";
import { Error } from "./type";

export const isFetch = createReducer(false as boolean)
  .handleAction([fetchAsync.request], (state, action) => true)
  .handleAction(
    [fetchAsync.success, fetchAsync.failure],
    (state, action) => false
  );

export const count = createReducer(0 as number).handleAction(
  [fetchAsync.success],
  (state, action) => {
    return action.payload;
  }
);

export const errors = createReducer([] as Error[]).handleAction(
  [fetchAsync.failure],
  (state, action) => action.payload
);

const countReducer = combineReducers({
  isFetch,
  count,
  errors,
});

export default countReducer;
export type countState = ReturnType<typeof countReducer>;
