import PropTypes from "prop-types";

function Activities({data}) {
    return (
        <div className="activities">
            <div className="completed-activities">
                <div className="view-all-activities">
                    <h3>Completed Activities ({data.completed.length}) </h3>
                    <span>View All</span>
                </div>
                {/*code for mapping from data*/}
                {/*<div className="completed-activities-list">*/}
                {/*    {data.completed.map((activity, i) => {*/}
                {/*        return <span key={i}>{activity}</span>*/}
                {/*    })}*/}
                {/*</div>*/}
                <div className="completed-activities-list">
                    <span style={{color: "#676666"}}><span style={{color: "#1A3875"}}>Gurpreet Singh</span> (Dispatch team) has created <span
                        style={{color: "black"}}>Load No. I-AAA-1325</span></span>
                    <span style={{color: "#676666"}}><span
                        style={{color: "#1A3875"}}>Aman</span> (Driver) Picked Up goods at Location_Name for <span
                        style={{color: "black"}}>Load No. I-AAA-1325</span></span>
                    <span style={{color: "#676666"}}><span style={{color: "#1A3875"}}>Gurpreet Singh</span> (Dispatch team) has created <span
                        style={{color: "black"}}>Load No. I-AAA-1325</span></span>
                    <span style={{color: "#676666"}}><span style={{color: "#1A3875"}}>Gurpreet Singh</span> (Dispatch team) has created <span
                        style={{color: "black"}}>Load No. I-AAA-1325</span></span>
                    <span style={{color: "#676666"}}><span>Load No. I-I-AAA-1325</span> will start added by <span
                        style={{color: "#1A3875"}}>Gurpreet Singh</span></span>
                </div>
            </div>
            <div className="scheduled-activities">
                <div className="view-all-activities">
                    <h3>Scheduled Activities ({data.scheduled.length}) </h3>
                    <span>View All</span>
                </div>
                {/*code for mapping from data*/}
                {/*<div>*/}
                {/*    {data.scheduled.map((activity, i) => {*/}
                {/*        return <span key={i}>{activity}</span>*/}
                {/*    })}*/}
                {/*</div>*/}
                <div className="scheduled-activities-list">
                    <span style={{color: "#676666"}}><span style={{color: "black"}}>Load No. I-I-AAA-1325</span> will be delivered <span
                        style={{color: "#1A3875"}}>by Aman (Driver)</span></span>
                    <span style={{color: "#676666"}}><span
                        style={{color: "#1A3875"}}>Aman</span> (Driver) will Picked Up goods at Location_Name for <span
                        style={{color: "black"}}>Load No. I-AAA-1325</span></span>
                    <span style={{color: "#676666"}}><span style={{color: "black"}}>Load No. I-I-AAA-1325</span> will start added by <span
                        style={{color: "#1A3875"}}>Gurpreet Singh</span></span>
                    <span style={{color: "#676666"}}><span style={{color: "black"}}>Load No. I-I-AAA-1325</span> will start added by <span
                        style={{color: "#1A3875"}}>Gurpreet Singh</span></span>
                </div>
            </div>
        </div>
    );
}

Activities.propTypes = {
    data: PropTypes.object.isRequired
}

export default Activities;