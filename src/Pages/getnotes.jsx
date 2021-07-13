import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import './firebase';

export default function GetNotes (props) {

    const [state,setState]= useState({
        notes: null,
    });var db = firebase.firestore();
    var notes = [];

    useEffect( () => {
        
        db.collection("notes")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const docData = {
                    id:doc.id,
                    note: doc.data().note,
                };
                notes.push(docData)
            });
            setState({
                notes: notes,
            })
        });// eslint-disable-next-line
    }, [setState])

    var deleteNote = (e) => {
        var id = e.target.getAttribute('note-id');
        db.collection("notes").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            console.log(notes);
            notes.forEach((note,i ) => {
                if(note.id==id)
                {
                notes.splice(i, 1)
                return(false)
            }
            })
            setState({
                notes: notes,
            })
        })
        
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
        
    }

    if (state.notes == null) {
        console.log(" not isLoaded");
        return (<h1> Loading... </h1>)
    } else {
        console.log("isLoaded");
            console.log(state.notes)
            return (
            <div style={{display: 'flex', width: '100vw', height: '100vh'}}> 
            {

                state.notes.map((note) => {
                    return (
                        <div id={note.id} style={{ width: '30vw', height: '30vh', margin: '3vh', backgroundColor: 'wheat'}}>
                            {note.note}
                            <div style={{display: 'flex'}}>
                                <button note-id={note.id}> Edit </button>
                                <button note-id={note.id} onClick={(e) => deleteNote(e)}> Delete </button>
                            </div>
                        </div>
                    );
                    
                })
            }
            </div>
            );
    }
}
