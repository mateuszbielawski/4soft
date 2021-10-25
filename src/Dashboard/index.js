import React from 'react';

import { getRequest } from '../Request';
import SingleApp from '../SingleApp';
import AddApp from '../AddApp';

import { AppsContainer } from './Styled';

const Dashboard = () => {
    const [apps, setApps] = React.useState([]);

    React.useEffect(() => {
        getRequest('/list').then((data) => setApps(data.map((app) => ({...app, loaded: false }))));
    }, []);

    const handleAddApp = (app) => {
        setApps((apps) => [...apps, { ...app }]);
    }

    return <div>
        <AddApp handleAddApp={handleAddApp} />
        <AppsContainer>
            { apps.map((app) => 
                <SingleApp app={app} key={app.id} />
            )}
        </AppsContainer>

    </div>;
};

export default Dashboard;