import { useState } from "react";

export const useForm = (initialData = {}) => {

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleReset = () => {
    setFormData(initialData);
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleReset,
  };
};
