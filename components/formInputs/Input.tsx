import React from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  label: string;
  type: 'email' | 'number' | 'password' | 'text';
  name: string;
  loading: boolean;
};

const Input = ({ label, type, name, loading }: InputProps) => {
  const { register } = useFormContext();

  return (
    <div className="relative ">
      <input
        id={name}
        disabled={loading}
        autoComplete="off"
        className={`input peer placeholder-transparent rounded-sm ${
          loading && 'disabled:bg-gray-300'
        }`}
        type={type}
        placeholder={label}
        {...register(name, { required: true, minLength: 1 })}
      />
      <label className="label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Input;
