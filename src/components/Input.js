export default function Input({ input, handleChange, handleValidationCheck }) {
  const { attributes } = input;
  
  const handleValueChange = (e) => {
    handleChange(input.attributes.name, e.target.value)
  }

  const handleValidation = (e) => {
    handleValidationCheck(input.attributes.name, e.target.validationMessage)
  }

  return (
    <div>
      <label htmlFor={attributes.name}>
        {input.title ? <h3>{input.title}</h3> : ''}
      </label>
      <div>
        {input.attributes.type !== 'textarea'
          ? <input
            {...attributes}
            onChange={handleValueChange}
            onBlur={handleValidation}
            onInvalid={handleValidation} />
          : <textarea
            {...attributes}
            onChange={handleValueChange}
            onBlur={handleValidation}
            onInvalid={handleValidation}>
            </textarea>
          }
      </div>
    </div>
  )
  
}