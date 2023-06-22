import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";
import { newNotePage } from "../utils/content";

function NoteInput({ onSubmitNote }) {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder={newNotePage[locale].titlePlaceholder}
          onChange={onTitleChangeEventHandler}
          value={title}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder={newNotePage[locale].contentPlaceholder}
          contentEditable
          onInput={onBodyChangeEventHandler}
          placeholder={body}
        />
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={() => onSubmitNote(title, body)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </button>
      </div>
    </>
  );
}

NoteInput.propTypes = {
  onSubmitNote: PropTypes.func.isRequired,
};

export default NoteInput;
