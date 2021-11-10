import Dashboard from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter,
    Route
} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
        <HashRouter>
                <AuthProvider>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                </AuthProvider>
        </HashRouter>



    </div>
  );
}

export default App;
