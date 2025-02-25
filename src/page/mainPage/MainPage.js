
import { useState } from "react";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import NoteList from "../../components/NoteList/NoteList";
import "./MainPage.css";

function MainPage() {
  const [id, setId] = useState(false);
  const noteChange = (id) => {
    setId(id);
  };
  
  const [showForm, setShowForm] = useState(false);

  const handleAddNote = () => {
    setShowForm(!showForm);
  }


  return (
    <div className="mainContainer">
      <NoteList noteChange={noteChange} handleAddNote={handleAddNote} />
      {showForm || id !== false && <NoteDetail id={id} />}
    </div>
  );
}

export default MainPage;
