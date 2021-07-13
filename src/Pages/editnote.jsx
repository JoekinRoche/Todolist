import React from 'react';
import firebase from 'firebase/app';
import './firebase';
import {Redirect} from "react-router-dom";


export default class editnote extends React.Component {
    constructor(props){
        
        super(props)
        this.ref=React.createRef();
        this.id=this.props.match.params.id;
        this.db= firebase.firestore();
    this.state={
        note:"",
         
    }}
    componentDidMount() 
    {
        this.db.collection("notes").doc(this.id)
        .get()
        .then((note) => {
                this.ref.current.value=note.note          
            })
    }


    editnote=()=> {
        var notes=this.ref.current.value;
    
        this.db.collection("notes").doc(this.id).set({
            note: notes
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
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
            <h1> Edit your Note </h1>
            <textarea name="" id="note" cols="30" rows="10" onChange={(e)=> this.handleonchange(e)} ref={this.ref}></textarea>
            <button id = "saveButton " style={{width:"5vw",marginTop:"2vh"}} onClick={this.editnote}>Save</button>
            </div>
        );
    }
}