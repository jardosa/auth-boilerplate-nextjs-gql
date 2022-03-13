import Image from 'next/image';
import Login from '../../components/pages/Auth';

const LoginPage = () => (
  <Login
    logoNode={
      <Image alt="logo" className="rounded-full" height={120} width={120} src={'/logo.jpg'} />
    }
  />
);

export default LoginPage;
