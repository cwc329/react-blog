import { useEffect } from 'react';
import { addPost } from '../WebAPI';
import useInput from '../useInput';
import useAuthorization from '../useAuthorization';
import Input from '../components/Input';

export default function AddPost() {
  const { history } = useAuthorization();
  const {
    errorMessage,
    setErrorMessage,
    inputs,
    setInputs,
    handleChange,
    handleValidationCheck
  } = useInput();

  useEffect(() => {
    const formInputs = [
      {
        attributes: {
          type: 'text',
          name: 'title',
          value: '',
          required: true
        },
        title: '標題'
      },
      {
        attributes: {
          type: 'textarea',
          name: 'body',
          value: '',
          required: true
        },
        title: '內文'
      },
      {
        attributes:
        {
          type: 'submit',
          name: 'submit',
          value: '發布'
        },
        title: ''
      },
    ];
    setInputs(formInputs)
  }, [setInputs]);

  const handleAddPost = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const filters = ['title', 'body'];
    const data = {}
    inputs.forEach(input => {
      const { name, value } = input.attributes;
      for (const filter of filters) {
        if (filter === name) {
          data[filter] = value;
        }
      }
    })
    await addPost({ token, data });
    history.push('/');
  }

  return (
    <div>
      <form onSubmit={handleAddPost}>
        {inputs.map(input => {
          return (
            <Input key={input.attributes.name} input={input} handleChange={handleChange} handleValidationCheck={handleValidationCheck} />
          )
        })}
      </form>
      <div><p>{errorMessage}</p></div>
    </div>
  )
}