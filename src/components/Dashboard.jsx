import {useSelector} from 'react-redux';
import {selectDashboard} from '../store/dashboardSlice';
import Orders from './Orders';
import Trips from './Trips';
import Revenue from './Revenue';
import Expenses from './Expenses';
import Highlights from './Highlights';
import Activities from './Activities';
import Alerts from './Alerts';
import QuickActions from './QuickActions';

import search from "../assets/search.png"
import notification from "../assets/notification.png"
import more from "../assets/more.png"

const Dashboard = () => {
    const dashboard = useSelector(selectDashboard);

    return (
        <div className="container">
            <div className="dashboard">
                <div className="top-bar">
                    <h1>Dashboard</h1>
                    <div className="dash-actions">
                        <img src={search}/>
                        <dash-actions-hr/>
                        <img src={notification}/>
                        <dash-actions-hr/>
                        <img src={more}/>
                    </div>
                </div>
                <div className="overview">
                    <Orders data={dashboard.orders}/>
                    <Trips data={dashboard.trips}/>
                    <Revenue data={dashboard.revenue}/>
                    <Expenses data={dashboard.expenses}/>
                </div>
                <QuickActions/>
                <Alerts data={dashboard.alerts}/>
            </div>
            <div className="highlights-activities">
                <Highlights data={dashboard.highlights}/>
                <Activities data={dashboard.activities}/>
            </div>
        </div>
    );
};

export default Dashboard;
