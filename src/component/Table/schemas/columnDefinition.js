import PropTypes from 'prop-types';

export default {
  schema: {
    columnDefinition: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIdentifier: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      fixed: PropTypes.string,
    })).isRequired
  },
  defaultProps: {
    fixed: '',
  }
};
