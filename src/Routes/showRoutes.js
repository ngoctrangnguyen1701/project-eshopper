import { Route } from "react-router-dom";

const showRoutes = (routes = []) => {
    let result;
    if(routes.length > 0){
        result = routes.map((item, index) => (
            <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
            />
        ))
    };
    return result;
};

export default showRoutes;