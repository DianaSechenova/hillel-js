function Body () {
  let peopleLenght = 1;
  
  return (
    <div className="card">
        <div className="card-body">
            <span className="badge d-none bg-secondary js--swapi_controller">people</span>
            <span className="badge d-none bg-secondary js--swapi_id">1</span>
            <div className="load d-none js--swapi_load">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <pre className="mt-2 mb-0 js--swapi_pre">
              <div className="d-flex pre-inner text-light">
              <span className="d-bock bg-secondary p-1 border border-secondary rounded-3">people</span>
              <span className="d-bock bg-secondary py-1 px-2 border border-secondary rounded-3">{peopleLenght}</span>
              </div>
            </pre>
        </div>
    </div>
  );
}

export default Body;
