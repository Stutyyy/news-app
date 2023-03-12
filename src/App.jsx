import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            element={
              <News
                apiKey={apiKey}
                pageSize="20"
                key="general"
                topics="general"
              />
            }
            path="/"
          ></Route>
          <Route
            exact
            element={
              <News
                apiKey={apiKey}
                pageSize="20"
                key="business"
                topic="business"
              />
            }
            path="/Business"
          ></Route>
          <Route
            exact
            element={
              <News
                apiKey={apiKey}
                pageSize="20"
                key="entertainment"
                topic="entertainment"
              />
            }
            path="/Entertainment"
          ></Route>
          <Route
            exact
            element={
              <News apiKey={apiKey} pageSize="20" key="crypto" topic="crypto" />
            }
            path="/Crypto"
          ></Route>
          <Route
            exact
            element={
              <News apiKey={apiKey} pageSize="20" key="health" topic="health" />
            }
            path="/Health"
          ></Route>
          <Route
            exact
            element={
              <News
                apiKey={apiKey}
                pageSize="20"
                key="science"
                topic="science"
              />
            }
            path="/Science"
          ></Route>
          <Route
            exact
            element={
              <News apiKey={apiKey} pageSize="20" key="sports" topic="sports" />
            }
            path="/Sports"
          ></Route>
          <Route
            exact
            element={
              <News
                apiKey={apiKey}
                pageSize="20"
                key="technology"
                topic="technology"
              />
            }
            path="/Technology"
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
