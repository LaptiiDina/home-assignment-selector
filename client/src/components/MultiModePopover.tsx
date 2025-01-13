import { FC } from 'react';
import { MultiModePopoverProps} from '../types';

export const MultiModePopover: FC<MultiModePopoverProps> = (props) => {
  const{isOpen, placeholder, searchTerm, handleSearch, filteredOptions, setSelectedValues, selectedValues}=props;
  const handleCheckboxChange = (value: string | number) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  

  const handleSelectAll = () => {
    const allValues = filteredOptions.map((option) => option.value);
    setSelectedValues(allValues);
  };

  const handleDeselectAll = () => {
    setSelectedValues([]);
  };

  return (
    <>
      {isOpen && (
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
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleSearch}
            style={{
              margin: '5px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '90%',
            }}
          />
          <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '5px' }}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
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
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                    style={{ marginRight: '10px' }}
                  />
                  {option.label}
                </label>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>No results found</p>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0 15px'}}>
              <button  type="button" onClick={handleSelectAll} data-testid="select-all-button">Select All</button>
              <button   type="button" onClick={handleDeselectAll} data-testid="deselect-all-button">Deselect All</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
