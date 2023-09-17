import React from 'react';

export const TextInput = ({ label, name, value, onChange }) => (
  <label>
    {label}:
    <input type="text" name={name} value={value} onChange={onChange} />
  </label>
);

export const TextArea = ({ label, name, value, onChange }) => (
  <label>
    {label}:
    <textarea name={name} value={value} onChange={onChange} />
  </label>
);

export const FileInput = ({ label, name, onChange }) => (
  <label>
    {label}:
    <input type="file" name={name} onChange={onChange} />
  </label>
);