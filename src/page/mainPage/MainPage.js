
import { useState } from "react";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import NoteList from "../../components/NoteList/NoteList";
import "./MainPage.css";

function MainPage() {
  const [id, setId] = useState(0);
  const noteChange = (id) => {
    setId(id);
  };

  return (
    <div className="mainContainer">
      <NoteList noteChange={noteChange}/>
      <NoteDetail id={id} />
    </div>
  );
}

export default MainPage;
