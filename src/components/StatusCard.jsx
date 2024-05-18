import PropTypes from "prop-types";

const StatusCard = ({cardTitle, statusLabel1, statusLabel2, statusLabel3,statusDataLabel1, statusDataLabel2, statusDataLabel3 , data}) => {
    return (
        <div className="card">
            <div className="pieChart"></div>
            <h3>{cardTitle}</h3>
            <div className="total-status">
                <span className="status-label">Total</span>
                <span className="status-value">{data.total}</span>
            </div>
            <div className="status">
                <div className="upcoming-status">
                    <span>{statusLabel1}</span>
                    <span>{data[statusDataLabel1]}</span>
                </div>
                <div className="ongoing-status">
                    <span>{statusLabel2}</span>
                    <span>{data[statusDataLabel2]}</span>
                </div>
                <div className="completed-status">
                    <span>{statusLabel3}</span>
                    <span>{data[statusDataLabel3]}</span>
                </div>
            </div>
        </div>
    );
};

StatusCard.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    statusLabel1: PropTypes.string.isRequired,
    statusLabel2: PropTypes.string.isRequired,
    statusLabel3: PropTypes.string.isRequired,
    statusDataLabel1: PropTypes.string.isRequired,
    statusDataLabel2: PropTypes.string.isRequired,
    statusDataLabel3: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}

export default StatusCard;