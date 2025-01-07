import { FC } from 'react';
import {  SingleModePopoverProps } from '../types';

export const SingleModePopover: FC<SingleModePopoverProps> = (props) => {
  const handleOptionSelect = (value: string | number) => {
    props.setSelectedValues([value]);
    props.setOpen(false); 
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
          <div style={{ display: "flex", maxHeight: "150px", padding: "5px", flexDirection: "column", width: "40%" }}>
            {props.filteredOptions.length > 0 ? (
              props.filteredOptions.map((option) => (
                <button
                type="button"
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  style={{
                    padding: '5px',
                    marginTop: '5px'
                  }}
                >
                  {option.label}
                </button>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>No results found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
