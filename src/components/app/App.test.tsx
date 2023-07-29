import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders App component', () => {
  render(<App />);

  const headingElement = screen.getByText(/Hello, world/i);
  expect(headingElement).toBeInTheDocument();
});
