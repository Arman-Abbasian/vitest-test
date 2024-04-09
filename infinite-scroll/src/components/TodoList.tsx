import { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import { User } from "../types/User";

export const todoUrl = "https://jsonplaceholder.typicode.com/todos";
export const userUrl = "https://jsonplaceholder.typicode.com/users";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const retrieveTodos = async () => {
      const todoResponse = await fetch(todoUrl);
      const userResponse = await fetch(userUrl);

      if (todoResponse.status === 500) {
        setHasError(true);
        return;
      }

      const todos: Todo[] = await todoResponse.json();
      const users: User[] = await userResponse.json();

      todos.forEach((todo) => {
        const user = users.find((user) => user.id === Number(todo.userId));
        todo.user = user;
      });

      setTodos(todos);
    };
    retrieveTodos();
  }, []);

  return (
    <div>
      {hasError ? <div>Opps come back later</div> : null}
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Todo</th>
            <th>Completed?</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} style={{ border: "2px solid red" }}>
              <td> {todo.user?.name}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? <span>&#10004;</span> : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
