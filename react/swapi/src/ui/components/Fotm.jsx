import { useDispatch, useSelector } from 'react-redux';
import { setValue, clearData, getSwapiData } from '../../core/slise/swapiSlice';
import { setInputValue } from '../../core/slise/formSlice';


function Form() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.form.inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setValue(inputValue));
    dispatch(getSwapiData(inputValue));
    dispatch(clearData());
  };

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
        <input 
          type="text" 
          className="form-control" 
          value={inputValue}
          onChange={handleChange}
          placeholder="people/1" 
          aria-describedby="basic-addon3"
        />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
      </div>
    </form>
  );
}

export default Form;