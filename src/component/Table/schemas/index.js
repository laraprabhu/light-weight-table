import datasource from './datasource';
import columnDefinition from './columnDefinition';
import emptyText from './emptyText';
import isHeaderFixed from './isHeaderFixed';
import staticDataLazyLoadDefinition from './staticDataLazyLoadDefinition';
import dynamicDataLazyLoadDefinition from './dynamiDataLazyLoadDefinition';

export default {
  attachSchemas: (Component) => {
    Component.propTypes = {
      ...datasource.schema,
      ...columnDefinition.schema,
      ...emptyText.schema,
      ...isHeaderFixed.schema,
      ...staticDataLazyLoadDefinition.schema,
      ...dynamicDataLazyLoadDefinition.schema
    };
    Component.defaultProps = {
      ...datasource.defaultProps,
      ...columnDefinition.defaultProps,
      ...emptyText.defaultProps,
      ...isHeaderFixed.defaultProps,
      ...staticDataLazyLoadDefinition.defaultProps,
      ...dynamicDataLazyLoadDefinition.defaultProps
    };

    return Component;
  }
}
