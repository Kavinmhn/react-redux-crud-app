import React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { Form } from './Form.tsx'

describe('Form Component Tests', ()=>{
  let container:HTMLDivElement;

  beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDom.render(<Form />, container)
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Renters all Input fields', () => {
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);
    expect(inputs[0].name).toBe('title');
    expect(inputs[1].name).toBe('body');
  })
})
 
