import React from 'react';
import ReactDOM from 'react-dom';
import Deck from '@MDXP/core';

import MDXPresentation from './presentation.mdx';
import DummyLayout from './dummyLayout.jsx';


ReactDOM.render(
  <Deck Layout={DummyLayout}>
    <MDXPresentation />
  </Deck>,
  document.getElementById('root')
);
