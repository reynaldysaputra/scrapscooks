import React from 'react';

function InputUser(props){
  return (
    <label class="block mt-4">
      <span class="text-gray-700 block mb-2">{props.name}</span>
      <input class="form-input px-2 py-1 w-full" {...props} />
    </label>
  )
}

export default InputUser;