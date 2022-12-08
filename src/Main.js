import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./redux/actions";
import App from "./App";

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;
