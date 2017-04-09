/**
 * Created by chia-yenhung on 4/9/17.
 */
import { connect } from "react-redux";
import Spinner from "./spinner";

const mapStateToProps = (state) => {
  return {
    show: state.spinner
  };
};

export default connect(
  mapStateToProps
)(Spinner);
