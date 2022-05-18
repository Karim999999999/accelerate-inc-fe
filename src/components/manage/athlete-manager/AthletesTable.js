import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAthletesByStatusPrivate } from '../../../api/athletes.js';
function AthleteTable() {
  const [tableData, setTableData] = React.useState([]);
  const { status } = useParams();
  console.log(status);
  React.useEffect(() => {
    const getData = async () => {
      const athletes = await getAthletesByStatusPrivate(status);
      setTableData(athletes);
    };

    getData();
  }, [status]);

  console.log('ATHLETES ARE', tableData);

  const pageLocation = location.pathname;
  console.log(location.pathname);
  function handleForm(athleteId) {
    if (pageLocation === '/manage/athletes/stat/approved') {
      return `/manage/athlete/${athleteId}`;
    }
    if (pageLocation === '/manage/athletes/stat/unreviewed') {
      return `/manage/athlete/${athleteId}`;
    }
    if (pageLocation === '/manage/athletes/stat/reserve') {
      return `/manage/athlete/${athleteId}`;
    }
    if (pageLocation === '/manage/athletes/stat/rejected') {
      return `/manage/athlete/${athleteId}`;
    }
  }

  return (
    <div className="table-and-controller">
      <h1> Table title </h1>
      <div className="table-controller">
        <Link className="button" to="/manage/athletes/stat/approved">
          APPROVED
        </Link>
        <Link className="button" to="/manage/athletes/stat/unreviewed">
          NEW APPLICATION
        </Link>
        <Link className="button" to="/manage/athletes/stat/reserve">
          RESERVE
        </Link>
        <Link className="button" to="/manage/athletes/stat/rejected">
          REJECTED
        </Link>
      </div>

      {!tableData ? (
        <h1>...Loading</h1>
      ) : (
        <div className="table">
          {tableData.map((athlete) => (
            <div className="table-card" key={athlete.firstName}>
              <div className="table-item" id="title">
                <h1>{athlete.firstName}</h1>
              </div>
              <div className="table-item" id="date"></div>
              <p>{athlete.applicationStatus}</p>
              <div className="table-item" id="viewbutton">
                <Link className="button" to={handleForm(athlete._id)}>
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AthleteTable;
