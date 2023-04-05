import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

export const Admin = () => {
  const [ux, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/auth/users");
      setUsers(res.data.filter((user) => user.rank !== 1));
    };
    fetchUsers();
  }, [ux]);

  const handleDelete = async (id) => {
    try {  
      await axios.delete(`/auth/users/${id}`);
      setUsers(ux.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
      console.log("clicked");
      console.log(id);
    }
  };
 
  return (
    <>
      <h2 className="admin-heading">Registered Users</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {ux && (ux.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="admin-delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </>
  );
}