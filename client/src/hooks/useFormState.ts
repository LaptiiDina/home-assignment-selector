import { useState } from 'react';
import { FormData } from '../types';


export const useFormState = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { formData, setFormData, handleInputChange };
};
