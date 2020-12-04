import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../WebAPI';
import useInput from '../useInput';
import Input from '../components/Input';

export default function Login() {
  
  const {
    errorMessage,
    setErrorMessage,
    inputs,
    setInputs,
    handleChange,
    handleValidationCheck
  } = useInput();
  const history = useHistory();

  useEffect(() => {
    const formInputs = [
      {
        attributes: {
          type: 'text',
          name: 'username',
          value: '',
          required: true
        },
        title: '帳號'
      },
      {
        attributes: {
          type: 'text',
          name: 'nickname',
          value: '',
          required: true
        },
        title: '暱稱'
      },
      {
        attributes:
        {
          type: 'password',
          name: 'password',
          value: '',
          required: true
        },
        title: '密碼'
      },
      {
        attributes:
        {
          type: 'submit',
          name: 'submit',
          value: '註冊'
        },
        title: ''
      },
    ]
    setInputs(formInputs);
  }, [setInputs])


  const handleRegister = async (e) => {
    e.preventDefault();
    const filters = ['username', 'password', 'nickname'];
    const registerInformation = {};
    inputs.forEach(input => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          registerInformation[filter] = input.attributes.value
        }
      }
    })
    try {
      const response = await register(registerInformation);
      if (response.ok !== 1) {
        setErrorMessage(response.message);
        return;
      }
      window.localStorage.setItem('token', response.token);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
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