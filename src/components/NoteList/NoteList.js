import "./NoteList.css";
import { useEffect, useContext } from "react";
import { NotesContext } from "../../provider/NotesProvider";
import { fetchAction } from "../../reducer/notes";

// this component can be used to list out all existing notes and make them clickable to be shown in the noteDetail compenents

export default function NoteList({modeChange, noteChange}) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

  return (
    <div className="listContainer">
      <h2 className="notesHeader">Notes</h2>
      <ul className="notesList">
        {notesList.map((note) => (
          <li key={note.id} onClick={() => noteChange(note)} >
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

