export interface AdPopoverProps {
options: Options[];
isMulti?: boolean;
placeholder?: string;
selectedValues: (string | number)[];
setSelectedValues: (values: (string | number)[] | ((prev: (string | number)[]) => (string | number)[])) => void;
}

interface Options {
    label: string;
    value: string | number
}
export interface FormData {
  name: string;
  email: string;
}


export interface MultiModePopoverProps  {
    placeholder: string;
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedValues: (string | number)[];
    setSelectedValues: (values: (string | number)[] | ((prev: (string | number)[]) => (string | number)[])) => void;
    filteredOptions: Options[];
  
    isOpen: boolean;
  };

  export type SingleModePopoverProps = MultiModePopoverProps & {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

