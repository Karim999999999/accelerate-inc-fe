/* eslint-disable no-unreachable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewAthlete } from '../../api/athletes';

const NewAthleteForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    applicationStatus: 'unreviewed',
  });

  const handleChange = (event) => {
    console.log(handleChange);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    const getData = async () => {
      try {
        await createNewAthlete(form);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }
  const fiftyYearsAgo = new Date().getFullYear() - 50;
  function generateYearsBetween(
    startYear = parseFloat(fiftyYearsAgo),
    endYear
  ) {
    const endDate = endYear || new Date().getFullYear();
    const years = [];
    for (var i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  const yearsArray = generateYearsBetween();
  return (
    <div>
      <h1>CREATE NEW FORM</h1>

      <form onSubmit={handleSubmit}>
        <div className="formfield">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            onChange={handleChange}
            placeholder="John"
          />
        </div>
        <div className="formfield">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="lastName"
            onChange={handleChange}
            placeholder="Smith"
          />
        </div>
        <div className="formfield">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input name="dateOfBirth" type="date" onChange={handleChange} />
        </div>
        <div className="formfield">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="number"
            onChange={handleChange}
            placeholder="0097250XXXXXXX"
          />
        </div>
        <div className="formfield">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="user@usermail.com"
          />
        </div>
        <div className="formfield">
          <label htmlFor="city">City</label>
          <select name="city" onChange={handleChange}>
            <option></option>
            <option>New York</option>
            <option>Georgia</option>
            <option>London</option>
          </select>
        </div>
        <div className="formfield">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select name="maritalStatus" onChange={handleChange}>
            <option></option>
            <option>Married</option>
            <option>Single</option>
          </select>
        </div>
        <div className="formfield">
          <label htmlFor="employmentStatus">Employment Status</label>
          <select name="employmentStatus" onChange={handleChange}>
            <option></option>
            <option>Unemployed</option>
            <option>Part Time Employment</option>
            <option>Full Time Employment</option>
            <option>Gig Economy</option>
          </select>
        </div>
        <div className="formfield">
          <label htmlFor="gender">Gender</label>
          <select name="gender" onChange={handleChange}>
            <option></option>
            <option>Male</option>
          </select>
        </div>
        <div className="formfield">
          <label htmlFor="height">Height (cm)</label>
          <input
            name="height"
            type="number"
            onChange={handleChange}
            placeholder="170"
          />
        </div>
        <div className="formfield">
          <label htmlFor="weight">Weight (kgs)</label>
          <input
            name="weight"
            type="number"
            onChange={handleChange}
            placeholder="80"
          />
        </div>
        <div className="formfield">
          <label htmlFor="yearStartedCycling">title</label>
          <select name="yearStartedCycling" onChange={handleChange}>
            {yearsArray.map((year) => (
              <option key={year}> {year} </option>
            ))}
          </select>
        </div>
        <div className="formfield">
          <label htmlFor="previousSportingExperience">
            Previous Sporting Expirience
          </label>
          <textarea
            name="previousSportingExperience"
            cols="40"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="formfield">
          <label htmlFor="injury">Injury Details</label>
          <textarea
            name="injury"
            cols="40"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="formfield">
          <label htmlFor="biography">Short Biography (500 words max)</label>
          <textarea
            name="biography"
            cols="40"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="categories">CATEGORIES</label>
        </div>
        <div>
          <button type="submit" className="action1" onSubmit={handleSubmit}>
            SUBMIT ATHLETE APPLICATION
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAthleteForm;
