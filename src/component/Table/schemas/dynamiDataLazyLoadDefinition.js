import PropTypes from 'prop-types';

export default {
  schema: {
    dynamiDataLazyLoadDefinition: PropTypes.shape({
      rowDataUrl: PropTypes.string.isRequired,
    })
  },
  defaultProps: {
    dynamiDataLazyLoadDefinition: {
      rowDataUrl: ''
    },
  }
};
