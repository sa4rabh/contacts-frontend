// import React from 'react';
// import './App.css';
// import MainPage from './MainPage';
// import Form from './Form/Form';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, auth = false }) => {
//   const isLoggedIn = localStorage.getItem('user:token') !== null || false;

//   if (!isLoggedIn && auth) {
//     return <Navigate to={'/users/sign_in'} />;
//   } else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
//     console.log('object :>> ');
//     return <Navigate to={'/'} />;
//   }

//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProtectedRoute auth={true} />}>
//           <Route index element={<MainPage />} />
//         </Route>
//         <Route path="/users/sign_in" element={<ProtectedRoute />}>
//           <Route index element={<Form isSignInPage={true} />} />
//         </Route>
//         <Route path="/users/sign_up" element={<ProtectedRoute />}>
//           <Route index element={<Form isSignInPage={false} />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
