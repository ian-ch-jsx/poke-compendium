import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pokedex header', () => {
  render(<App />);
  const linkElement = screen.getByText(/pokedex/i);
  expect(linkElement).toBeInTheDocument();
});
