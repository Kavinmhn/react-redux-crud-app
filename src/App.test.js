import React from 'react';
import ReactDom from 'react-dom';
import App from './App.tsx'
 
it('Redered Form Component', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
})