import React, { useState } from 'react';
import Select from 'react-select';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '200px'
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: '200px'
    }),
  };

  return (
    <div>
      <h1>React Select Dropdown</h1>
      <Select 
        options={options}
        placeholder="Choose an option..."
        onChange={setSelectedOption}
        styles={customStyles}
      />
      {selectedOption && <div>Selected: {selectedOption.label}</div>}
    </div>
  );
}

export default App;

