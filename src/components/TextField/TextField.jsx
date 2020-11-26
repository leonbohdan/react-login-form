import './TextField.scss';
import 'bulma';
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
      <h1 className="textfield__heading">
        Save some text
      </h1>

      <form
        className="textfield__container form"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="input"
          className="textfield__label label"
        >
          Input
          <textarea
            className="textfield__text textarea"
            id="input"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </label>

        <label
          htmlFor="output"
          className="textfield__label label"
        >
          Output
          <textarea
            className="textfield__text textarea"
            id="output"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
        </label>

        <button
          className="textfield__button button is-primary"
          type="submit"
        >
          Save text
        </button>
      </form>

      {empty ? (
        <span
          className="textfield__empty"
        >
          Type the text to input field
        </span>
      ) : ('')}
    </div>
  );
}
