import { render } from '@testing-library/react';
import Controls from './Controls';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

test('renders learn react link', () => {
  render(<Controls />);
  const controls = render(<Select className="select" labelId="order-label" value="asc" />);
  expect(controls).toMatchSnapshot();
});
