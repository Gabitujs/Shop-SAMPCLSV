import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import AddAccounts from './components/AddAccounts';
import Auctions from './components/Auctions';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Create' component={AddAccounts}/>
        <Route path='/Auctions' component={Auctions}/>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
    </Layout>
);