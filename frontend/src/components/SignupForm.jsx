// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUpForm = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [studentId, setStudentId] = useState('');
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('/api/signup', {
//         userId,
//         password,
//         studentId,
//         name,
//         surname,
//       });
//       setSuccess('Sign-up successful!');
//       resetForm();
//     } catch (error) {
//       setError('Sign-up failed. Please try again.');
//     }
//   };

//   const resetForm = () => {
//     setUserId('');
//     setPassword('');
//     setStudentId('');
//     setName('');
//     setSurname('');
//     setError('');
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="userId">User ID:</label>
//           <input
//             type="text"
//             id="userId"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="studentId">Student ID:</label>
//           <input
//             type="text"
//             id="studentId"
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="surname">Surname:</label>
//           <input
//             type="text"
//             id="surname"
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;


import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const SignUpForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`${API_URL}/users`);
    //     // Handle the response data if needed
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log('Error fetching data:', err);
    //   }
    // };

  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/signup`, {
        userId,
        password,
        studentId,
        name,
        surname,
      });
      
      setSuccess('Sign-up successful!');
      resetForm();
    } catch (error) {
      setError('Sign-up failed. Please try again.');
    }
  };

  const resetForm = () => {
    setUserId('');
    setPassword('');
    setStudentId('');
    setName('');
    setSurname('');
    setError('');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;