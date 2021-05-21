import './App.css';
import { Button , FormControl , Input , InputLabel } from '@material-ui/core'
import React , { useState , useEffect } from 'react'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // console.log(input)
  // hen The app loads , we need to listen to the database and fetch new todos as they get added/removed

  useEffect(()=>{
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
       setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
     })
  },[]);
  
  const addTodo = (event) => {
    // This will fire off when we click the button
    event.preventDefault(); // will Stop the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput(''); // Clear up input
  }
  return (
    <div className="App">
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} type="text"  />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</Button>
        </FormControl>
        <ul>
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
    </div>
  );
}

export default App;
