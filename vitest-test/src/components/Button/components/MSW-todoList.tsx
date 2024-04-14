import axios from "axios";
import { useEffect, useState } from "react";

type Todo={
        userId: number,
        id: number,
        title: string,
        completed: boolean
}

function MSWTodoList() {
    const [todos,setTodos]=useState<Todo[]>([]);
    useEffect(()=>{
        async function fetchTodos(){
            try {
                const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos");
                setTodos(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTodos();

    },[])
  return (
    <div>
       <p>{todos.length}</p>
    </div>
  )
}

export default MSWTodoList;