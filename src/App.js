/*Create a dynamic form in React/Angular having the following functionalities.

1. There will be an interactive button to add form fields
2. Upon clicking the button it will prompt the application visitor to choose between the input types - input(text, password, email), textarea
3. Next, the application visitor will be able to specify the label for each field
4. Once done, application visitor can click on save button which will show the preview of the form

 */
import React, { useState } from 'react'

const App = () => {

  
    const [inputs , setInputs] = useState([]);
    const [selectedType , setSelectedType] = useState('');
    const [label,setLabel]= useState('');
    const [showPreview , setShowPreview] = useState(false);

    const addInput = () =>{
      setInputs([...inputs,{type:selectedType,label:label}])
    };

    const handleTypeChange = (e)=>{
      setSelectedType(e.target.value);
    };
    
      const handleLabelChange = (e)=>{
      setLabel(e.target.value);
    };


    const handlePreviewClick = () =>{
      setShowPreview(true);
    };

    
  
  return (
    <div>
      <button onClick={addInput}>Addinput</button>
      <select onChange={handleTypeChange}>
      <option value = 'text'>Text</option>
      <option value = 'password'>Password</option>
      <option value = 'email'>Email</option>
      <option value = 'textarea'>Textarea</option>
      </select>

      <input type = 'text' onChange={handleLabelChange} placeholder = "Label" />

      {
        showPreview ?(
          <div>
            {inputs.map((input,index)=>(
              <div key ={index}>
              {input.type==="textarea" ? (
                <textarea placeholder={input.label}/>
              ):(
                <input type={input.type}
                placeholder ={input.label}/>
              )}
              </div>
            ))}
          </div>
        ):(
          <button onClick={handlePreviewClick}>
            preview
          </button>
        )
      }
    </div>
  );
    };

export default App


