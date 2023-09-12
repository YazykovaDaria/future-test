import React from 'react';
import { render } from '@testing-library/react';

import Skeleton from 'src/components/Skeleton';

describe('Skeleton', () => {
  it('renders a circular progress indicator', () => {
    const { getByRole } = render(<Skeleton />);
    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });

  it('sets body overflow to hidden on mount and resets it on unmount', () => {
    const { unmount } = render(<Skeleton />);
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });
});
