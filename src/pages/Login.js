import { useEffect } from 'react';
import { login } from '../WebAPI';
import useInput from '../useInput';
import Input from '../components/Input';
import { useHistory } from 'react-router-dom';

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
          value: '登入'
        },
        title: ''
      },
    ]
    setInputs(formInputs);
  }, [setInputs])


  const handleLogin = async (e) => {
    e.preventDefault();
    const filters = ['username', 'password'];
    const loginInformation = {};
    inputs.forEach(input => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          loginInformation[filter] = input.attributes.value
        }
      }
    })
    try {
      const response = await login(loginInformation);
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
      <form onSubmit={handleLogin}>
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