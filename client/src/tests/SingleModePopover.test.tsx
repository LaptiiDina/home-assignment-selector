import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SingleModePopover } from '../components/SingleModePopover';

describe('SingleModePopover', () => {
  const mockProps = {
    placeholder: 'Search...',
    searchTerm: '',
    handleSearch: vi.fn(),
    selectedValues: [],
    filteredOptions: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    setOpen: vi.fn(),
    isOpen: true,
    setSelectedValues: vi.fn(),
  };

  it('calls handleSearch when typing in search input', () => {
    render(<SingleModePopover {...mockProps} />);
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Option' } });
    expect(mockProps.handleSearch).toHaveBeenCalledTimes(1);
  });

  it('calls setSelectedValues when an option is clicked', () => {
    render(<SingleModePopover {...mockProps} />);
    fireEvent.click(screen.getByText('Option 1'));
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith(['1']);
    expect(mockProps.setOpen).toHaveBeenCalledWith(false);
  });

  it('displays no results when no filteredOptions', () => {
    render(<SingleModePopover {...mockProps} filteredOptions={[]} />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
