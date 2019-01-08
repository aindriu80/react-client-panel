import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setDisableBalanceOnAdd,
  setAllowRegistration,
  setDisableBalanceOnEdit
} from "./../../actions/settingsActions";

class Settings extends Component {
  render() {
    const {
      setDisableBalanceOnAdd,
      setDisableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;
    return (
      <div className="row">
        <div className="col-md-6">
          <Link to="/" classname="btn btn-link">
            <i className="fas fa-arrow-circle-left" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
