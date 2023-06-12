import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import NoteInput from '../components/NoteInput'
import { addNote } from '../utils/local-data'

function AddPageWrapper() {
  const navigate = useNavigate()

  return <AddPage navigate={navigate} />
}

class AddPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navigate: props.navigate,
    }

    this.onSubmitNote = this.onSubmitNote.bind(this)
  }

  onSubmitNote(title, body) {
    addNote({ title, body })
    const { navigate } = this.state
    navigate('/')
  }

  render() {
    return (
      <section className="add-new-page">
        <NoteInput onSubmitNote={this.onSubmitNote} />
      </section>
    )
  }
}

AddPage.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default AddPageWrapper
