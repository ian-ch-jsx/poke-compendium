import { render } from '@testing-library/react';
import Controls from './Controls';
import { Select } from '@mui/material';

test('starts on default ascending order', () => {
  render(<Controls />);
  const controls = render(<Select className="select" labelId="order-label" value="asc" />);
  expect(controls).toMatchSnapshot();
});
