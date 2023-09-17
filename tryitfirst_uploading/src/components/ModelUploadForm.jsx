import React, { useState } from 'react';
import { TextInput, TextArea, FileInput } from './LabelComponents'; // Adjust the import based on your file structure

export const ModelUploadForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    itemDescription: '',
    glbFile: null,
    usdzFile: null,
    posterImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data up to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Item Name" name="itemName" value={formData.itemName} onChange={handleChange} />
      <br />
      <TextInput label="Price" name="price" value={formData.price} onChange={handleChange} />
      <br />
      <TextArea label="Item Description" name="itemDescription" value={formData.itemDescription} onChange={handleChange} />
      <br />
      <FileInput label="GLB File" name="glbFile" onChange={handleFileChange} />
      <br />
      <FileInput label="USDZ File" name="usdzFile" onChange={handleFileChange} />
      <br />
      <FileInput label="Poster Image" name="posterImage" onChange={handleFileChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};


