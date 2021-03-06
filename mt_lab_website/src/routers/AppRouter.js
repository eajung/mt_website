// import dependencies
import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import Profile from '../components/Profile';
import Profiles from '../components/Profiles';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/profiles" component={Profiles}/>
                <Route path="/profile/:id" component={Profile}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;