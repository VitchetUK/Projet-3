import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
import AllBands from "./components/Band/AllBands";
import OneBand from "./components/Band/OneBand";
import AllMusicians from "./components/Musician/AllMusicians";
import OneMusician from "./components/Musician/OneMusician";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allBandsRequest" element={<AllBands />}>
          <Route path=":id" element={<OneBand />} />
        </Route>
        <Route path="/allMusiciansRequest" element={<AllMusicians />}>
          <Route path=":id" element={<OneMusician />} />
        </Route>
        {/*<Route index element={<ListCharacters />} /> */}
        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn !!*/}
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
