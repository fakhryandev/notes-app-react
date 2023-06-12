import React from 'react'
import PropTypes from 'prop-types'
import showFormattedDate from '../utils'

function NoteDetail({
  id,
  title,
  body,
  isArchived,
  createdAt,
  onDeleteNote,
  onArchiveNote,
  onUnarchiveNote,
}) {
  const date = showFormattedDate(createdAt)

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{date}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        {isArchived ? (
          <button
            type="button"
            className="action"
            title="Arsipkan"
            onClick={() => onUnarchiveNote(id)}
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
              <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="action"
            title="Batal Arsip"
            onClick={() => onArchiveNote(id)}
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
              <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z" />
            </svg>
          </button>
        )}

        <button
          type="button"
          className="action"
          title="Hapus"
          onClick={() => onDeleteNote(id)}
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
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </button>
      </div>
    </section>
  )
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onUnarchiveNote: PropTypes.func.isRequired,
}

export default NoteDetail
