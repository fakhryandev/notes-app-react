import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import showFormattedDate from '../utils'

function Note({ note }) {
  const date = showFormattedDate(note.createdAt)

  return (
    <article className="note-item">
      <Link to={`/notes/${note.id}`}>
        <h3 className="note-item__title">{note.title}</h3>
      </Link>
      <p className="note-item__createdAt">{date}</p>
      <p className="note-item__body">{note.body}</p>
    </article>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Note
