import { useState } from 'react';

export const useSelectedValues = () => {
   const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  
   const handleSetSelectedValues = (
    values: (string | number)[] | ((prev: (string | number)[]) => (string | number)[])
  ) => {
    setSelectedValues(values);
  };

  const clearValues = () => {
    setSelectedValues([]);
  };

  return {
    selectedValues,
    setSelectedValues: handleSetSelectedValues, 
    clearValues,
  };
};
