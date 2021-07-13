import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import React from 'react';
import './App.css';
import GetNotes from "./Pages/getnotes";
import CreateNote from "./Pages/createnote";
export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/createNote" component={CreateNote}/>
        <Route exact path="/getNotes" component={GetNotes} />
        <Redirect to="/getNotes"/>
      </Switch>
    </Router>
  )
}
  


