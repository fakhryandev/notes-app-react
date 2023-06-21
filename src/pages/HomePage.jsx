import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";
import LoadingIndicator from "../components/LoadingIndicator";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("keyword") || "");

  useEffect(() => {
    const fetchNotesData = async () => {
      const { data } = await getActiveNotes();

      setNotes(data);
      setLoading(false);
    };

    fetchNotesData();

    return () => {
      setNotes([]);
    };
  }, []);

  const changeSearchParams = (e) => {
    const { value } = e.target;
    setSearch(value);
    setSearchParams({ keyword: value });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar searchText={search} handleChangeSearch={changeSearchParams} />
      {loading ? <LoadingIndicator /> : <NotesList notes={filteredNotes} />}
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
