import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSwapiData } from '../../core/slise/swapiSlice';
import { setInputValue } from '../../core/slise/formSlice';


function Body () {
  const dispatch = useDispatch();
  const { value, data, error } = useSelector((state) => state.swapi);


  useEffect(() => {
    if (value) {
      console.log(value)
      dispatch(getSwapiData(value));
    }
  }, [[value], dispatch]);
  
  return (<>
    <div className="card">
      <div className="card-body">
        {error && <div className="text-danger">Error: {error.message}</div>}
          <div className="d-flex pre-inner text-light">
              <span className="badge bg-secondary js--swapi_controller">{'people'}</span>
              <span className="badge bg-secondary js--swapi_id">{value.split('/')[1]}</span>
          </div>
          {data && (
            <pre className="mt-2 mb-0">
                <div className="d-flex pre-inner text-light" >
                  <span className="d-block bg-secondary py-1 px-2 border border-secondary rounded-3">{JSON.stringify(data, null, 1)}</span>
                </div>              
            </pre>
          )}
      </div>
    </div>
    </>
  );
}

export default Body;
