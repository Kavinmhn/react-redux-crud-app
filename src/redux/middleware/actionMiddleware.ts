import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import { AxiosResponse } from "axios";

const actionMiddleWare: Middleware = ({
  dispatch,
  getState
}: MiddlewareAPI) => (next: Dispatch) => async (action: AnyAction) => {
  if (action.type.includes("GET_POST")) {
    const [START_GET_POST, SUCCESS_GET_POST, FAIL_GET_POST] = action.subtypes;

    next({ ...action, type: START_GET_POST });

    // Here we will dispatch SUCCESS OR FAIL based on some condition or try/catch
    try {
      const response: AxiosResponse = await action.promise;
      if (response.status === 200 || response.status === 201) {
        return next({ ...action, type: SUCCESS_GET_POST });
      }
    } catch (error) {
      return next({ ...action, type: FAIL_GET_POST });
    }
  } else if (action.type.includes("ADD_POST")) {
    const [START_ADD_POST, SUCCESS_ADD_POST, FAIL_ADD_POST] = action.subtypes;

    next({ ...action, type: START_ADD_POST });

    // Here we will dispatch SUCCESS OR FAIL based on some condition or try/catch
    try {
      const response: AxiosResponse = await action.promise;
      if (response.status === 200 || response.status === 201) {
        return next({ ...action, type: SUCCESS_ADD_POST });
      }
    } catch (error) {
      return next({ ...action, type: FAIL_ADD_POST });
    }
  }else if (action.type.includes("UPDATE_POST")) {
    const [START_UPDATE_POST, SUCCESS_UPDATE_POST, FAIL_UPDATE_POST] = action.subtypes;

    next({ ...action, type: START_UPDATE_POST });

    // Here we will dispatch SUCCESS OR FAIL based on some condition or try/catch
    try {
      const response: AxiosResponse = await action.promise;
      if (response.status === 200 || response.status === 201) {
        return next({ ...action, type: SUCCESS_UPDATE_POST });
      }
    } catch (error) {
      return next({ ...action, type: FAIL_UPDATE_POST });
    }
  }
  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action);

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

export default actionMiddleWare;