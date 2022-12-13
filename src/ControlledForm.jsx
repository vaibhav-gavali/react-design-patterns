import React, { useState, useEffect } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: { value: '', error: '' },
    age: { value: '', error: '' },
    hairColor: { value: '', error: '' },
  });

  console.log(formData);
  useEffect(() => {
    console.log('Yeda banaya tereko');
  }, []);

  useEffect(() => {
    const { name } = formData;
    const updatedFormData = {
      ...formData,
      name: {
        ...name,
        error: name.value.length < 2 ? 'Name must be long' : '',
      },
    };
    setFormData(updatedFormData);
  }, [formData.name.value]);

  const updateFormData = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;

    const newFormData = { ...formData, [name]: { ...formData[name], value } };
    setFormData(newFormData);
  };

  return (
    <form>
      <input
        name="name"
        type={'text'}
        placeholder="Name"
        value={formData.name.value}
        onChange={(e) => updateFormData(e)}
      />
      <input
        name="age"
        type={'number'}
        placeholder="Age"
        value={formData.age.value}
        onChange={updateFormData}
      />
      <input
        name="hairColor"
        type={'text'}
        placeholder="Hair Color"
        value={formData.hairColor.value}
        onChange={updateFormData}
      />
      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
