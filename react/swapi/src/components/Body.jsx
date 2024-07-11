import { useState, useEffect } from 'react';

function Body ({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      setLoading(true);
      setError(null);
      fetch(`https://swapi.dev/api/${url}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }  else {
      setData(null);
    }
  }, [url]);
  
  return (<>
    <div className="card">
      <div className="card-body">
        {loading && (
          <div className="load">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {error && <div className="text-danger">Error: {error.message}</div>}
          <div className="d-flex pre-inner text-light">
              <span className="badge bg-secondary js--swapi_controller">{url.slice(0, -2) || 'people'}</span>
              <span className="badge bg-secondary js--swapi_id">{url.slice(-1) || 0}</span>
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
