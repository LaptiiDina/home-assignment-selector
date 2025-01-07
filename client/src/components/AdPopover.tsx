import { useState } from "react";
import { AdPopoverProps } from "../types";
import { MultiModePopover } from "./MultiModePopover";
import { SingleModePopover } from "./SingleModePopover";

export const AdPopover: React.FC<AdPopoverProps> = ({ options, placeholder = 'Select...', isMulti=false, setSelectedValues, selectedValues }) => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { options } = event.target;
      const selected = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
  
        setSelectedValues((prev) => {
            if (isMulti) {
              return Array.from(new Set([...prev, ...selected]));
            } else {
              return selected.length > 0 ? [selected[0]] : [];
            }
          });
    };

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
    return (
        <div style={{ position: 'relative', width: '200px' }}>
              <button
      type="button"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          textAlign: 'left',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}
      >
              {selectedValues.length > 0 && !isMulti
          ? filteredOptions.find((opt) => opt.value === selectedValues[0])?.label || 'Select Option'
          : 'Select Option'}
      </button>
{isMulti ?
    <MultiModePopover
    setSelectedValues={setSelectedValues}
    isOpen={isOpen}
      placeholder={placeholder}
      searchTerm={searchTerm}
      handleSearch={handleSearch}
      handleChange={handleChange}
      selectedValues={selectedValues}
      filteredOptions={filteredOptions}
      setOpen={setOpen}
    /> :  <SingleModePopover
    placeholder={placeholder}
    searchTerm={searchTerm}
    handleSearch={handleSearch}
    selectedValues={selectedValues}
    filteredOptions={filteredOptions}
    setOpen={setOpen}
    setSelectedValues={setSelectedValues}
    isOpen={isOpen}
  />
        }
        </div>
      );
    };
