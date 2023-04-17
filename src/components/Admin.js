import React, { useState } from 'react';

export default function Admin() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', email: 'john@example.com', approved: false },
    { id: 2, name: 'Jane', email: 'jane@example.com', approved: true },
    { id: 3, name: 'Bob', email: 'bob@example.com', approved: false },
  ]);

  const handleApprove = (id) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, approved: true };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  const handleReject = (id) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, approved: false };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2 className='ss'>Admin Page</h2>
      <table className='table table-hover'>
        <thead className=' text-success fs-4'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Status</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-light'>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.approved ? 'Approved' : 'Not Approved'}</td>
              <td>
                {!user.approved && (
                  <button className='btn btn-success me-3' onClick={() => handleApprove(user.id)}>Approve</button>
                )}
                {user.approved && (
                  <button className='btn btn-danger me-3' onClick={() => handleReject(user.id)}>Reject</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}