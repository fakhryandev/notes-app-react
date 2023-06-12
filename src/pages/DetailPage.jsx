import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useNavigate } from 'react-router-dom'
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/local-data'
import NoteDetail from '../components/NoteDetail'

function DetailPageWrapper() {
  const navigate = useNavigate()
  const { id } = useParams()

  return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      note: getNote(props.id),
      navigate: props.navigate,
    }

    this.onDeleteNote = this.onDeleteNote.bind(this)
    this.onArchiveNote = this.onArchiveNote.bind(this)
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this)
  }

  onDeleteNote(id) {
    deleteNote(id)
    const { navigate } = this.state
    navigate('/')
  }

  onArchiveNote(id) {
    archiveNote(id)
    const { navigate } = this.state
    navigate('/')
  }

  onUnarchiveNote(id) {
    unarchiveNote(id)
    const { navigate } = this.state
    navigate('/')
  }

  render() {
    const { note } = this.state
    if (!note) {
      return (
        <section>
          <h2>404</h2>
          <p>Page not found</p>
        </section>
      )
    }

    return (
      <NoteDetail
        id={note.id}
        title={note.title}
        body={note.body}
        isArchived={note.archived}
        createdAt={note.createdAt}
        onDeleteNote={this.onDeleteNote}
        onArchiveNote={this.onArchiveNote}
        onUnarchiveNote={this.onUnarchiveNote}
      />
    )
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper
