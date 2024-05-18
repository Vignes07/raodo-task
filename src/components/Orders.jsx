import PropTypes from "prop-types";
import StatusCard from "./StatusCard.jsx";

const Orders = ({data}) => {
    return (
        <StatusCard cardTitle={"Orders"} statusLabel1={"Upcoming"} statusLabel2={"Ongoing"}
                    statusLabel3={"Completed"} statusDataLabel1={"upcoming"} statusDataLabel2={"ongoing"}
                    statusDataLabel3={"completed"} data={data}/>
    );
};

Orders.propTypes = {
    data: PropTypes.object.isRequired
}

export default Orders;
