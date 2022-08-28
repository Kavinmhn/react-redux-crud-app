import React from 'react';
import ReactDom from 'react-dom';
import { Form } from './Form.tsx'
 
it('Redered Form Component', () => {
  const div = document.createElement('div');
  ReactDom.render(<Form />, div);
  ReactDom.unmountComponentAtNode(div);
})