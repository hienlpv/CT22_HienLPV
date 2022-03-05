import React, { useState, useEffect } from 'react';

import Modal from '../../components/Modal';
import userData from '../../data/userList.json';
import './dashboard.css';

function Dashboard() {
  // State
  const [userList, setUserList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  // Effect
  useEffect(() => {
    setUserList(userData);
  }, []);

  return (
    <div className='container-fluid'>
      <h1>Admin Dashboard</h1>
      <table id='tbUserList' className='table'>
        <thead>
          <tr>
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>UserID</th>
            <th rowSpan={2}>Full Name</th>
            <th rowSpan={2}>Email</th>
            <th rowSpan={2}>Birth Date</th>
            <th colSpan={2}>Activity Date</th>
            <th rowSpan={2}>Admin</th>
            <th rowSpan={2}>Status</th>
            <th
              rowSpan={2}
              colSpan={3}
              className='add'
              onClick={() => setModalShow(true)}
            >
              ADD&nbsp;<i className='fa fa-plus' aria-hidden='true'></i>
            </th>
          </tr>
          <tr>
            <th>First login date</th>
            <th>Last login date</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.usrID}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.birthDate}</td>
              <td>{user.firstLoginDate}</td>
              <td>{user.lastLoginDate}</td>
              <td>
                {user.isAdmin ? (
                  <input type='checkbox' onChange={() => {}} checked />
                ) : (
                  <input type='checkbox' />
                )}
              </td>
              <td>
                {user.status ? (
                  <input type='radio' onChange={() => {}} checked />
                ) : (
                  <input type='radio' />
                )}
                <span>{user.status ? 'Active' : 'Inactive'}</span>
              </td>
              <td>
                <i
                  className='fa fa-eye view'
                  aria-hidden='true'
                  id={user.usrID}
                ></i>
              </td>
              <td>
                <i
                  className='fa fa-pencil edit'
                  aria-hidden='true'
                  id={user.usrID}
                ></i>
              </td>
              <td>
                <i
                  className='fa fa-trash delete'
                  aria-hidden='true'
                  id={user.usrID}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan='8'>Tổng số đang active</td>
            <td colspan='4'>{userList.filter((user) => user.status).length}</td>
          </tr>
        </tfoot>
      </table>
      <div className='modalContainer'>
        <Modal show={modalShow} onHide={setModalShow} />
      </div>
    </div>
  );
}

export default Dashboard;
