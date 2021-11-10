import Dashboard from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter,
    Route
} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Collections from "./components/Collections/Collections";

function App() {
  return (
    <div className="App">
        <HashRouter>
                <AuthProvider>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                </AuthProvider>
        </HashRouter>


        {/*<small className="icons-credits">Icons made by*/}
        {/*    <a href="https://www.freepik.com" title="Freepik"> Freepik </a>*/}
        {/*    from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
        {/*</small>*/}
    </div>
  );
}

export default App;
