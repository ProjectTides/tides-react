import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders project tides text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/welcome to project tides/i);
  expect(linkElement).toBeInTheDocument();
});
