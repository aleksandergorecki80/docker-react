import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders see you soon text', () => {
  render(<App />);
  const linkElement = screen.getByText(/see you soon/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button with text "Click me"', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
