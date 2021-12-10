import { render } from '@testing-library/react';
import PokeList from './PokeList';

test('starts stuff', () => {
  render(<PokeList pokemon={['abomasnow', 'absol']} />);
  const nextPage = render(<div className="container" />);
  expect(nextPage).toMatchSnapshot();
});
