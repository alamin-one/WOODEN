
import Button from '../../components/ui/Button';

const RegisterForm = () => {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-2.5">
          <input
            type="name"
            placeholder="Name"
            className="border-b border-[#ddd] outline-none placeholder:text-xs text-gray-500 py-1.5 "
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border-b border-[#ddd] outline-none placeholder:text-xs text-gray-500 py-1.5 "
          />
          <input
            type="password"
            placeholder="password"
            className="border-b border-[#ddd] outline-none placeholder:text-xs text-gray-500 py-1.5"
          />
        </div>
        <Button className="mt-5">Register</Button>
      </form>
     
    </>
  );
};

export default RegisterForm;
