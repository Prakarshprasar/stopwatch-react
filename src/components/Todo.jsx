import React,{useState,useEffect} from 'react'
import axios from "axios"
const Todo = () => {
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [todos, setTodos] = useState([])

    useEffect(()=>{
      const getTodo=async()=>{
        let r=await axios.get(`http://localhost:3009/todos?_page=${page}&_limit=${limit}`)
        setTodos(r.data)
        console.log(todos)
        setTotalCount(Number(r.headers["x-total-count"]));
      }
      getTodo()
    },[page,limit])
    
    return (
      <div >
        <button
        
        disabled={page<=1}
        onClick={()=>
        setPage(page-1)}
        >{"<"}</button>
        <select onChange={(e)=>{setLimit(Number(e.target.value))}}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <button
        disabled={totalCount<page*limit}
        onClick={()=>
        setPage(page+1)}
        >{">"}</button>
        {todos.map((todo)=>(
          <div key={todo.id}>
            {todo.id} {":"} {todo.value}
          </div>
        ))}
  
      </div>
    );
}

export default Todo