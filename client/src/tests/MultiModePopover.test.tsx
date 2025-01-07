import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiModePopover } from '../components/MultiModePopover';

describe('MultiModePopover', () => {
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

  it('renders search input and opens popover when isOpen is true', () => {
    render(<MultiModePopover {...mockProps} />);
    
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();

    const popover = screen.getByText('Option 1');
    expect(popover).toBeInTheDocument();
  });

  it('calls handleSearch when typing in search input', () => {
    render(<MultiModePopover {...mockProps} />);
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Option' } });
    expect(mockProps.handleSearch).toHaveBeenCalledTimes(1);
  });

  it('calls handleSelectAll when "Select All" is clicked', () => {
    render(<MultiModePopover {...mockProps} />);
    const selectAllButton = screen.getByTestId('select-all-button');
    fireEvent.click(selectAllButton);
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith(['1', '2']);
  });

  it('calls handleDeselectAll when "Deselect All" is clicked', () => {
    render(<MultiModePopover {...mockProps} />);
    const deselectAllButton = screen.getByTestId('deselect-all-button');
    fireEvent.click(deselectAllButton);
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith([]);
  });

  it('displays "No results found" when there are no options', () => {
    render(<MultiModePopover {...mockProps} filteredOptions={[]} />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
