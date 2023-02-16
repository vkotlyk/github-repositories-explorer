import { connect } from "react-redux";
import { USERS_FETCH_FAILURE, USERS_FETCH_SUCCESS } from "../../actions";
import App from "./App";

const mapStateToProps = (state) => ({
  query: state.query,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  onUsersFetchSuccess: (users) =>
    dispatch({ type: USERS_FETCH_SUCCESS, value: users }),
  onUsersFetchFailure: () => dispatch({ type: USERS_FETCH_FAILURE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
