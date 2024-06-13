function Form () {
  return (
    <form action="https://swapi.dev/api">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
        <input type="text" className="form-control" name="url" id="basic-url" placeholder="people/1/" aria-describedby="basic-addon3"/>
        <button className="btn btn-outline-secondary" type="sabmit" id="button-addon2">Get info</button>
      </div>
    </form>
  );
}

export default Form;
