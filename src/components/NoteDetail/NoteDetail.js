import { useState, useEffect, useContext } from "react";
import "./NoteDetail.css";
import { NotesContext } from "../../provider/NotesProvider";
import { addAction, deleteAction, editAction } from "../../reducer/notes";

// this component can be used to viewing, writting or editting notes
export default function NoteDetail(PROPS) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

  return (
    <div class="detailContainer">
      <div class="detailHeader">
        <div class="titleContainer">
          <input
            class="titleInput"
            type="text"
            placeholder="Enter Note Title Here!"
            size="50"
            value={PROPS.title}
          />
        </div>
        <div class="dateContainer">
          <p class="dateDisplay"></p>
        </div>
      </div>
      <div class="noteDetails">
        <div class="noteContent">
          <textarea placeholder="Enter your Note Here!" class="contentInput">
            {PROPS.content}
          </textarea>
        </div>
        <button class="editBtn">Save</button>
      </div>
    </div>
  );
}
