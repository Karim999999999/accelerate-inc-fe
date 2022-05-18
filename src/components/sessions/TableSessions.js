import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableSessions = ({ tableData }) => {
  console.log(tableData);

  return (
    <div className='table-and-controller'>
      <>
        <div className='table container container-main'>
          <ul>
            <li>
              <Link to='/manage/sessions/status/upcoming'>Upcoming</Link>
            </li>
            <li>
              <Link to='/manage/sessions/status/completed'>Completed</Link>
            </li>
            <li>
              <Link to='/manage/sessions/status/cancelled'>Cancelled</Link>
            </li>
          </ul>

          {tableData.data.map(({ _id, dateAndTime }) => (
            <div className='table-card table-card-sessions' key={_id}>
              <div className='table-item' id='title'>
                <h2>{dateAndTime}</h2>
              </div>

              <div className='table-item btn btn-view' id='viewbutton'>
                <Link className='button' to={`/manage/sessions/${_id}`}>
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default TableSessions;
