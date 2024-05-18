import PropTypes from "prop-types";
import StatusCard from "./StatusCard.jsx";

const Revenue = ({ data }) => {
    return (
        <StatusCard cardTitle={"Revenue"} statusLabel1={"Upcoming"} statusLabel2={"Ongoing"}
                    statusLabel3={"Completed"} statusDataLabel1={"upcoming"} statusDataLabel2={"ongoing"}
                    statusDataLabel3={"completed"} data={data}/>
    );
};

Revenue.propTypes = {
    data: PropTypes.object.isRequired
}

export default Revenue;
