import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import React from 'react';
import './App.css';
import GetNotes from "./Pages/getnotes";
import CreateNote from "./Pages/createnote";
import editnote from "./Pages/editnote";
export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/createNote" component={CreateNote}/>
        <Route exact path="/getNotes" component={GetNotes} />
        <Route exact path="/editnote/:id" component={editnote} />
        <Redirect to="/getNotes"/>
      </Switch>
    </Router>
  )
}
  


