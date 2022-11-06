import React from 'react';

import './Error.scss';

export function Error({ errorMessage }) {
  return <div className='error'>{errorMessage}</div>;
}
