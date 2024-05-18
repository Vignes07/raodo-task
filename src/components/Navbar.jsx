import logo from "../assets/logo.png"
import dashboard from "../assets/dashboard.png"
import addToQueue from "../assets/add-to-queue.png"
import labelImportant from "../assets/label-important.png"
import assignment from "../assets/assignment.png"
import pendingShipment from "../assets/pending-shipment.png"
import localShipping from "../assets/local-shipping.png"
import parcelTracking from "../assets/parcel-tracking.png"
import businessCenter from "../assets/business-center.png"
import wallet from "../assets/wallet.png"
import feed from "../assets/feed.png"
import settings from "../assets/settings.png"


const Navbar = () => {
    return (
        <div className="navBar">
            <img id="logo" src={logo}/>
            <img className="navItems" src={dashboard}/>
            <img className="navItems" src={addToQueue}/>
            <img className="navItems" src={labelImportant}/>
            <img className="navItems" src={assignment}/>
            <img className="navItems" src={pendingShipment}/>
            <img className="navItems" src={localShipping}/>
            <img className="navItems" src={parcelTracking}/>
            <img className="navItems" src={businessCenter}/>
            <img className="navItems" src={wallet}/>
            <img className="navItems" src={feed}/>
            <img className="navItems" src={settings}/>
        </div>
    );
};

export default Navbar;