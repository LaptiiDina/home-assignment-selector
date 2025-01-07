import React from 'react';
import { Controller } from 'react-hook-form';
import { AdPopover } from './AdPopover';
import {  SelectPopoverProps } from '../types';


export const SelectPopover: React.FC<SelectPopoverProps> = ({ control }) => (
  <Controller
    control={control}
    name="selectedOptions"
    defaultValue={[]}
    render={({ field: { value, onChange } }) => (
      <AdPopover
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
        ]}
        isMulti
        placeholder="Select..."
        selectedValues={value || []}
        setSelectedValues={onChange}
      />
    )}
  />
);
