import datasource from './datasource';
import columnDefinition from './columnDefinition';
import emptyText from './emptyText';

export default {
  attachSchemas: (Component) => {
    Component.propTypes = {
      ...datasource.schema,
      ...columnDefinition.schema,
      ...emptyText.schema
    };
    Component.defaultProps = {
      ...datasource.defaultProps,
      ...columnDefinition.defaultProps,
      ...emptyText.defaultProps
    };

    return Component;
  }
}
