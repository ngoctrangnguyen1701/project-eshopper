import routes from './Routes/routes';
import showRoutes from './Routes/showRoutes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                {showRoutes(routes)}
            </Switch>
        </Router>         
    );
};

export default App;