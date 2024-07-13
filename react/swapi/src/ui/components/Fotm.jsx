import { useDispatch, useSelector } from 'react-redux';
import swapiSlice from "../../core/slise/slice.js";
import selectors from "../../core/selectors.js";
import {api} from "../../core/thunks/api.js";

function Form() {
  const dispatch = useDispatch();
  const isLoad = useSelector(selectors.loader);
  const defaultAction = useSelector(selectors.action);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(api(event.target.url.value))
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
          <input name="url"
                 type="text"
                 className="form-control"
                 defaultValue={defaultAction}
                 placeholder={defaultAction}
                 aria-describedby="basic-addon3"
          />
          <button disabled={isLoad} className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
        </div>
      </form>
  );
}

export default Form;