// import React from 'react'
// import { useState } from 'react'
// import './Admin.css'
// import admin_login from '../assets/admin-login1.png'
// const Admin = () => {
   
//         // State for username and password
//         const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');
//         const [error, setError] = useState('');
      
//         // Hardcoded credentials (replace with your backend authentication logic)
//         const validUsername = 'admin';
//         const validPassword = '123';
      
//         const handleLogin = () => {
//           if (username === validUsername && password === validPassword) {
//             alert('Login successful!');
//             // Redirect or perform authenticated actions here
//             window.location.href = '/dashboard'; // Example redirection
//           } else {
//             setError('Invalid username or password');
//           }
//         };
//   return (
//     <div>
//         <main class="main-login">
//         <div class="left-login">
//             {/* <h1>Login<br />And join our team</h1> */}
//             <img src={admin_login} class="left-login-img"  />
//         </div>

//         <div class="right-login">
//         <h1> Admin Login<br />:Manage Information</h1>
//         <br />
//         <br />
//         <br />
//             <div class="card-login">
//                 <h1>Login</h1>
//                 <div class="textfield">
//                     <label for="user">User</label>
//                     <input type="text" name="user" placeholder="User" />
//                 </div>

//                 <div class="textfield">
//                     <label for="password">Password</label>
//                     <input type="password" name="password" placeholder="Password" />
//                 </div>

//                 <div class="redirect">Other users, please direct to  home page <br />
//                 <a href="./" className='redirect_link'>Home</a></div>

//                 <button class="btn-login">Login</button>
//             </div>
//         </div>
//     </main>
//     </div>
//   )
// }

// export default Admin




import React, { useState,useEffect } from 'react';
import './Admin.css';
import admin_login from '../assets/admin-login1.png';


const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [storedCredentials, setStoredCredentials] = useState({
    username: '',
    password: '',
  });

  // Load stored credentials from localStorage
  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem('credentials')) || {
      username: 'admin',
      password: 'hi',
    };
    setStoredCredentials(credentials);
  }, []);

  const handleLogin = () => {
    if (username === storedCredentials.username && password === storedCredentials.password) {
      alert('Login successful!');
      window.location.href = '/admin_home'; // Example redirection
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <main className="main-login">
        <div className="left-login">
          <img src={admin_login} className="left-login-img" alt="Admin Login" />
        </div>

        <div className="right-login">
          <h1>
            Admin Login<br />: Manage Information
          </h1>
          <br />
          <br />
          <br />
          <div className="card-login">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>} {/* Display error message */}
            <div className="textfield">
              <label htmlFor="user">User</label>
              <input
                type="text"
                name="user"
                placeholder="User"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="textfield">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="redirect">
              Other users, please direct to the home page <br />
              <a href="./" className="redirect_link">Home</a>
            </div>

            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;


// const Admin = () => {
//   // State for username and password
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   // State for valid credentials
//   const [validCredentials, setValidCredentials] = useState(defaultCredentials);

//   // Load credentials from local storage or use default
//   useEffect(() => {
//     const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
//     if (storedCredentials) {
//       setValidCredentials(storedCredentials);
//     }
//   }, []);

//   // Save updated credentials to local storage
//   const updateCredentials = (newUsername, newPassword) => {
//     const updatedCredentials = { username: newUsername, password: newPassword };
//     setValidCredentials(updatedCredentials);
//     localStorage.setItem('credentials', JSON.stringify(updatedCredentials));
//     alert('Credentials updated successfully!');
//   };
  
//   const handleLogin = () => {
//     if (username === validCredentials.username && password === validCredentials.password) {
//       alert('Login successful!');
//       // Redirect or perform authenticated actions here
//       window.location.href = '/admin_home'; // Example redirection
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <main className="main-login">
//         <div className="left-login">
//           <img src={admin_login} className="left-login-img" alt="Admin Login" />
//         </div>

//         <div className="right-login">
//           <h1>
//             Admin Login<br />: Manage Information
//           </h1>
//           <br />
//           <br />
//           <br />
//           <div className="card-login">
//             <h1>Login</h1>
//             {error && <p className="error">{error}</p>} {/* Display error message */}
//             <div className="textfield">
//               <label htmlFor="user">User</label>
//               <input
//                 type="text"
//                 name="user"
//                 placeholder="User"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             <div className="textfield">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="redirect">
//               Other users, please direct to the home page <br />
//               <a href="./" className="redirect_link">Home</a>
//             </div>

//             <button className="btn-login" onClick={handleLogin}>
//               Login
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Admin;
