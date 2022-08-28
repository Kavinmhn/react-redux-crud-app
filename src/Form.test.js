import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import { Form } from './components/Form/Form.tsx'

//describe("<Form />", () => {
 
  test('render title input', () => {
    const TitleInput = screen.getByRole('textbox', {name: /title \*/i})
    expect(TitleInput).toBeTruthy();
  });