import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const Slice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!==action.payload))
        },
        updateTodo:(state,action)=>{
            const { id, text } = action.payload;
            console.log(text);
            state.todos=state.todos.map((todo)=>(todo.id===id ? {...todo,text}:todo))
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=Slice.actions

export default Slice.reducer