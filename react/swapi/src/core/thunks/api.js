import swapiSlice from "../slise/slice.js";

export  function api(action)  {
    return async (dispatch) => {
        dispatch(swapiSlice.actions.setLoader(true));
        const _url = `https://swapi.dev/api/${action}`;
        try {
          const response = await fetch(_url);
          const res = await response.json();
          if (res) {
            dispatch(swapiSlice.actions.setData(res));
            dispatch(swapiSlice.actions.setAction(action));
          }
        } catch (error) {
          console.log(error);
        }
        dispatch(swapiSlice.actions.setLoader(false));
    }
}