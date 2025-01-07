import { FC } from 'react';
import { MultiModePopoverProps } from '../types';

export const MultiModePopover: FC<MultiModePopoverProps> = (props) => {
  const handleCheckboxChange = (value: string | number) => {
    if (props.selectedValues.includes(value)) {
      props.setSelectedValues(
        props.selectedValues.filter((selectedValue) => selectedValue !== value)
      );
    } else {
      props.setSelectedValues([...props.selectedValues, value]);
    }
  };

  const handleSelectAll = () => {
    const allValues = props.filteredOptions.map((option) => option.value);
    props.setSelectedValues(allValues);
  };

  const handleDeselectAll = () => {
    props.setSelectedValues([]);
  };

  return (
    <>
      {props.isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 1000,
            marginTop: '2px',
          }}
        >
          <input
            type="text"
            placeholder={props.placeholder}
            value={props.searchTerm}
            onChange={props.handleSearch}
            style={{
              margin: '5px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '90%',
            }}
          />
          <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '5px' }}>
            {props.filteredOptions.length > 0 ? (
              props.filteredOptions.map((option) => (
                <label
                  key={option.value}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={props.selectedValues.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                    style={{ marginRight: '10px' }}
                  />
                  {option.label}
                </label>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>No results found</p>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button  type="button" onClick={handleSelectAll} data-testid="select-all-button">Select All</button>
              <button   type="button" onClick={handleDeselectAll} data-testid="deselect-all-button">Deselect All</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
