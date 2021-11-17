import Dashboard from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter,
    Route
} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import NewCollection from "./components/NewCollection/NewCollection";
import Set from "./components/Set/Set";
import AddFlashcard from "./components/AddFlashcard/AddFlashcard";
import Learning from "./components/Learning/Learning";

function App() {
  return (
    <div className="App">
        <HashRouter>
                <AuthProvider>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/account" component={Account}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route path="/new-collection" component={NewCollection}/>
                    <Route path="/set/:id" component={Set}/>
                    <Route path="/add-flashcard/:id" component={AddFlashcard}/>
                    <Route path="/learning/:id" component={Learning}/>
                    {/*<Route path="/learning/:id" component={Learning}/>*/}
                </AuthProvider>
        </HashRouter>
    </div>
  );
}

export default App;
