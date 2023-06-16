import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";

const AddPage = () => {
  const navigate = useNavigate();

  const onSubmitNote = async (title, body) => {
    await addNote({ title, body });
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <NoteInput onSubmitNote={onSubmitNote} />
    </section>
  );
};

export default AddPage;
