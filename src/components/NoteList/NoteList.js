import "./NoteList.css";
import { useEffect, useContext, useState } from "react";
import { NotesContext } from "../../provider/NotesProvider";
import { fetchAction } from "../../reducer/notes";

// this component can be used to list out all existing notes and make them clickable to be shown in the noteDetail compenents
export default function NoteList({modeChange, noteChange, handleAddNote}) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

  return (
    <div className="listContainer">
      <h2 className="notesHeader">Notes</h2>
      <button onClick={handleAddNote}>Add Note</button>
      <ul className="notesList">
        {notesList.map((note) => (
          <li key={note.id} onClick={() => noteChange(note.id)} >
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

