import React from 'react';

import Row from './RowEssentials/Row';
import StaticRowBuilder from './StaticRowBuilder';
import Utils from '../../../../Utilities';

const { constants: { classNames } } = Utils;

class StaticRowBuilderWithLazyLoad extends StaticRowBuilder {
  constructor(props){
    super(props);
  }
}

export default StaticRowBuilderWithLazyLoad;