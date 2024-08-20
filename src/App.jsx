import { useState } from 'react'
import AddTodo from './comp/AddTodo'
import './App.css'
import Render from './comp/Render'
import { useDispatch } from 'react-redux'
import { updateTodo } from './assets/Slice/Slice'
function App() {
  const [EditId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const dispatch=useDispatch()
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };
  const handleUpdate=()=>{
    
    dispatch(updateTodo({
      id:EditId,
      text: editText,
    }))
    setEditId(null);
    setEditText('');
  }
  return (
    <>
    <h1 className=' text-3xl'>Add a Todo</h1>
      <AddTodo
        EditId={EditId}
        editText={editText}
        setEditId={setEditId}
        setEditText={setEditText}
        handleUpdate={handleUpdate}
      />
      <Render handleEdit={handleEdit}/>
    </>
  )
}

export default App
