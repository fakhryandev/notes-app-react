import React from 'react'
import { Link } from 'react-router-dom'
import NotesList from '../components/NotesList'
import SearchBar from '../components/SearchBar'
import { getActiveNotes } from '../utils/local-data'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    const searchParams = new URLSearchParams(window.location.search)
    const keywordValue = searchParams.get('keyword')

    this.state = {
      notes: getActiveNotes(),
      search: keywordValue ?? '',
    }

    this.changeSearchParams = this.changeSearchParams.bind(this)
  }

  changeSearchParams(e) {
    const { value } = e.target

    this.setState({ search: value })
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('keyword', value)
    window.history.pushState({}, '', `?${searchParams.toString()}`)
  }

  render() {
    const { notes, search } = this.state
    const filteredNotes =
      search !== ''
        ? notes.filter((note) => {
            return note.title.toLowerCase().includes(search.toLowerCase())
          })
        : notes

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          handleChangeSearch={this.changeSearchParams}
          searchText={search}
        />
        <NotesList notes={filteredNotes} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <button className="action" type="button" title="Tambah">
              +
            </button>
          </Link>
        </div>
      </section>
    )
  }
}

export default HomePage