import { useState, useEffect, useRef } from "react";
import { AdPopoverProps } from "../types";
import { MultiModePopover } from "./MultiModePopover";
import { SingleModePopover } from "./SingleModePopover";

export const AdPopover: React.FC<AdPopoverProps> = ({
  options,
  placeholder = "Select...",
  isMulti = false,
  setSelectedValues,
  selectedValues,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const commonProps = {
    placeholder,
    searchTerm,
    handleSearch,
    selectedValues,
    filteredOptions,
    setOpen,
    isOpen,
    setSelectedValues,
  };

  return (
    <div
      ref={popoverRef}
      style={{ position: "relative", width: "200px" }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          textAlign: "left",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
      >
        {selectedValues.length > 0 && !isMulti
          ? filteredOptions.find((opt) => opt.value === selectedValues[0])?.label ||
            "Select Option"
          : "Select Option"}
      </button>
      {isMulti ? (
        <MultiModePopover
         {...commonProps}
        />
      ) : (
        <SingleModePopover
         {...commonProps}
        />
      )}
    </div>
  );
};
