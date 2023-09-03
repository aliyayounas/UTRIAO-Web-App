import React from 'react';
import { connect } from 'react-redux';

import './Alert.css';

const Alert = ({ alerts }) => {
  return alerts.map(alert => {
    return (
      <div
        key={alert.id}
        className={` m-1  text-center text-${alert.type} alertMsg p-2`}
      >
        {alert.message}
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    alerts: state.alerts
  };
};

export default connect(mapStateToProps, null)(Alert);
