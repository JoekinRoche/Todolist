import React from 'react';
import firebase from 'firebase/app';
import './firebase';




export default class CreateNote extends React.Component {
    constructor(){
        super()
        this.db= firebase.firestore();
    this.state={
        note:"",
         
    }

    }
    saveNotes=()=> {
        var notes=this.state.note;
        this.db.collection("notes").add({
            note:notes
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
        this.props.history.push("/getNotes");
        
    }
    handleonchange=(e)=>{
        this.setState({
            note:e.target.value,
        })
        console.log(e.target.value);
    }
    render () {
        return ( 
        <div style={{display: "flex", flexDirection:"column", alignItems: 'center',height:'100vh',width:'100vw'}}>
            <h1> Create a note </h1>
            <textarea name="" id="note" cols="30" rows="10" onChange={(e)=> this.handleonchange(e)}></textarea>
            <button id = "saveButton " style={{width:"5vw",marginTop:"2vh"}} onClick={this.saveNotes}>Save</button>
            </div>
        );
    }
}