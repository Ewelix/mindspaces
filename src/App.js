import Auth from "./components/Auth/Auth";
import Collections from "./components/Collections/Collections";
import NewCollection from "./components/NewCollection/NewCollection";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Auth/>
        </AuthProvider>
        {/*<Collections/>*/}
        {/*<NewCollection/>*/}
        {/*<small className="icons-credits">Icons made by*/}
        {/*    <a href="https://www.freepik.com" title="Freepik"> Freepik </a>*/}
        {/*    from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
        {/*</small>*/}
    </div>
  );
}

export default App;
