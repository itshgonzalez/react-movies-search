import { useState } from "react";

function useForm(initState) {
  const [form, setForm] = useState(initState);

  function handleChange({ target }) {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  return { form, handleChange, ...form };
}

export default useForm;
