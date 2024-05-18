import Dashboard from './components/Dashboard';
import './App.css';
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Dashboard/>
        </div>
    );
};

export default App;
