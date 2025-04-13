import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';

import { TemplateName } from './TemplateName';

afterEach(() => {
  cleanup();
});

describe('<TemplateName />', () => {
  test('it should mount', () => {
    const { asFragment } = render(<TemplateName />);

    expect(asFragment()).toMatchSnapshot();
  });
});
