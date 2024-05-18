import PropTypes from "prop-types";
import rightArrow from "../assets/right-arrow.png";
import person from "../assets/person.png";
import AlertCard from "./AlertCard.jsx";

const Alerts = ({ data }) => {
    return (
        <div className="alerts">
            <div>
                <h2>High Priority Alerts ({data.length}) </h2>
                <div id="view-all">
                    <span>View All</span>
                    <img src={rightArrow}/>
                </div>
            </div>
            <div>
                {data.map((data) => (
                    <AlertCard data={data} img={person}/>
                ))}
            </div>
        </div>
    );
};

Alerts.propTypes = {
    data: PropTypes.object.isRequired
}

export default Alerts;
