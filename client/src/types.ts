import { Control } from "react-hook-form";

export interface AdPopoverProps {
options: Options[];
isMulti?: boolean;
placeholder?: string;
selectedValues: (string | number)[];
setSelectedValues: React.Dispatch<React.SetStateAction<(string | number)[]>>;
}

interface Options {
    label: string;
    value: string | number
}

export interface MultiModePopoverProps  {
    placeholder: string;
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedValues: (string | number)[];
    setSelectedValues: React.Dispatch<React.SetStateAction<(string | number)[]>>;
    filteredOptions: Options[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  };

  export type SingleModePopoverProps = Omit<MultiModePopoverProps, 'isMulti' | 'handleChange'>;
  export interface SelectPopoverProps {
    control: Control<FormValues, any>;
  }

  export type FormValues = {
    name: string;
    email: string;
    selectedOptions: (string | number)[];
  };