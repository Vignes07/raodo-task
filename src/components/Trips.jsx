import PropTypes from "prop-types";
import StatusCard from "./StatusCard.jsx";

const Trips = ({ data }) => {
    return (
        <StatusCard cardTitle={"Trips"} statusLabel1={"Upcoming"} statusLabel2={"Ongoing"}
                    statusLabel3={"Completed"} statusDataLabel1={"upcoming"} statusDataLabel2={"ongoing"}
                    statusDataLabel3={"completed"} data={data}/>
    );
};

Trips.propTypes = {
    data: PropTypes.object.isRequired
}

export default Trips;
