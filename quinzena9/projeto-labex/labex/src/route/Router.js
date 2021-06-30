import React, { useEffect, useState } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import { HomePage } from '../pages/HomePage.js';
import { ListTripsPage } from '../pages/ListTripsPage.js';
import { ApplicationFormPage } from '../pages/ApplicationFormPage.js';
import { LoginPage} from '../pages/LoginPage.js';
import { AdminHomePage } from '../pages/AdminHomePage.js';
import { TripDetailsPage } from '../pages/TripDetailsPage.js';
import { CreateTripPage } from '../pages/CreateTripPage.js';


export const Router = ()=> {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <HomePage/>
          </Route>

          <Route exact path={'/trips/list'}>
            <ListTripsPage/>
          </Route>

          <Route exact path={'/trips/application'}>
            <ApplicationFormPage/>
          </Route>

          <Route exact path={'/admin/trips/list'}>
            <AdminHomePage/>
          </Route>

          <Route exact path={'/login'}>
            <LoginPage/>
          </Route>

          <Route exact path={'/admin/trips/create'}>
            <CreateTripPage/>
          </Route>

          <Route exact path={'/admin/trips/:id'}>
            <TripDetailsPage/>
          </Route>
        </Switch>
      </BrowserRouter>
      
  );
}


