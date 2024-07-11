function Form({ onSubmitForm, inputValue, setInputValue }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
        <input 
          type="text" 
          className="form-control" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="people/1" 
          aria-describedby="basic-addon3"
        />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
      </div>
    </form>
  );
}

export default Form;
