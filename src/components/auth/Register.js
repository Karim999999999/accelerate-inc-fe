// import React from 'react';
// import { registerUser } from '../../api/auth';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const navigate = useNavigate();

//   const [user, setUser] = React.useState({
//     username: '',
//     email: '',
//     password: '',
//     passwordConfirmation: '',
//   });

//   function handleChange(event) {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const getData = async () => {
//       try {
//         await registerUser(user);
//         navigate('/login');
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getData();
//   }

//   return (
//     <>
//       <div className='register-page'>
//         <h1>REGISTER:</h1>
//         <form className='register-form' onSubmit={handleSubmit}>
//           <div className='field'>
//             <label className='label'>Username</label>
//             <div className='control'>
//               <input
//                 className='input'
//                 placeholder='Username'
//                 name='username'
//                 onChange={handleChange}
//                 value={user.username}
//               />
//             </div>
//           </div>
//           <label htmlFor='email'>Email</label>
//           <input
//             type='email'
//             name='email'
//             placeholder='email'
//             onChange={handleChange}
//             value={user.email}
//           />
//           <label htmlFor='password'>Password</label>
//           <input
//             type='password'
//             name='password'
//             placeholder='password'
//             onChange={handleChange}
//             value={user.value}
//           />
//           <input
//             type='password'
//             name='password'
//             placeholder='password confirmation'
//             onChange={handleChange}
//             value={user.value}
//           />
//           <button type='submit'> Register </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Register;
