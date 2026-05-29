import { useState } from 'react';
import Button from '../../components/ui/Button';
import { useAuth } from '../../contexts/auth/AuthContextprovider';


const RegisterForm = () => {
  const { error, signUpWithEmail } = useAuth();
  /* local state */
  const [signUPForm, setSignUPForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
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

  /* form submit FN */

  const createSubmit = e => {
    e.preventDefault();
    signUpWithEmail(signUPForm.name, signUPForm.email, signUPForm.password);
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
      <form onSubmit={e => createSubmit(e)}>
        <div className="flex flex-col gap-2.5">
          <input
            required
            style={inputStyle}
            type="name"
            placeholder="Name"
            value={signUPForm.name}
            onChange={e => inputUpdate(e.target.value, 'name')}
          />
          <input
            required
            style={inputStyle}
            type="email"
            placeholder="E-mail"
            value={signUPForm.email}
            onChange={e => inputUpdate(e.target.value, 'email')}
          />
          <input
            required
            style={inputStyle}
            type="password"
            placeholder="password"
            value={signUPForm.password}
            onChange={e => inputUpdate(e.target.value, 'password')}
          />
          <input
            required
            style={inputStyle}
            type="confirmpassword"
            placeholder="Confirm Password"
            value={signUPForm.confirmpassword}
            onChange={e => inputUpdate(e.target.value, 'confirmpassword')}
          />
        </div>
        <Button type="submit" className="mt-5">
          Register
        </Button>
      </form>

      {error && <p className="text-xs text-red-500">password don't match</p>}
    </>
  );
};

export default RegisterForm;
