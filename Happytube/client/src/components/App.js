import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} /> {/*아무나 들어올 수 있음*/}
          <Route exact path="/login" component={Auth(LoginPage, false)} /> {/*로그인 한 사람은 못들어옴*/}
          <Route exact path="/register" component={Auth(RegisterPage, false)} /> {/*로그인 한 사람은 못들어옴*/}
            <Route exact path="/video/upload" component={Auth(VideoUploadPage, true)} /> {/*로그인 안한 사람은 못들어옴*/}
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
