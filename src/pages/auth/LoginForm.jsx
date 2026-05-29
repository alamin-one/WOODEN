import Button from '../../components/ui/Button';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth/AuthContextprovider';
import { Link } from 'react-router';

/*  */
const LoginForm = () => {
  const { error, signinFN } = useAuth();
  const [signUPForm, setSignUPForm] = useState({
    email: '',
    password: '',
  });

  /* input update */
  const inputUpdate = (value, type) => {
    setSignUPForm(prev => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  /* submit FN */
  const singInSubmit = async e => {
    e.preventDefault();
    await signinFN(signUPForm.email, signUPForm.password);
  };

  const inputStyle = {
    borderBottom: '1px solid #ddd',
    outline: 'none',
    fontSize: '12px',
    color: '#6b7280',
    padding: '6px 0',
  };

  return (
    <>
      <form onSubmit={e => singInSubmit(e)}>
        <div className="flex flex-col gap-2.5">
          <input
            type="email"
            placeholder="E-mail"
            value={signUPForm.email}
            onChange={e => inputUpdate(e.target.value, 'email')}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="password"
            value={signUPForm.password}
            onChange={e => inputUpdate(e.target.value, 'password')}
            style={inputStyle}
          />
        </div>
        <Button className="mt-5"> LogIn</Button>
      </form>
      {error && <p className="text-xs text-red-500">{error.message}</p>}
      <Link className="text-gray-500">Forget Password</Link>
    </>
  );
};

export default LoginForm;
