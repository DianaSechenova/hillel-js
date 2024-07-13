import {useDispatch, useSelector} from "react-redux";
import selectors from "../../core/selectors.js";
import {api} from "../../core/thunks/api.js";
import {useEffect} from "react";

function Body () {
    const isLoad = useSelector(selectors.loader)
    const data = useSelector(selectors.data);
    const action = useSelector(selectors.action);
    const parts = action.match(/^([^/]+)\/(.+)$/) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(api(action));
    }, [dispatch, action]);

  return (
      <>
        <div className="card">
            <div className="card-body">
                <div className="d-flex pre-inner text-light">
                    <span className="badge bg-secondary js--swapi_controller">{parts[1]}</span>
                    <span className="badge bg-secondary js--swapi_id">{parts[2]}</span>
                </div>
                {isLoad
                    ? (
                        <div className="load">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                    : <pre className="mt-2 mb-0">
                        <div className="d-flex pre-inner text-light">
                            <span
                                className="d-block bg-secondary py-1 px-2 border border-secondary rounded-3">{JSON.stringify(data, null, 1)}</span>
                        </div>
                     </pre>
                }
            </div>
        </div>
      </>
  );
}

export default Body;
