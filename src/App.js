
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// MY COMPONENTS
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from "./NotFound"


function App() {

  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <Switch>

            {/* 1).HOME PAGE (GET ALL THE BLOGS) */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* 2).CREATE NEW BLOG  */}
            <Route path="/create">
              <Create />
            </Route>

            {/* 3).SINGLE BLOG DETAILS */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>


            {/* 4).NOT FOUND ROUTE */}
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
