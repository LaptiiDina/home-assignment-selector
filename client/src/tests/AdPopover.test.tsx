import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AdPopover } from '../components/AdPopover';

describe('AdPopover', () => {
  const mockProps = {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    placeholder: 'Search...',
    isMulti: false,
    setSelectedValues: vi.fn(),
    selectedValues: [],
  };

  it('renders button with default text', () => {
    render(<AdPopover {...mockProps} />);
    const button = screen.getByRole('button', { name: /select option/i });
    expect(button).toBeInTheDocument();
  });

  it('calls setSelectedValues when option is clicked in SingleModePopover', () => {
    render(<AdPopover {...mockProps} />);
    const button = screen.getByRole('button', { name: /select option/i });
    fireEvent.click(button);
    const option = screen.getByText('Option 1');
    fireEvent.click(option);
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith(['1']);
  });

  it('filters options based on search term', () => {
    render(<AdPopover {...mockProps} />);
    const button = screen.getByRole('button', { name: /select option/i });
    fireEvent.click(button);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Option 2' } });

    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('renders MultiModePopover when isMulti is true', () => {
    render(<AdPopover {...mockProps} isMulti={true} />);
    const button = screen.getByRole('button', { name: /select option/i });
    fireEvent.click(button);
    
    const checkbox = screen.getByLabelText('Option 1');
    expect(checkbox).toBeInTheDocument();
  });

  it('calls setSelectedValues correctly in MultiModePopover', () => {
    render(<AdPopover {...mockProps} isMulti={true} />);
    const button = screen.getByRole('button', { name: /select option/i });
    fireEvent.click(button);

    const checkbox = screen.getByLabelText('Option 1');
    fireEvent.click(checkbox);

    expect(mockProps.setSelectedValues).toHaveBeenCalledWith(['1']);
  });
});
