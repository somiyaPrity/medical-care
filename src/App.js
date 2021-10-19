import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Doctors from './components/Home/doctors/Doctors';
import React, { createContext, useEffect, useState } from 'react';
import Appointment from './components/appointment/Appointment';
import Services from './components/Home/Services/Services/Services';
import Details from './components/Home/Services/ServiceDetails/Details';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HomeService from './components/HomeService/HomeService';

export const DataLoadContext = createContext();
function App() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/doctors.json')
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <AuthProvider>
      <DataLoadContext.Provider value={[doctors, services]}>
        <div className='App'>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <HomePage></HomePage>
              </Route>
              <Route path='/home'>
                <HomePage></HomePage>
              </Route>
              {/* <Route path='/services'>
              <Services></Services>
            </Route> */}
              <Route path='/service/:detailsId'>
                <Details></Details>
              </Route>
              <PrivateRoute path='/doctors'>
                <Doctors></Doctors>
              </PrivateRoute>
              <PrivateRoute path='/doctor/:doctorId'>
                <Appointment></Appointment>
              </PrivateRoute>
              <Route path='/about'>
                <AboutUs></AboutUs>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <PrivateRoute path='/homeService'>
                <HomeService></HomeService>
              </PrivateRoute>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </DataLoadContext.Provider>
    </AuthProvider>
  );
}

export default App;
