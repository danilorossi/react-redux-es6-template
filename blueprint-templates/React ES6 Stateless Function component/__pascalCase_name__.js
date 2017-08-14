import React, { PropTypes } from 'react';

const {{name}} = ({prop1, prop2, prop3}) => {

  return (
    <div>

    </div>
  );

};

{{name}}.propTypes = {
  prop1: React.PropTypes.object.isRequired,
  prop2: React.PropTypes.array,
  prop3: React.PropTypes.func.isRequired
};

export default {{name}};
