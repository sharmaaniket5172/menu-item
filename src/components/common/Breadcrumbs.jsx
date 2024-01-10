// Breadcrumbs.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const paths = [{ label: 'Home', url: '/' }].concat(
    pathnames.slice(0, -1).map((_, index) => {
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = pathnames[index];
      return { label, url };
    })
  );

  const currentPage = {
    label: pathnames[pathnames.length - 1],
    url: location.pathname,
  };

  return (
    <div className="breadcrumbs">
      {paths.map((path, index) => (
        <span key={index} className='breadcrumbs-list'>
          {index !== 0 && <span className='breadcrumbs-hyfn'> </span>}
          <Link to={path.url}>{path.label}</Link>
        </span>
      ))}
      <span className='breadcrumbs-list'><span className='breadcrumbs-hyfn'> </span> {currentPage.label}</span>
    </div>
  );
};

export default Breadcrumbs;
