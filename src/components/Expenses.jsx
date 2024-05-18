import PropTypes from "prop-types";
import StatusCard from "./StatusCard.jsx";

const Expenses = ({ data }) => {
    return (
        <StatusCard cardTitle={"Expenses"} statusLabel1={"Frieght Charge"} statusLabel2={"Driver Charge"}
                    statusLabel3={"Other Charges"} statusDataLabel1={"freightCharge"} statusDataLabel2={"driverCharge"}
                    statusDataLabel3={"otherCharges"} data={data}/>
    );
};

Expenses.propTypes = {
    data: PropTypes.object.isRequired
}

export default Expenses;
