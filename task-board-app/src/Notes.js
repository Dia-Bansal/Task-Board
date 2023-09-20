

// import React from 'react';

// const Notes = () => {
//   // Declare notesObj outside the functions
//   let notesObj = [];

//   // ...

//   // Function to add a note
//   let addbtn = document.getElementById("addbtn");
//   addbtn.addEventListener("click", function (e) {
//     let addtext = document.getElementById("addtext");
//     let notes = localStorage.getItem("notes");

//     if (notes != null) {
//       notesObj = JSON.parse(notes);
//     }

//     notesObj.push(addtext.value);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addtext.value = "";
//     console.log(notesObj);
//     showNotes();
//   });

//   // Function to show elements from local storage
//   function showNotes() {
//     let notes = localStorage.getItem("notes");

//     if (notes != null) {
//       notesObj = JSON.parse(notes);
//     }

//     let html = "";
    
//     // ... Rest of the code ...
//     notesObj.forEach(function(element,index){
//       html+=`
//       <div id="notes" class="row container-fluid">
//       <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">Notes ${index+1}</h5>
//             <p class="card-text">${element}</p>
//             <button id="${index}" onClick="deletenote(this.id)" class="btn btn-primary">Delete Node</button>
//           </div>
//         </div>`

//   });

//     let notesElm = document.getElementById("notes");

//     if (notesObj.length !== 0) {
//       notesElm.innerHTML = html;
//     } else {
//       notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
//   }

//   // Function to delete a note
//   function deletenote(index) {
//     console.log("I am deleting", index);

//     let notes = localStorage.getItem("notes");

//     if (notes != null) {
//       notesObj = JSON.parse(notes);
//     }

//     notesObj.splice(index, 1);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     showNotes();
//   }

//   // ...

//   return (
//     <>
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
//       crossorigin="anonymous"
//     />
//       <div class="container my-3">
//         <h1>Welcome to Notes App</h1>
//         <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Add a Note</h5>
//               <div class="form-group">
//                 <textarea class="form-control" rows="3" id="addtext"></textarea>
//               </div>
//               <br/>
//               <button class="btn btn-primary" id="addbtn">ADD NOTE</button>
//             </div>
//           </div>
//       <h1>Your Notes</h1>
//       <hr/>
//       <div id="notes" class="row container-fluid">
//     </div>
// </div>
//     </>

//   );
// };

// export default Notes;

import React, { useState, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to local storage whenever 'notes' changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Function to add a new note
  const addNote = () => {
    if (newNote.trim() === '') return;

    setNotes([...notes, newNote]);
    setNewNote('');
  };

  // Function to delete a note
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <div className="container my-3">
        <h1>Welcome to Notes App</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add a Note</h5>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              ></textarea>
            </div>
            <br />
            <button className="btn btn-primary" onClick={addNote}>
              ADD NOTE
            </button>
          </div>
        </div>
        <h1>Your Notes</h1>
        <hr />
        <div className="row container-fluid">
          {notes.length === 0 ? (
            <p>Nothing to show! Use "Add a Note" section above to add notes.</p>
          ) : (
            notes.map((note, index) => (
              <div key={index} className="noteCard my-2 mx-2 card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Note {index + 1}</h5>
                  <p className="card-text">{note}</p>
                  <button className="btn btn-primary" onClick={() => deleteNote(index)}>
                    Delete Note
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
