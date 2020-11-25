import './TextField.scss';
import { useState } from 'react';

export const TextField = () => {
  const [empty, setEmpty] = useState(false);
  const [query, setQuery] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) {
      setEmpty(true);
      return;
    }

    setEmpty(false);
    setComment('');
    setComment(query);
    setQuery('');
  };

  return (
    <div className="textfield">
      <h1 className="textfield__heading">Text Field</h1>

      <form
        className="textfield__container"
        onSubmit={handleSubmit}
      >
        <label htmlFor="input">
          Input
          <textarea
            className="textfield__text"
            id="input"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </label>

        <label htmlFor="output">
          Output
          <textarea
            className="textfield__text"
            id="output"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
        </label>

        <button
          className="textfield__text"
          type="submit"
        >
          Add text
        </button>
      </form>

      {empty ? (
        <span>Type the text to input field</span>
      ) : ('')}
    </div>
  );
}
