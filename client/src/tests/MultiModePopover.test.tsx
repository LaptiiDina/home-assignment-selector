import React from 'react';
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

  it('renders button and opens popover on click', () => {
    render(<MultiModePopover handleChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } isMulti={false} {...mockProps} />);
    const button = screen.getByRole('button', { name: /select options/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockProps.setOpen).toHaveBeenCalledTimes(1);
  });

  it('calls handleSearch when typing in search input', () => {
    render(<MultiModePopover handleChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } isMulti={false} {...mockProps} />);
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Option' } });
    expect(mockProps.handleSearch).toHaveBeenCalledTimes(1);
  });

  it('calls setSelectedValues when checkbox is clicked', () => {
    render(<MultiModePopover handleChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } isMulti={false} {...mockProps} />);
    const checkbox = screen.getByLabelText('Option 1');
    fireEvent.click(checkbox);
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith(['1']);
  });

  it('calls handleSelectAll when "Select All" is clicked', () => {
    render(<MultiModePopover handleChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } isMulti={false} {...mockProps} />);
    const selectAllButton = screen.getByTestId('select-all-button');
    fireEvent.click(selectAllButton);
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith(['1', '2']);
  });

  it('calls handleDeselectAll when "Deselect All" is clicked', () => {
    render(<MultiModePopover handleChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } isMulti={false} {...mockProps} />);
    const deselectAllButton = screen.getByTestId('deselect-all-button');
    fireEvent.click(deselectAllButton);
    expect(mockProps.setSelectedValues).toHaveBeenCalledWith([]);
  });

  it('displays "No results found" when there are no options', () => {
    render(<MultiModePopover handleChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
    } } isMulti={false} {...mockProps} filteredOptions={[]} />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
