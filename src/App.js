import Auth from "./components/Auth/Auth";
import Collections from "./components/Collections/Collections";
import NewCollection from "./components/NewCollection/NewCollection";
// import Auth from "./components/Auth/Auth";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Auth/>
        </AuthProvider>
        {/*<Collections/>*/}
        {/*<NewCollection/>*/}
    </div>
  );
}

export default App;
