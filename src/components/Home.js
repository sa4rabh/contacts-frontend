import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import MainPage from '../MainPage';
import './home.css'

function Home() {
  const location = useLocation();
  const email = location.state.id;
  const username = email.substring(0, email.indexOf('@'));

  return (
    <div className="homepage">
      <h1>Hello, {username}</h1>
      <MainPage />
    </div>
  );
}

export default Home;
