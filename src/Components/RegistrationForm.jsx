import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './RegistrationForm.css';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    fathername: '',
    mothername: '',
    qualification: '',
    gender: '',
    phone: '',
    address1: '',
    city: '',
    state: '',
    country: '',
    landmark: '',
    pincode: '',
    resume: null,
    photo: null,
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [data, setData] = useState([]);

  const qualifications = ['High School', 'Undergraduate', 'Graduate', 'Postgraduate', 'PhD'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const ssubmitForm = () => {
    const allData = [formData.fathername, formData.firstname, formData.lastname];
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(getData => setData(getData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {data.map((ele) => {
          return <p key={ele.id}>{ele.title}</p>;
        })}
        <h2>Student Registration Form</h2>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
        <label>
          Father Name:
          <input
            type="text"
            name="fathername"
            value={formData.fathername}
            onChange={handleChange}
          />
        </label>
        <label>
          Mother Name:
          <input
            type="text"
            name="mothername"
            value={formData.mothername}
            onChange={handleChange}
          />
        </label>
        <label>
          Qualification:
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option value="">Select Qualification</option>
            {qualifications.map((qualification) => (
              <option key={qualification} value={qualification}>
                {qualification}
              </option>
            ))}
          </select>
        </label>
        <label>
          Gender:
        </label>
        <div className="gender-container">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        <label>
          Phone:
          <div className="phone-container">
            <span className="phone-prefix">+91</span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => {
                if (!validatePhoneNumber(formData.phone)) {
                  alert('Please enter a valid phone number');
                }
              }}
            />
          </div>
        </label>
        <label>
          Address 1:
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </label>
        <label>
          Landmark:
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
        </label>
        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </label>
        <label>
          Resume:
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
        </label>
        <label>
          Upload Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Re-type Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={ssubmitForm}>Register</button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
