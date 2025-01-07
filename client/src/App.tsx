import React from 'react';
import { useFormState } from './hooks/useFormState';
import { useSelectedValues } from './hooks/useSelectedValues';
import { AdPopover } from './components/AdPopover';

const App: React.FC = () => {
  const { formData, handleInputChange, setFormData } = useFormState();

  const {
    selectedValues,
    clearValues,
    setSelectedValues, 
  } = useSelectedValues();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', {
      ...formData,
      selectedOptions: selectedValues,
    });
    clearValues();
    setFormData({name: '', email: ''})
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: 400,
      }}
    >

      <input
        required
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        type="text"
        placeholder="Name"
        style={{
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />


      <input
        required
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
        style={{
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />


      <AdPopover
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
        ]}
        isMulti //!isMulti = <SingleModePopover/>;  isMulti = <MultiModePopover/>
        placeholder="Select options"
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues} 
      />

      <button
        type="submit"
        style={{
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: 'green',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default App;
