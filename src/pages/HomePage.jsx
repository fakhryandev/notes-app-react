import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";

const HomePage = () => {
  const [notes, setNotes] = useState(null);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchNotesData = async () => {
      const { data } = await getActiveNotes();

      setNotes(data);
    };

    fetchNotesData();

    return () => {
      setNotes(null);
    };
  }, []);

  const changeSearchParams = (e) => {
    const { value } = e.target;
    setSearch(value);
    searchParams.set("keyword", value);
    // window.history.pushState({}, "", `?${searchParams.toString()}`);
  };

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar searchText={search} handleChangeSearch={changeSearchParams} />
      {notes === null ? <p>Memuat catatan...</p> : <NotesList notes={notes} />}
      <div className="homepage__action">
        <Link to="/notes/new">
          <button className="action" type="button" title="Tambah">
            +
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
