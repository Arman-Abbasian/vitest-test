import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/User";

function UserList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <p>loading...</p>;
  return (
    <div>
      {users.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}

export default UserList;
