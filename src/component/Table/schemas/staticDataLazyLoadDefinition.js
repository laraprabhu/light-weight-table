import PropTypes from 'prop-types';

export default {
  schema: {
    staticDataLazyLoadDefinition: PropTypes.shape({
      rowsPerLoad: PropTypes.number.isRequired,
    })
  },
  defaultProps: {
    staticDataLazyLoadDefinition: {
      rowsPerLoad: 0
    },
  }
};
