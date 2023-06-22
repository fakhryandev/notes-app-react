import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import LoadingIndicator from "../components/LoadingIndicator";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import LocaleContext from "../context/LocaleContext";
import { detailNotePage } from "../utils/content";

const DetailPage = () => {
  const { locale } = useContext(LocaleContext);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNoteByID = async () => {
      const { data } = await getNote(id);

      setNote(data);
      setLoading((prevState) => !prevState);
    };

    fetchNoteByID();

    return () => {
      setNote(null);
    };
  }, [id]);

  const onDeleteNote = async (id) => {
    await deleteNote(id);
    navigate("/");
  };

  const onArchiveNote = async (id) => {
    await archiveNote(id);
    navigate("/");
  };

  const onUnarchiveNote = async (id) => {
    await unarchiveNote(id);
    navigate("/");
  };

  return loading ? (
    <LoadingIndicator />
  ) : note ? (
    <NoteDetail
      id={note.id}
      title={note.title}
      body={note.body}
      isArchived={note.archived}
      createdAt={note.createdAt}
      onDeleteNote={onDeleteNote}
      onArchiveNote={onArchiveNote}
      onUnarchiveNote={onUnarchiveNote}
    />
  ) : (
    <p>{detailNotePage[locale].message}</p>
  );
};

export default DetailPage;
