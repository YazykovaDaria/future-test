import React from 'react';
import { render, waitFor, screen, getByRole, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import SelectInput from 'src/components/searchSection/SelectInput';

describe('SelectInput', () => {
  const props = {
    inputValue: 'Value 1',
    title: 'Test Title',
    onChange: vi.fn(),
    values: ['Value 1', 'Value 2', 'Value 3'],
  };

  it('renders the title correctly', () => {
    const { getByText } = render(<SelectInput {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('calls the onChange function when an option is selected', async () => {
    render(<SelectInput {...props} />);

    userEvent.click(getByRole(screen.getByTestId('select'), 'button'));
    await waitFor(() => userEvent.click(screen.getByText(/Value 2/i)));
    expect(props.onChange).toHaveBeenCalled();
  });
});
