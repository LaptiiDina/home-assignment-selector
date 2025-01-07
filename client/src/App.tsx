import React from 'react';
import { useForm} from 'react-hook-form';
import { SelectPopover } from './components/SelectPopover';
import { FormValues } from './types';


const App: React.FC = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 400 }}>
      <input
        {...register('name', { required: 'Name is required' })}
        type="text"
        placeholder="Name"
        style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      <input
        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
        type="email"
        placeholder="Email"
        style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

      <SelectPopover control={control}/>

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
