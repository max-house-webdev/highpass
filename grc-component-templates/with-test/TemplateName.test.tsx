import { cleanup, render, screen } from '@testing-library/react';
import { TemplateName } from './TemplateName';

afterEach(() => {
  cleanup();
});

describe('<TemplateName />', () => {
  it('should be in the document', () => {
    render(<TemplateName />);
    expect(screen.getByTestId('TemplateName')).toBeInTheDocument();
  });
});
