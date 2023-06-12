import React from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(window.location.search);
    const keywordValue = searchParams.get("keyword");

    this.state = {
      notes: getArchivedNotes(),
      search: keywordValue ?? "",
    };

    this.changeSearchParams = this.changeSearchParams.bind(this);
  }

  changeSearchParams(e) {
    const { value } = e.target;

    this.setState({
      search: value,
    });
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("keyword", value);
    window.history.pushState({}, "", `?${searchParams.toString()}`);
  }

  render() {
    const { notes, search } = this.state;
    const filteredNotes =
      search !== ""
        ? notes.filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
          )
        : notes;

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          handleChangeSearch={this.changeSearchParams}
          searchText={search}
        />
        <NotesList notes={filteredNotes} />
      </section>
    );
  }
}

export default ArchivesPage;
