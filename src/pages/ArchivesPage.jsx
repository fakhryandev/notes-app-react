import React, { useContext, useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import { archivedNotePage } from "../utils/content";
import LocaleContext from "../context/LocaleContext";

const ArchivesPage = () => {
  const { locale } = useContext(LocaleContext);
  const [loading, setLoading] = useState(true);
  const [archiveNote, setArchiveNote] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("keyword") || "");

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

  const filteredNotes = archiveNote.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="archives-page">
      <h2>{archivedNotePage[locale].title}</h2>
      <SearchBar searchText={search} handleChangeSearch={changeSearchParams} />
      {loading ? <LoadingIndicator /> : <NotesList notes={filteredNotes} />}
    </section>
  );
};

export default ArchivesPage;
