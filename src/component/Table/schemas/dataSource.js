import PropTypes from 'prop-types';

export default {
  schema: {
    datasource: PropTypes.arrayOf(PropTypes.shape({}))
  },
  defaultProps: {
    datasource: []
  }
};
