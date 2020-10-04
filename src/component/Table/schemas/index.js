import dataSource from './dataSource';
import columnDefinition from './columnDefinition';
import emptyText from './emptyText';

export default {
  attachSchemas: (Component) => {
    Component.propTypes = {
      ...dataSource.schema,
      ...columnDefinition.schema,
      ...emptyText.schema
    };
    Component.defaultProps = {
      ...dataSource.defaultProps,
      ...columnDefinition.defaultProps,
      ...emptyText.defaultProps
    };

    return Component;
  }
}
