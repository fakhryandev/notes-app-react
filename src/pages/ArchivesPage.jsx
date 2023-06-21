import React, { useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";

const ArchivesPage = () => {
  const [loading, setLoading] = useState(true);
  const [archiveNote, setArchiveNote] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("keyword"));

  useEffect(() => {
    const fetchArchiveNotesData = async () => {
      const { data } = await getArchivedNotes();
      setArchiveNote(data);
      setLoading(false);
    };

    fetchArchiveNotesData();

    return () => {
      setArchiveNote([]);
    };
  }, []);

  const changeSearchParams = (e) => {
    const { value } = e.target;
    setSearch(value);
    setSearchParams({ keyword: value });
  };

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar searchText={search} handleChangeSearch={changeSearchParams} />
      {loading ? <LoadingIndicator /> : <NotesList notes={archiveNote} />}
    </section>
  );
};

export default ArchivesPage;
