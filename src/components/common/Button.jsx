import React from 'react'
import PropTypes from 'prop-types';

export default function Button({text, url, addclassname}) {
  if (text) {
    return (
      <a href={url} className={`btn btn-lg ${addclassname?addclassname:''}`}>
          {text}
      </a>
    )
  }

}

Button.prototype = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  addclassname: PropTypes.string.isRequired
}
