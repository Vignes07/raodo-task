import labelImportant from "../assets/label-important.png";
import localShipping from "../assets/local-shipping.png"
import trailer from "../assets/trailer.png"
import person from "../assets/person.png"

const QuickActions = () => {
    return (
        <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="actions">
                <div>
                    <img src={labelImportant}/>
                    <h4>Create Indents</h4>
                </div>
                <quick-actions-hr/>
                <div>
                    <img src={localShipping}/>
                    <h4>Add vehicle</h4>
                </div>
                <quick-actions-hr/>
                <div>
                    <img src={trailer}/>
                    <h4>Add Trailer</h4>
                </div>
                <quick-actions-hr/>
                <div>
                    <img src={person}/>
                    <h4>Add Driver</h4>
                </div>
                <quick-actions-hr/>
                <div>
                    <img src={localShipping}/>
                    <h4>Add Indents</h4>
                </div>
            </div>
        </div>
    );
};

export default QuickActions;