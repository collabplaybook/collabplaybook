const React = require("react");
const ReactDOM = require("react-dom");
const Route = require("react-router-dom").Route;
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Switch = require("react-router-dom").Switch;
const hashHistory = require("react-router-dom").hashHistory;

const Header = require("./components/Header");

const Home = require("./routes/Home");
const Contribute = require("./routes/Contribute");
const Share = require("./routes/Share");
const About = require("./routes/About");
const NotFound = require("./routes/NotFound");

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contribute" component={Contribute} />
        <Route path="/share" component={Share} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("main")
);
