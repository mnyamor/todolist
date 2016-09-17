import React from 'react';
import { render } from  'react-dom';
import App from 'containers/app';
require('./theme/base.scss');

render(<App/>, document.getElementById('root'))
