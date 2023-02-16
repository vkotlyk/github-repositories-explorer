import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => ({
  query: state.query,
  users: state.users,
});

export default connect(mapStateToProps)(Users);
