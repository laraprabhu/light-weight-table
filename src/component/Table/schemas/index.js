import datasource from './datasource';
import columnDefinition from './columnDefinition';
import emptyText from './emptyText';
import isHeaderFixed from './isHeaderFixed';
import staticDataLazyLoadDefinition from './staticDataLazyLoadDefinition';

export default {
  attachSchemas: (Component) => {
    Component.propTypes = {
      ...datasource.schema,
      ...columnDefinition.schema,
      ...emptyText.schema,
      ...isHeaderFixed.schema,
      ...staticDataLazyLoadDefinition.schema
    };
    Component.defaultProps = {
      ...datasource.defaultProps,
      ...columnDefinition.defaultProps,
      ...emptyText.defaultProps,
      ...isHeaderFixed.defaultProps,
      ...staticDataLazyLoadDefinition.defaultProps
    };

    return Component;
  }
}
