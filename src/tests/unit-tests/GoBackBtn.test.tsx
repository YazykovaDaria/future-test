import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { useNavigate } from 'react-router';

import GoBackButton from 'src/components/GoBackBtn';
import React from 'react';

vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
}));

describe('GoBackButton', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  it('renders the button correctly', () => {
    const { getByText } = render(<GoBackButton />);
    expect(getByText('Return back')).toBeInTheDocument();
  });

  it('calls useNavigate when the button is clicked', () => {
    const { getByRole } = render(<GoBackButton />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
