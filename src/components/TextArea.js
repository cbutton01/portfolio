import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {
  return(
    <div>
      <p>
        {props.text}
      </p>
    </div>
  );
}

TextArea.proptypes = {
  text: PropTypes.string
}

export default TextArea;
