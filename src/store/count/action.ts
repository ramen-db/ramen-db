import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Error } from "./type";

const test = (a: number, b: number) => {
  return a + b;
};

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SUCCESS",
  "FETCH_FAILURE"
)<undefined, number, Error>();

export const fetch = (): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync.request());
  const res = await test(1, 2);
  dispatch(fetchAsync.success(res));
};
