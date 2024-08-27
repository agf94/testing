import { render } from '@testing-library/react';
import App from '../src/App';

import { describe, expect, it } from 'bun:test';

describe('App', () => {
  it('renders text', () => {
    const { getByText } = render(<App />);
    const app = getByText('Welcome to Our Bank');
    expect(app).toBeInTheDocument();
  });
})
