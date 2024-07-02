import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({text, url, addclassname}) {
  if (text) {
    return (
      <Link to={url} className={`btn btn-lg ${addclassname?addclassname:''}`}>{text}</Link>
    )
  }

}

Button.prototype = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  addclassname: PropTypes.string.isRequired
}
