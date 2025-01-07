import React, { useState, useMemo } from 'react';

type Option = {
  label: string;
  value: string | number;
};

type CustomSelectProps = {
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ options, isMulti = false, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    if (isMulti) {
      setSelectedOptions((prev) =>
        prev.find((o) => o.value === option.value)
          ? prev.filter((o) => o.value !== option.value)
          : [...prev, option]
      );
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const filteredOptions = useMemo(
    () => options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())),
    [options, searchTerm]
  );

  const handleSelectAll = () => setSelectedOptions(options);
  const handleDeselectAll = () => setSelectedOptions([]);

  return (
    <div style={{ position: 'relative', width: 300 }}>
      <div onClick={toggleDropdown} style={{ border: '1px solid black', padding: 10 }}>
        {selectedOptions.length > 0
          ? selectedOptions.map((o) => o.label).join(', ')
          : placeholder || 'Select...'}
      </div>
      {isOpen && (
        <div style={{ border: '1px solid black', position: 'absolute', background: 'white', width: '100%' }}>
          {isMulti && (
            <>
              <button onClick={handleSelectAll}>Select All</button>
              <button onClick={handleDeselectAll}>Deselect All</button>
            </>
          )}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: 5 }}
          />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, maxHeight: 200, overflowY: 'auto' }}>
            {filteredOptions.map((option) => (
              <li key={option.value} style={{ padding: 5 }}>
                <label>
                  {isMulti && (
                    <input
                      type="checkbox"
                      checked={selectedOptions.some((o) => o.value === option.value)}
                      onChange={() => handleOptionClick(option)}
                    />
                  )}
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
