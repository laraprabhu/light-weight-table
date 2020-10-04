import PropTypes from 'prop-types';

export default {
  schema: {
    dataSource: PropTypes.arrayOf(PropTypes.shape({}))
  },
  defaultProps: {
    dataSource: []
  }
};
