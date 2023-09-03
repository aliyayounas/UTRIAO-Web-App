import React from 'react';
import { connect } from 'react-redux';

const AppAlert = ({ alerts }) => {
  return alerts.map(alert => {
    return (
      <div
        key={alert.id}
        className={` m-1 p-1 h6 text-center text-${
          alert.type === 'success' ? 'success' : 'info'
        } `}
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

export default connect(mapStateToProps, null)(AppAlert);
