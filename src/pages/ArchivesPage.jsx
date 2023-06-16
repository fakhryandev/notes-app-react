import React, { useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";

const ArchivesPage = () => {
  const [archiveNote, setArchiveNote] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArchiveNotesData = async () => {
      const { data } = await getArchivedNotes();
      setArchiveNote(data);
    };

    fetchArchiveNotesData();

    return () => {
      setArchiveNote(null);
    };
  }, []);

  const changeSearchParams = (e) => {
    const { value } = e.target;
    setSearch(value);
    // searchParams.set("keyword", value);
    // window.history.pushState({}, "", `?${searchParams.toString()}`);
  };

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar searchText={search} handleChangeSearch={changeSearchParams} />
      {archiveNote === null ? (
        <p>Memuat catatan...</p>
      ) : (
        <NotesList notes={archiveNote} />
      )}
    </section>
  );
};

export default ArchivesPage;
