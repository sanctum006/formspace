import React from "react";
import { connect } from "react-redux";
import { processQueryParams } from "./reduxSlices/routerSlice";
import Routes from "./routes/Routes";

class App extends React.Component {
  componentDidMount() {
    this.props?.processQueryParams();
  }

  render() {
    return <>{Routes()}</>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processQueryParams: () => dispatch(processQueryParams()),
  };
};

export default connect(null, mapDispatchToProps)(App);
