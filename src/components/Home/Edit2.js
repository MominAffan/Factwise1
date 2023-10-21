import React, { useState } from 'react';


function Edit2({user}) {
  const [users, setUsers] = useState(user);
  const [editingId, setEditingId] = useState(null);
  const [newFirstName, setNewFirstName] = useState('');

  const handleEditClick = (id) => {
    // Set the user ID to enable editing for that specific user
    setEditingId(id);

    // Pre-fill the input with the current first name
    const user = users.find((user) => user.id === id);
    setNewFirstName(user.first);
  };

  const handleSaveClick = (id) => {
    // Update the user's first name with the new value
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, first: newFirstName };
      }
      return user;
    });

    setUsers(updatedUsers);

    // Reset editing state
    setEditingId(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                  />
                ) : (
                  user.first
                )}
              </td>
              <td>{user.last}</td>
              <td>
                {user.id === editingId ? (
                  <button onClick={() => handleSaveClick(user.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(user.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Edit2;
