import PropTypes from "prop-types";

const AlertCard = ({data, img}) => {
    return (
        <div className="alert-card">
            <div className="truck-detail">
                <div>
                    <img src={img}/>
                    <div>
                        <h4>{data.type}</h4>
                        <h6>Load No : {data.loadNo}, Bill To: {data.billTo}</h6>
                    </div>
                </div>
                <span>{data.date}</span>
            </div>
            <div className="description">
                {data.message}
            </div>
            <div className="ignore-resolve-btns">
                <button id="ignore">Ignore</button>
                <button id="resolve">Resolve</button>
            </div>
        </div>
    );
};

AlertCard.propTypes = {
    data: PropTypes.object.isRequired,
    img: PropTypes.string.isRequired
}

export default AlertCard;