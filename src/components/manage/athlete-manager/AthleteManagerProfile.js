import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAthletesByIdPrivate } from '../../../api/athletes';
function AthleteManager() {
  const [athlete, setAthlete] = React.useState('');
  const { athleteId } = useParams();
  console.log(athleteId);

  React.useEffect(() => {
    const getData = async () => {
      const athlete = await getAthletesByIdPrivate(athleteId);
      setAthlete(athlete);
    };
    getData();
  }, []);
  return (
    <div className="athleteProfile">
      <h1>
        {athlete.firstName} {athlete.lastName}
      </h1>
      <p id="applicationStatus">{athlete.applicationStatus}</p>
      <Link className="button" to="#">
        EDIT DETAILS
      </Link>
      <Link className="button" to="#">
        CHANGE STATUS
      </Link>

      <div className="profile-section">
        <h3>ATHLETE PROFILE:</h3>
        <p>First Name: {athlete.firstName}</p>
        <p>Last Name: {athlete.lastName}</p>
        <p>Date of Birth: {athlete.dateOfBirth}</p>
        <p>Phone Number: {athlete.phone}</p>
        <p>Email: {athlete.email}</p>
        <p>City: {athlete.city} </p>
        <p>Gender: {athlete.gender} </p>
        <p>Height: {athlete.height} </p>
        <p>Weight: {athlete.weight} </p>
        <p>Marital Status: {athlete.maritalStatus} </p>
        <p>Employment Status: {athlete.employmentStatus} </p>
        <p>Year Started Cycling: {athlete.yearStartedCycling} </p>
        <p>
          Previous Sporting Experience: {athlete.previousSportingExperience}{' '}
        </p>
        <p>Injury: {athlete.injury} </p>
      </div>
    </div>
  );
}

export default AthleteManager;
