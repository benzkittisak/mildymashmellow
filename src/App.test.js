import { render, screen } from '@testing-library/react';
import Home from './Pages/Home/home.component';

test('poom', () => {
  render(<Home />);
  const linkElement = screen.getByText(/poom/i);
  expect(linkElement).toBeInTheDocument();
});
