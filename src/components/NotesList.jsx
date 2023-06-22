import React, { useContext } from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import { activeNotePage } from "../utils/content";
import LocaleContext from "../context/LocaleContext";

function NotesList({ notes }) {
  const { locale } = useContext(LocaleContext);

  return notes.length === 0 ? (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{activeNotePage[locale].empty}</p>
    </section>
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default NotesList;
