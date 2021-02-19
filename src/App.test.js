import { render, screen } from '@testing-library/react';
import App from './App';

test('the app renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/this won't work/i);
  expect(linkElement).toBeInTheDocument();
});
